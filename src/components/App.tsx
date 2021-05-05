import { OurAnimatedShaderMaterial } from "./OurShaderMaterial"

const App = () => {
  return (
    <mesh rotation-x={Math.PI / 2} position-y={1}>
      <planeBufferGeometry args={[3, 3, 30, 30]} />
      <OurAnimatedShaderMaterial wireframe />
    </mesh>
  )
}

export default App
