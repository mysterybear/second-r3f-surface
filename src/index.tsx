import { OrbitControls } from "@react-three/drei"
import { Canvas, extend } from "@react-three/fiber"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./index.css"
extend({ OrbitControls })

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Canvas
        camera={{
          position: [-1, 2, 3],
        }}
      >
        <App />
        <OrbitControls />
        <gridHelper />
      </Canvas>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
