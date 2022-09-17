import { Canvas } from '@react-three/fiber';
import { Cloud, OrbitControls, Stars } from '@react-three/drei';
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#000' }}>
        <OrbitControls />
        {/* <Stars /> */}
        <Stars />
        <Cloud position={[0, 0, 0]} speed={0.2} opacity={0.3} />
        <Cloud position={[5, 2.5, -5]} speed={0.2} opacity={0.3} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attatch='geometry' />
          <meshLambertMaterial attatch='material' color='orange' />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
