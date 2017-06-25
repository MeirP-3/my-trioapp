<template>
    <section>
        <gmap-map :center="center" :zoom="zoom" :style="style">
            <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
            </gmap-marker>
            <gmap-info-window class="info-window" :opened="markerWindow.isOpen" :position="center" :content="markerWindow.content"></gmap-info-window>
        </gmap-map>
    </section>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import mapService from '../../services/map.service.js'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBrEj_A0rHs_0kg8CNpI_zAfDk27YWCEbs',
        libraries: 'places'
    }
});

export default {
    created() {
        mapService.getMarkers().then((markers) => this.markers = markers)
    },
    data() {
        return {
            style: {
                height: '97vh'
            },
            center: { lat: 31.974220, lng: 34.765159 },
            zoom: 10,
            markers: [],
            markerWindow: {
                index: '',
                title: '',
                position: this.center,
                currAddress: '',
                content: 'sdfsdf',
                // options: {
                //     maxWidth: 250,
                //     pixelOffset: {
                //         width: 0,
                //         height: -35
                //     }
                // },
                isOpen: true
            }
        }
    },
    methods: {
        showWindow() {
            this.markerWindow.isOpen = true
            this.markerWindow.content = 'blabla'
            // mapService.getContent(this.index)
        }
    }
}
</script>
<style>
.map-container {
    width: 100%;
    height: 100%;
}
</style>