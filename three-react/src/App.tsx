import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  useGLTF,
} from '@react-three/drei';
import { Porsche } from './Porsche';
// import Porsche from './Porsche';
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
        <Environment>
          <Lightformer
            form='ring'
            intensity={1}
            color='white'
            scale={[10, 5, 0]}
            target={[0, 0, 0]}
          />
          <Lightformer
            intensity={0.75}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={4}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[20, 0.1, 1]}
          />
          <Lightformer
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[20, 0.5, 1]}
          />
          <Lightformer
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 1, 1]}
          />
          <Float speed={5} floatIntensity={2} rotationIntensity={2}>
            {' '}
            <Lightformer
              form='ring'
              color='red'
              intensity={1}
              scale={10}
              position={[-15, 4, -18]}
              target={[0, 0, 0]}
            />
          </Float>
        </Environment>
      </Canvas>
    </div>
  );
}

// function Porsche(props: { scale: number; rotation: number[] }) {
//   const {
//     scene
//   } = useGLTF('/911-transformed.glb');
//   return <primitive object={scene} {...props} />;
// }
export default App;
