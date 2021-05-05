import { useSpring } from "@react-spring/core"
import { OurAnimatedShaderMaterial } from "./OurShaderMaterial"
import { useControls } from "leva"

const App = () => {
  const {
    a,
    b,
    c,
    d,
    e: [e0, e1],
    mass,
    tension,
    friction,
  } = useControls({
    a: {
      min: 10,
      max: 20,
      value: 10,
      step: 0.001,
    },
    b: {
      min: 10,
      max: 20,
      value: 10,
      step: 0.001,
    },
    c: {
      min: 0,
      max: 0.3,
      value: 0.1,
      step: 0.001,
    },
    d: {
      min: -1,
      max: 1,
      value: 1,
      step: 0.001,
    },
    e: {
      min: 0,
      max: 1000,
      step: 1,
      value: [0, 500],
    },
    mass: {
      min: 0.1,
      max: 2,
      step: 0.001,
      value: 1,
    },
    tension: {
      min: 50,
      max: 300,
      step: 1,
      value: 200,
    },
    friction: {
      min: 10,
      max: 200,
      value: 30,
      step: 1,
    },
  })
  const [{ e }] = useSpring(
    {
      e: e1,
      from: {
        e: e0,
      },
      loop: {
        reverse: true,
      },
      config: {
        mass,
        friction,
        tension,
      },
    },
    [e0, e1, mass, tension, friction]
  )
  return (
    <mesh rotation-x={Math.PI / 2} position-y={1}>
      <planeBufferGeometry args={[3, 3, 30, 30]} />
      <OurAnimatedShaderMaterial
        uniforms-a-value={a}
        uniforms-b-value={b}
        uniforms-c-value={c}
        uniforms-d-value={d}
        uniforms-e-value={e}
        wireframe
      />
    </mesh>
  )
}

export default App
