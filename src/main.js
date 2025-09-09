import * as THREE from "three"
import { GLTFLoader, OrbitControls } from "three/addons"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const glbLoader = new GLTFLoader()

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Load starter meshes
const testMat = new THREE.MeshBasicMaterial({color: "white"})
var logoModel = new THREE.Group()

glbLoader.load(
    "fp_logo.glb",
    (gltf) => {
        logoModel.add(gltf.scene)
        logoModel.traverse((obj) => {
            if (obj instanceof THREE.Mesh) {
                obj.scale.set(20, 20, 10)
                console.log(obj)
                obj.material = testMat
            }
        })
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + "% loaded")
    },
    (error) => {
        console.log(error)
    }
)

// Geometry
scene.add(logoModel)
logoModel.rotateX(Math.PI/2)

const controls = new OrbitControls(camera, renderer.domElement)
camera.position.z = 1.5
controls.update()
//

function animate() {
    renderer.render(scene, camera)
    logoModel.position.x = -0.25
    logoModel.rotateZ(Math.PI/90)
    controls.update()
}
renderer.setAnimationLoop(animate)