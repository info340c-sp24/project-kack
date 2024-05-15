import React from "react";
import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import image from './images/uw-fb.jpg';
import image2 from './images/frn-fb.webp';
import image3 from './images/ud-fb.webp';
import Footer from './Footer.js';


const MapComponent = () => {
  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZmdvbnphMiIsImEiOiJjbG9vdWFjcHIwMG5kMmpvMXN5aWkwZXc4In0.GWMxQgk8OVnVI8DwIGcw_w";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.31509338850782, 47.65922714668673],
      zoom: 13.5,
    });

    new mapboxgl.Marker()
      .setLngLat([-122.3176455646381, 47.6661020144631])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<div class=map-popup-container> \
            <img class="food-bank-image" src='${image3}' alt='University District Food Bank' /> \
            <h2>University District Food Bank</h2> \
            <p>5017 Roosevelt Way NE, Seattle, WA 98105</p> \
            <p class=map-request>Requests</p> \
            <hr /> \
            <p class=map-food-type>Tinned Fruits</p> \
          <p>Type:</p> \
          <ul> \
            <li>Apples</li> \
            <li>Oranges</li> \
            <li>Peaches</li> \
            <li>Bananas</li> \
            </ul> \
            <hr /> \
            <p class=map-food-type>Canned Proteins</p> \
            <p>Type:</p> \
            <ul> \
              <li>Salmon</li> \
              <li>Blackbeans</li> \
              <li>Tuna</li> \
              <li>Chickpeas</li> \
              </ul> \
              <hr /> \
            <p class=map-food-type>Canned Vegetables</p> \
            <p>Type:</p> \
            <ul> \
              <li>Spinach</li> \
              <li>Olive</li> \
              <li>Corn</li> \
              <li>Tomato</li> \
              </ul> \
            </div>`
          )
      )
      .addTo(map);

    new mapboxgl.Marker()
      .setLngLat([-122.31413627931678, 47.656910115665006])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<div class=map-popup-container> \
          <img class="food-bank-image" src='${image}' alt='UW Food Pantry Food Bank' /> \
          <h2>UW Food Pantry</h2> \
          <p>3900 E Stevens Way NE, Seattle, WA 98195</p> \
          <p class=map-request>Requests</p> \
          <hr /> \
          <p class=map-food-type>Tinned Fruits</p> \
          <p>Type:</p> \
          <ul> \
            <li>Apples</li> \
            <li>Oranges</li> \
            <li>Peaches</li> \
            <li>Bananas</li> \
            </ul> \
            <hr /> \
            <p class=map-food-type>Canned Proteins</p> \
            <p>Type:</p> \
            <ul> \
              <li>Salmon</li> \
              <li>Blackbeans</li> \
              <li>Tuna</li> \
              <li>Chickpeas</li> \
              </ul> \
              <hr /> \
            <p class=map-food-type>Canned Vegetables</p> \
            <p>Type:</p> \
            <ul> \
              <li>Spinach</li> \
              <li>Olive</li> \
              <li>Corn</li> \
              <li>Tomato</li> \
              </ul> \
            </div>`
        )
      )
      .addTo(map);

    new mapboxgl.Marker()
      .setLngLat([-122.3120508748807, 47.66491915480083])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<div class=map-popup-container> \
          <img class="food-bank-image" src='${image2}' alt='Food Resource Network' /> \
          <h2>Food Resource Network</h2> \
          <p>1413 NE 50th St, Seattle, WA 98105</p> \
          <p class=map-request>Requests</p> \
          <hr /> \
          <p class=map-food-type>Tinned Fruits</p> \
          <p>Type:</p> \
          <ul> \
            <li>Apples</li> \
            <li>Oranges</li> \
            <li>Peaches</li> \
            <li>Bananas</li> \
            </ul> \
            <hr /> \
            <p class=map-food-type>Canned Proteins</p> \
            <p>Type:</p> \
            <ul> \
              <li>Salmon</li> \
              <li>Blackbeans</li> \
              <li>Tuna</li> \
              <li>Chickpeas</li> \
              </ul> \
              <hr /> \
            <p class=map-food-type>Canned Vegetables</p> \
            <p>Type:</p> \
            <ul> \
              <li>Spinach</li> \
              <li>Olive</li> \
              <li>Corn</li> \
              <li>Tomato</li> \
              </ul> \
            </div>`
        )
      )
      .addTo(map);

      return () => map.remove();
  }
  , []);
  return (<div style={{width: '100%', height: '100vh'}}>
  <div id="map" style={{width: '100%', height: '95vh'}} />
  <Footer />
</div>)
  
};

export default MapComponent;



