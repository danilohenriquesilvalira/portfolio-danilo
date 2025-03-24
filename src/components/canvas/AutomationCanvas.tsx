import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// Componente de loader para exibir enquanto o modelo 3D carrega
const CanvasLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="canvas-loader"></div>
      <p className="text-white text-sm mt-4">Carregando visualização 3D...</p>
    </div>
  );
};

// Componente de luzes aprimorado com efeitos dinâmicos
const Lights = () => {
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  
  // Animação para luzes
  useFrame(({ clock }) => {
    if (spotLightRef.current) {
      const time = clock.getElapsedTime() * 0.5;
      spotLightRef.current.position.x = Math.sin(time) * 5;
      spotLightRef.current.position.z = Math.cos(time) * 5;
    }
    
    if (pointLightRef.current) {
      const time = clock.getElapsedTime() * 0.2;
      pointLightRef.current.intensity = 0.5 + Math.sin(time) * 0.3;
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <spotLight 
        ref={spotLightRef}
        position={[5, 5, 5]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        color="#0072BB"
      />
      <pointLight 
        ref={pointLightRef}
        position={[-5, 0, 0]} 
        intensity={0.5} 
        color="#39B54A" 
      />
    </>
  );
};

// PLC Model Component - Modelo mais detalhado e interativo
const PLCModel = () => {
  const plcRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const ledsRef = useRef<Array<THREE.Mesh | null>>([]);
  
  // Animação para o PLC
  useFrame(({ clock }) => {
    if (plcRef.current) {
      plcRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
    
    // Animação para a tela do PLC
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    }
    
    // Animação para os LEDs
    ledsRef.current.forEach((led, index) => {
      if (led) {
        const material = led.material as THREE.MeshStandardMaterial;
        // Diferentes padrões de piscagem para diferentes LEDs
        const blinkPattern = Math.sin(clock.getElapsedTime() * (1 + index * 0.5) + index);
        material.emissiveIntensity = blinkPattern > 0.7 ? 1 : 0.3;
      }
    });
  });
  
  return (
    <group ref={plcRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.5}>
      {/* Corpo principal do PLC */}
      <mesh castShadow receiveShadow position={[0, 0, 0]} scale={[1, 1.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#0B3C5D" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Tela/display do PLC */}
      <mesh 
        ref={screenRef}
        position={[0, 0.2, 0.51]} 
        scale={[0.8, 0.4, 0.05]}
      >
        <boxGeometry />
        <meshStandardMaterial 
          color="#0D0D0D" 
          emissive="#0072BB" 
          emissiveIntensity={0.5} 
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Detalhes da tela - Linhas de dados simuladas */}
      <group position={[0, 0.2, 0.53]}>
        <mesh scale={[0.7, 0.02, 0.01]} position={[0, 0.12, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#39B54A" emissive="#39B54A" emissiveIntensity={1} />
        </mesh>
        <mesh scale={[0.6, 0.02, 0.01]} position={[0, 0.06, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#39B54A" emissive="#39B54A" emissiveIntensity={1} />
        </mesh>
        <mesh scale={[0.65, 0.02, 0.01]} position={[0, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#39B54A" emissive="#39B54A" emissiveIntensity={1} />
        </mesh>
        <mesh scale={[0.55, 0.02, 0.01]} position={[0, -0.06, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#39B54A" emissive="#39B54A" emissiveIntensity={1} />
        </mesh>
        <mesh scale={[0.7, 0.02, 0.01]} position={[0, -0.12, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#39B54A" emissive="#39B54A" emissiveIntensity={1} />
        </mesh>
      </group>
      
      {/* Botões */}
      {[0.3, 0, -0.3].map((x, i) => (
        <mesh key={i} position={[x, -0.4, 0.54]} scale={[0.15, 0.15, 0.05]}>
          <cylinderGeometry args={[1, 1, 1, 32]} />
          <meshStandardMaterial 
            color={i === 1 ? "#22cc44" : i === 0 ? "#cc2222" : "#cccc22"} 
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      ))}
      
      {/* Painéis laterais com dissipadores de calor */}
      <group position={[0.55, 0, 0]}>
        {Array(8).fill(0).map((_, i) => (
          <mesh key={i} position={[0, (i - 3.5) * 0.15, 0]} scale={[0.05, 0.1, 0.45]}>
            <boxGeometry />
            <meshStandardMaterial color="#0F2940" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </group>
      
      <group position={[-0.55, 0, 0]}>
        {Array(8).fill(0).map((_, i) => (
          <mesh key={i} position={[0, (i - 3.5) * 0.15, 0]} scale={[0.05, 0.1, 0.45]}>
            <boxGeometry />
            <meshStandardMaterial color="#0F2940" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </group>
      
      {/* LEDs indicadores */}
      {[0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6].map((x, i) => {
        const ledColors = [
          "#44ff44", // verde
          "#ffff44", // amarelo
          "#ff4444", // vermelho
          "#4444ff", // azul
          "#44ff44", // verde
          "#ffff44", // amarelo
          "#ff4444"  // vermelho
        ];
        
        return (
          <mesh 
            key={i}
            ref={el => ledsRef.current[i] = el}
            position={[x, 0.55, 0.52]} 
            scale={[0.05, 0.05, 0.02]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial 
              color={ledColors[i]} 
              emissive={ledColors[i]} 
              emissiveIntensity={0.8}
              metalness={0.1}
              roughness={0.3}
            />
          </mesh>
        );
      })}
      
      {/* Portas de conexão na parte inferior */}
      {[-0.35, 0, 0.35].map((x, i) => (
        <mesh key={i} position={[x, -0.7, 0.3]} scale={[0.15, 0.08, 0.1]}>
          <boxGeometry />
          <meshStandardMaterial color="#1A1A1A" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      
      {/* Texto do modelo */}
      <group position={[0, 0.7, 0.3]}>
        <Text
          position={[0, 0, 0.26]}
          scale={[0.2, 0.2, 0.2]}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/RobotoMono-Bold.ttf"
        >
          INDUSTRIAL PLC
        </Text>
        <Text
          position={[0, -0.08, 0.26]}
          scale={[0.1, 0.1, 0.1]}
          color="#0072BB"
          anchorX="center"
          anchorY="middle"
          font="/fonts/RobotoMono-Regular.ttf"
        >
          SIMATIC S7-1500
        </Text>
      </group>
    </group>
  );
};

// Componente que cria partículas para representar dados fluindo
const DataParticles = () => {
  const particlesCount = 300;
  const particlesRef = useRef<THREE.Points>(null);
  const particlesGroupRef = useRef<THREE.Group>(null);
  
  // Criar posições aleatórias para as partículas
  const [positions] = useState(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    
    return positions;
  });
  
  // Cores para as partículas
  const [colors] = useState(() => {
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Escolha aleatória entre azul, verde e laranja
      const colorSet = Math.random();
      
      if (colorSet < 0.33) {
        // Azul - Tech Blue
        colors[i3] = 0; // R
        colors[i3 + 1] = 0.45; // G
        colors[i3 + 2] = 0.73; // B
      } else if (colorSet < 0.66) {
        // Verde - Industry Green
        colors[i3] = 0.22; // R
        colors[i3 + 1] = 0.71; // G
        colors[i3 + 2] = 0.29; // B
      } else {
        // Laranja - Automation Orange
        colors[i3] = 1.0; // R
        colors[i3 + 1] = 0.35; // G
        colors[i3 + 2] = 0.13; // B
      }
    }
    
    return colors;
  });
  
  // Animar as partículas
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const time = clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Movimento mais complexo baseado em funções senoidais
        positions[i3] += Math.sin(time * 0.1 + i * 0.01) * 0.01;
        positions[i3 + 1] -= 0.015 + Math.sin(i) * 0.005; // Movimento para baixo variável
        positions[i3 + 2] += Math.cos(time * 0.1 + i * 0.01) * 0.01;
        
        // Resetar a partícula quando ela atinge o limite inferior
        if (positions[i3 + 1] < -7.5) {
          positions[i3] = (Math.random() - 0.5) * 15;
          positions[i3 + 1] = 7.5;
          positions[i3 + 2] = (Math.random() - 0.5) * 15;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
    
    // Rotação suave do grupo de partículas
    if (particlesGroupRef.current) {
      particlesGroupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={particlesGroupRef}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            count={positions.length / 3} 
            array={positions} 
            itemSize={3} 
          />
          <bufferAttribute 
            attach="attributes-color" 
            count={colors.length / 3} 
            array={colors} 
            itemSize={3} 
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          vertexColors 
          transparent 
          opacity={0.8} 
          sizeAttenuation 
        />
      </points>
    </group>
  );
};

// Componente para texto flutuante
const FloatingTexts = () => {
  const { viewport } = useThree();
  
  // Textos para mostrar em torno da cena
  const texts = [
    { text: "Automação Industrial", position: [5, 3, 0], color: "#0072BB" },
    { text: "Indústria 4.0", position: [-5, 2, 3], color: "#39B54A" },
    { text: "SCADA", position: [4, -2, -3], color: "#FF5722" },
    { text: "IIoT", position: [-4, -3, -2], color: "#6E44FF" },
    { text: "PLC", position: [0, 4, 4], color: "#0072BB" },
    { text: "Digital Twin", position: [-3, 1, -5], color: "#39B54A" },
    { text: "Big Data", position: [6, -1, 2], color: "#FF5722" },
  ];
  
  return (
    <group>
      {texts.map((item, index) => (
        <Float
          key={index}
          speed={1 + Math.random() * 2} // Velocidade de flutuação variada
          rotationIntensity={0.5} // Intensidade de rotação
          floatIntensity={1} // Intensidade de flutuação
        >
          <Text
            position={item.position}
            scale={[1, 1, 1]}
            color={item.color}
            anchorX="center"
            anchorY="middle"
            fontSize={0.5}
            font="/fonts/RobotoMono-Bold.ttf"
            strokeColor="#000000"
            strokeWidth={0.01}
          >
            {item.text}
          </Text>
        </Float>
      ))}
    </group>
  );
};

// Componente principal
const AutomationCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Verificar se é um dispositivo móvel para ajustar a escala
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
      className="cursor-grab"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.3}
          enablePan={false}
          rotateSpeed={0.5}
        />
        
        <Lights />
        <PLCModel />
        <DataParticles />
        <FloatingTexts />
        
        {/* Fog para dar profundidade à cena */}
        <fog attach="fog" args={['#050505', 8, 25]} />
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
};

export default AutomationCanvas;