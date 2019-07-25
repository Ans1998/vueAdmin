<template>
    <div>
        暂时没有完善
        <div id="photosphere"></div>
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
