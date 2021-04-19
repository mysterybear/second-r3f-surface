import { useSpring } from "@react-spring/core"
import { useLoader } from "@react-three/fiber"
import { useState } from "react"
import * as THREE from "three"
import { AnimatedCropImageShaderMaterial } from "./CropImageShaderMaterial"

const CropImage = () => {
  const imageTexture = useLoader(
    THREE.TextureLoader,
    "https://images.unsplash.com/photo-1613910117442-b7ef140b37f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4NTAxMzg5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  )
  const [bar, setBar] = useState(0)
  const { foo } = useSpring({
    foo: bar,
  })
  return (
    <mesh onClick={() => void setBar((p) => Number(!p))}>
      <planeBufferGeometry args={[8, 6]} />
      <AnimatedCropImageShaderMaterial
        uniforms-u_image-value={imageTexture}
        uniforms-u_inset-value={foo
          .to((x) => 0 + x / 5)
          .to((x) => [x, x, x, x])}
      />
    </mesh>
  )
}

export default CropImage
