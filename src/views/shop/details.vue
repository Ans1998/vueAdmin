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
                        暂时没有完善
                        <div id="photosphere"></div>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import 'three'
    // import 'dot'
    // import 'uevent'
    import PhotoSphereViewerCompat from 'photo-sphere-viewer'
    export default {
        name: "index",
        data() {
            return{
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                new PhotoSphereViewerCompat({
                    container : 'photosphere',
                    panorama : 'https://gw.alicdn.com/tfs/TB1WSInRFXXXXXlXpXXXXXXXXXX-1200-600.jpg'
                })
            }
        }
    }
</script>

<style>
    @import "/node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";
    #photosphere {
        width: 100vw;
        height: 50vh;
    }
</style>
