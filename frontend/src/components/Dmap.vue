<template>
    <v-container>
        <h1 class="display-2 font-weight-bold mb-3">
          KaKaoMAP
        </h1>
  <div>
    <div class="button-group">
      <button @click="initMap()">Main</button>
      <button @click="displayMarker(markerPositions1)">Home</button>
      <button @click="displayMarker(markerPositions2)">Company</button>
      
    </div>
    
    <div id="map" style="margin: 0 auto;"></div>
  </div>
  </v-container>
</template>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      map: null,
      markerPositions1: [
        [37.3624, 127.1215],
      ],
      markerPositions2: [
        [37.5662, 126.9797],
        
      ],
      markers: [],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1386004878c058e106381519117a44bc";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.3624, 127.1215),
        level: 6,
      };
      this.map = new kakao.maps.Map(container, options);
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {

  width: 1000px;
  height: 500px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
