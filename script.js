import mapboxgl from "mapbox-gl"

let token = "pk.eyJ1IjoieGtha2Fyb3QiLCJhIjoiY2t6c2UzcjBpMHF3cjJwbzk2MzJnc2w3dCJ9.RWwzRNo-cg9yk2LAnNHuzA"

mapboxgl.accessToken = token;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/xkakarot/ckzsg4gwd001814qm7eiy2x4m', // style URL
    center: [4.374805, 50.882082], // starting position [lng, lat]
    zoom: 10.3 // starting zoom
});


// const geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     marker: {
//         color: 'orange'
//     },
//     mapboxgl: mapboxgl
// });

// map.addControl(geocoder);

console.log("hi");

fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/50.8468572,4.3608409.json?access_token=pk.eyJ1IjoieGtha2Fyb3QiLCJhIjoiY2t6c2UzcjBpMHF3cjJwbzk2MzJnc2w3dCJ9.RWwzRNo-cg9yk2LAnNHuzA")
    .then(response => response.json())
    .then(data => console.log(data.query));