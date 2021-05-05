import { animated } from "@react-spring/three"
import { shaderMaterial } from "@react-three/drei"
import { extend, ShaderMaterialProps } from "@react-three/fiber"
import fragmentShader from "../shaders/fragment.glsl"
import vertexShader from "../shaders/vertex.glsl"

export const OurShaderMaterial = shaderMaterial(
  {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 0,
  },
  vertexShader,
  fragmentShader
)

extend({ OurShaderMaterial })

type OurShaderMaterialProps = Omit<ShaderMaterialProps, "uniforms"> & {
  uniforms?: {
    a: number
    b: number
    c: number
    d: number
    e: number
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ourShaderMaterial: OurShaderMaterialProps
    }
  }
}

export const OurAnimatedShaderMaterial = animated(
  (props: OurShaderMaterialProps) => <ourShaderMaterial {...props} />
)
