// IMPORTS - LIBRARIES
import $ from "jquery";
import Backbone from "backbone";

// IMPORTS - TEMPLATES
import {BBCRadioModel} from "./_models.js";
import {BBCRadioCollection} from "./_models.js";
import {playlistTemplate} from "./templates/template-playlist.js";
import {introducingTemplate} from "./templates/template-playlist.js";

// GLOBAL VARIABLES - DOM ELEMENTS
var divWholePage = document.querySelector("#app-container");



// BACKBONE FUNCTIONS
const AppRouter = Backbone.Router.extend({
  initialize: function(){
    console.log("Routing active.".toUpperCase());
    Backbone.history.start();
  },
  routes: {
    "": "showHomePage",
    "radio/:num": "showRadio"
  },

  showHomePage: function(){
    console.log("Current View: home page");
    $.getJSON("/proxy?api=http://www.bbc.co.uk/radio1/playlist.json").then(function(serverRes){
      let introducedSong = serverRes.introducing;
      divWholePage.innerHTML = `<div class="header jumbotron">
                                  <h1>BBC Radio</h1>
                                  <h2>Introducing</h2>
                                </div>
                                ${introducingTemplate(introducedSong)}`;
    })
  },
  showRadio: function(givenRadio){
    console.log("Current View: radio one");
    let radioCollection = new BBCRadioCollection(givenRadio);
    radioCollection.fetch().then(function(serverRes){
      let radioModelsList = radioCollection.models;
      let viewInstance = new MultiBBCRadioView();
      viewInstance.render(radioModelsList,"givenRadio",)
  })
  //   $.getJSON("/proxy?api=http://www.bbc.co.uk/radio1/playlist.json").then(function(serverRes){
  //     let radioPlaylist = serverRes.playlist.a;
  //     divWholePage.innerHTML = `<div class="header jumbotron">
  //                                 <h1>Radio One</h1>
  //                                 <h2>Playlist</h2>
  //                               </div>
  //                               ${playlistTemplate(radioPlaylist)}`;
  //   })
  // }
}})

let BBCRadioApp = new AppRouter();
