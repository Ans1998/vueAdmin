<template>
    <div>
        <el-container>
            <el-container>
                <el-aside>
                    <leftNavigation></leftNavigation>
                </el-aside>
                <el-container>
                    <el-header style="text-align: right; font-size: 12px;">
                        <headNavigation></headNavigation>
                    </el-header>
                    <el-main>
                        <el-row>
                            <el-col :span="24">
                                <div class="grid-content bg-purple">
                                    <div id="container" ref="myEchart" :style="{height:'400px',width:'100%'}"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import * as Three from 'three'
    export default {
        name: "specimen",
        data() {
            return{
                camera: null,
                scene: null,
                renderer: null,
                mesh: null
            }
        },
        mounted() {
            this.init()
            this.animate()
        },
        methods: {
            init: function() {
                let container = document.getElementById('container')

                this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10)
                this.camera.position.z = 1

                this.scene = new Three.Scene()

                let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
                let material = new Three.MeshNormalMaterial()

                this.mesh = new Three.Mesh(geometry, material)
                this.scene.add(this.mesh)

                this.renderer = new Three.WebGLRenderer({antialias: true})
                this.renderer.setSize(container.clientWidth, container.clientHeight)
                container.appendChild(this.renderer.domElement)

            },
            animate: function() {
                requestAnimationFrame(this.animate)
                this.mesh.rotation.x += 0.01;
                this.mesh.rotation.y += 0.02;
                this.renderer.render(this.scene, this.camera)
            }
        }

    }
</script>

<style>

</style>
