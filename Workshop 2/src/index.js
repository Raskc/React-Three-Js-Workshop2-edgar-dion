import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { useControls } from 'leva'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const { color } = useControls({
    color: '#ff0000',
})

root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
    >
        <Experience />
    </Canvas>
)