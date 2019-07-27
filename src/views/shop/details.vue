<template>
    <div>
        <div class="PSViewer" id="photosphere"></div>
    </div>
</template>
<script>
    import * as THREE from 'three';
    import PhotoSphereViewerCompat from 'photo-sphere-viewer'
    export default {
        name: "index",
        data() {
            return{
            }
        },
        created() {
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
        width: 100%;
        height: 80vh;
    }
    .PSViewer {
        overflow: hidden;
        display: block;
        width: 100%;
        height: inherit;
        position: relative;
    }
    .fix{
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0 auto;
        width: 200px;
    }
    .psv-hud {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 35px;
        z-index: 10;
    }
    svg{
        display: block;
        width: 100%;
        height: 100%
    }
    .psv-container {
        display: block;
        width: 100%;
        height: inherit;
    }
    .psv-loader-container {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        margin-top: -25px;
    }
    .psv-canvas-container {
        display: block;
        width: 100%;
        height: inherit;
    }
    canvas{
        display: block;
        width: 100%;
        height: inherit;
    }
    .psv-navbar--open {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 60;
        padding: 8px 0;
        display: block;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .psv-caption{
        display: inline-block;
    }
    .psv-button {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        float: left;
    }
    .psv-zoom-button {
        float: left;
        width: auto;
    }
    .psv-zoom-button-minus{
        width: 20px;
        float: left;
        height: 20px;
        background-color: transparent;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
    }
    .psv-zoom-button-range {
        float: left;
        padding: 10px 8px 0 8px;
        background-color: transparent;
        cursor: pointer;
    }
    .psv-zoom-button-line{
        width: 50px;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.7);
        position: relative;

    }
    .psv-zoom-button-handle{
        position: absolute;
        top: -3px;
        left: -3.5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .psv-zoom-button-plus{
        width: 20px;
        float: left;
        height: 20px;
        background-color: transparent;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
    }
    .psv-autorotate-button{
        margin-right: 8px;
        margin-left: 8px;
    }
    .psv-fullscreen-button{
        float:right;
        margin-right: 8px;
    }
    .psv-caption{
        height: inherit;
    }
</style>
