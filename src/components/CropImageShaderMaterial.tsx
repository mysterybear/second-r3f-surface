import { animated } from "@react-spring/three"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"
import * as THREE from "three"
import fragmentShader from "../shaders/fragment.glsl"
import vertexShader from "../shaders/vertex.glsl"

export const CropImageShaderMaterial = shaderMaterial(
  {
    u_image: new THREE.Texture(),
    u_inset: new THREE.Vector4(0, 0, 0, 0),
  },
  vertexShader,
  fragmentShader
)

extend({ CropImageShaderMaterial })

type CropImageShaderMaterialProps = {
  uniforms?: {
    u_image?: {
      value: THREE.Texture
    }
    u_inset?: {
      value: THREE.Vector4
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      cropImageShaderMaterial: CropImageShaderMaterialProps
    }
  }
}

export const AnimatedCropImageShaderMaterial = animated(
  (props: CropImageShaderMaterialProps) => (
    <cropImageShaderMaterial {...props} />
  )
)
