import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Componente de loader para exibir enquanto o modelo 3D carrega
const CanvasLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="canvas-loader"></div>
    </div>
  );
};

// Componente que representa um modelo 3D de PLC ou equipamento industrial
// Note: Este é um modelo simulado, você precisará substituir pelo seu próprio modelo GLTF
const AutomationModel = () => {
  // Em um caso real, você carregaria seu modelo GLTF assim:
  // const plc = useGLTF('/src/assets/models/plc.gltf');
  
  // Vamos criar um modelo simples para ilustração
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animação simples para rotação do modelo
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  // Criamos uma cor gradiente para o material
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#0072BB'),
    metalness: 0.7,
    roughness: 0.2,
  });

  return (
    <group>
      {/* Este é um modelo simples para demonstração */}
      {/* Substitua por seu modelo real importado */}
      <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} material={material}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#0072BB" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Tela/display do PLC */}
      <mesh position={[0, 0.2, 0.26]} scale={[0.8, 0.4, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color="#111111" emissive="#0a4d99" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Botões */}
      {[0.3, 0, -0.3].map((x, i) => (
        <mesh key={i} position={[x, -0.4, 0.3]} scale={[0.15, 0.15, 0.05]}>
          <cylinderGeometry args={[1, 1, 1, 32]} />
          <meshStandardMaterial color={i === 1 ? "#22cc44" : "#cc2222"} />
        </mesh>
      ))}
      
      {/* LEDs indicadores */}
      {[0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 0.26]} scale={[0.05, 0.05, 0.05]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#44ff44" : i % 3 === 1 ? "#ffff44" : "#ff4444"} 
            emissive={i % 3 === 0 ? "#44ff44" : i % 3 === 1 ? "#ffff44" : "#ff4444"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

// Componente que cria partículas para representar dados fluindo
const DataParticles = () => {
  const particlesCount = 200;
  const particlesRef = useRef<THREE.Points>(null);
  
  // Criar posições aleatórias para as partículas
  const [positions] = useState(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  });
  
  // Animar as partículas
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const time = clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Movimento senoidal para simular fluxo de dados
        positions[i3 + 1] -= 0.01; // Movimento para baixo
        
        // Resetar a partícula quando ela atinge o limite inferior
        if (positions[i3 + 1] < -5) {
          positions[i3] = (Math.random() - 0.5) * 10;
          positions[i3 + 1] = 5;
          positions[i3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#39B54A" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
};

// Componente de luzes
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 1, 1]} intensity={0.8} color="#ffffff" />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
    </>
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
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <Lights />
        <AutomationModel />
        <DataParticles />
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
};

export default AutomationCanvas;