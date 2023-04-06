import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useControls } from 'leva'
extend({ OrbitControls })

const { color } = useControls({
    color: '#0000FF',
})

export default function Experience()
{
    const { camera, gl } = useThree()

    return <>

        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color={ color } />
        </mesh>

        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color={ color } />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}