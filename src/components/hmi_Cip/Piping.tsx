import React, { useEffect, useState } from 'react';

interface PipingProps {
  activePipes: string[];
  fluidColor: string;
}

const Piping: React.FC<PipingProps> = ({ activePipes, fluidColor }) => {
  // State to track animated flow positions
  const [flowPositions, setFlowPositions] = useState<Record<string, number>>({});
  
  // Set up animation for active pipes
  useEffect(() => {
    if (activePipes.length === 0) {
      // Reset all animations when no pipes are active
      setFlowPositions({});
      return;
    }
    
    // Create animation interval
    const interval = setInterval(() => {
      setFlowPositions(prev => {
        const newPositions = { ...prev };
        
        // Update positions for active pipes
        activePipes.forEach(pipeId => {
          // If this pipe isn't being animated yet, initialize it
          if (newPositions[pipeId] === undefined) {
            newPositions[pipeId] = 0;
          }
          
          // Advance the flow position
          newPositions[pipeId] = (newPositions[pipeId] + 4) % 100;
        });
        
        // Remove positions for inactive pipes
        Object.keys(newPositions).forEach(pipeId => {
          if (!activePipes.includes(pipeId)) {
            delete newPositions[pipeId];
          }
        });
        
        return newPositions;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [activePipes]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0">
      {/* This SVG container will hold all the pipes */}
      
      {/* Main horizontal pipe */}
      <line x1="150" y1="300" x2="650" y2="300" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      
      {/* Vertical pipes from tanks to main pipe */}
      <line x1="200" y1="100" x2="200" y2="300" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      <line x1="400" y1="100" x2="400" y2="300" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      <line x1="600" y1="100" x2="600" y2="300" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      
      {/* Pipe to process and returns */}
      <line x1="200" y1="300" x2="200" y2="500" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      <line x1="400" y1="300" x2="400" y2="500" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      <line x1="600" y1="300" x2="600" y2="500" strokeWidth="10" stroke="#888" strokeLinecap="round" />
      
      {/* Now let's add the flowing liquid animations for active pipes */}
      {/* Horizontal pipe flow */}
      {'pump-out' in flowPositions && (
        <g>
          <line
            x1="150"
            y1="300"
            x2="650"
            y2="300"
            strokeWidth="6"
            stroke={fluidColor}
            strokeLinecap="round"
            strokeDasharray="20,20"
            strokeDashoffset={-flowPositions['pump-out']}
          />
        </g>
      )}
      
      {/* Vertical pipe flows - from tanks */}
      {'water-main' in flowPositions && (
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="300"
          strokeWidth="6"
          stroke="#3B82F6" // Always blue for water
          strokeLinecap="round"
          strokeDasharray="15,15"
          strokeDashoffset={-flowPositions['water-main']}
        />
      )}
      
      {'caustic-main' in flowPositions && (
        <line
          x1="400"
          y1="100"
          x2="400"
          y2="300"
          strokeWidth="6"
          stroke="#FBBF24" // Always yellow for caustic
          strokeLinecap="round"
          strokeDasharray="15,15"
          strokeDashoffset={-flowPositions['caustic-main']}
        />
      )}
      
      {'acid-main' in flowPositions && (
        <line
          x1="600"
          y1="100"
          x2="600"
          y2="300"
          strokeWidth="6"
          stroke="#EF4444" // Always red for acid
          strokeLinecap="round"
          strokeDasharray="15,15"
          strokeDashoffset={-flowPositions['acid-main']}
        />
      )}
      
      {/* Vertical pipe flows - to process and returns */}
      {'system-in' in flowPositions && (
        <line
          x1="200"
          y1="300"
          x2="200"
          y2="500"
          strokeWidth="6"
          stroke={fluidColor}
          strokeLinecap="round"
          strokeDasharray="15,15"
          strokeDashoffset={-flowPositions['system-in']}
        />
      )}
      
      {'caustic-return' in flowPositions && (
        <line
          x1="400"
          y1="300"
          x2="400"
          y2="500"
          strokeWidth="6"
          stroke={fluidColor}
          strokeLinecap="round"
          strokeDasharray="15,15"
          strokeDashoffset={-flowPositions['caustic-return']}
        />
      )}
      
      {'acid-return' in flowPositions && (
        <line
          x1="600"
          y1="300"
          x2="600"
          y2="500"
          strokeWidth="6"
          stroke={fluidColor}
          strokeLinecap="round"
          strokeDasharray="15,15"
          strokeDashoffset={-flowPositions['acid-return']}
        />
      )}
      
      {/* Add connection points/nodes */}
      <circle cx="200" cy="300" r="8" fill="#555" />
      <circle cx="400" cy="300" r="8" fill="#555" />
      <circle cx="600" cy="300" r="8" fill="#555" />
      
      {/* Labels for clarity */}
      <text x="180" y="90" fill="#3B82F6" className="text-xs">Água</text>
      <text x="380" y="90" fill="#FBBF24" className="text-xs">Cáustico</text>
      <text x="590" y="90" fill="#EF4444" className="text-xs">Ácido</text>
      
      <text x="140" y="520" fill="#888" className="text-xs">Processo</text>
      <text x="370" y="520" fill="#888" className="text-xs">Retorno Cáustico</text>
      <text x="580" y="520" fill="#888" className="text-xs">Retorno Ácido</text>
    </svg>
  );
};

export default Piping;