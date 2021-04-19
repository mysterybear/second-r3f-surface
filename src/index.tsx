import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { Canvas, extend } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
extend({ OrbitControls })

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Canvas>
        <App />
        <OrbitControls />
      </Canvas>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
