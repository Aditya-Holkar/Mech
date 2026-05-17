import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshTransmissionMaterial, Environment } from '@react-three/drei'
import useStore from '../store/useStore'

function GearModel() {
  const mesh = useRef(null)

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.3
  })

  const theme = useStore((s) => s.theme)
  const isDark = theme === 'dark'

  return (
    <group ref={mesh}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.35, 32, 48]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.5}
          roughness={0.1}
          metalness={0.8}
          clearcoat={0.4}
          clearcoatRoughness={0.2}
          color={isDark ? '#FFD141' : '#004B8D'}
          transmission={0.6}
          ior={1.5}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.5, 0.7, 32]} />
        <meshStandardMaterial
          color={isDark ? '#C8A22E' : '#002D62'}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
        <meshStandardMaterial
          color={isDark ? '#FFD141' : '#004B8D'}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} position={[Math.cos((i / 6) * Math.PI * 2) * 1.2, Math.sin((i / 6) * Math.PI * 2) * 1.2, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial
            color={isDark ? '#FFE070' : '#004BA0'}
            emissive={isDark ? '#FFD141' : '#004B8D'}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function CadViewer() {
  return (
    <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <GearModel />
        </Float>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2.5}
          maxDistance={10}
          autoRotate={false}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
