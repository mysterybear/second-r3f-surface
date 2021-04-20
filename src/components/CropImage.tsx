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
  const [v, setV] = useState(0)
  const modV = () => void setV((p) => (p === 0 ? 0.2 : 0))

  const { inset } = useSpring({
    inset: [v, v, v, v],
  })

  return (
    <mesh onClick={modV}>
      <planeBufferGeometry args={[8, 6]} />
      <AnimatedCropImageShaderMaterial
        uniforms-u_image-value={imageTexture}
        uniforms-u_inset-value={inset}
      />
    </mesh>
  )
}

export default CropImage
