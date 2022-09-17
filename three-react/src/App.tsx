import { Canvas } from '@react-three/fiber';
import { Float, Lightformer, OrbitControls, useGLTF } from '@react-three/drei';
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas style={{ background: '#fff' }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <Porsche scale={1.6} rotation={[0, Math.PI / 5, 0]} />
      </Canvas>
    </div>
  );
}

function Porsche(props: { scale: number; rotation: number[] }) {
  const { scene } = useGLTF('/911-transformed.glb');
  return <primitive object={scene} {...props} />;
}
export default App;
