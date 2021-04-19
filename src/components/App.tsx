import { Suspense } from "react"
import CropImage from "./CropImage"

const App = () => {
  return (
    <Suspense fallback={null}>
      <CropImage />
    </Suspense>
  )
}

export default App
