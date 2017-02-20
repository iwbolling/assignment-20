// IMPORTS - LIBRARIES
import $ from "jquery";
import Backbone from "backbone";

// IMPORTS - TEMPLATES
import {BBCRadioModel} from "./_models.js";
import {BBCRadioCollection} from "./_models.js";
import {MultiBBCRadioView} from "./_views.js";
import {IntroducingView} from "./_views.js";
// import {BBCintroducingTemplate} from "./templates/template-playlist.js";

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
    let radioModel = new BBCRadioModel(1);
    radioModel.fetch().then(function(){;
      let viewInstance = new IntroducingView();
      viewInstance.render(radioModel)
    })
  },
  showRadio: function(givenRadio){
    console.log(`Current View: radio ${givenRadio}`);
    let radioCollection = new BBCRadioCollection(givenRadio);
    radioCollection.fetch().then(function(serverRes){
      let radioModelsList = radioCollection.models;
      let viewInstance = new MultiBBCRadioView();
      viewInstance.render(radioModelsList,givenRadio)
  })
}})

let BBCRadioApp = new AppRouter();
