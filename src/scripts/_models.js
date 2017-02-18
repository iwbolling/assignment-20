const BBCRadioModel = Backbone.Model.extend({});

const BBCRadioCollection = Backbone.Collection.extend({
  initialize: function(givenRadio){
    this.url = `http://www.bbc.co.uk/radio${givenRadio}/playlist.json`
  },
  parse: function(rawServerRes){
    console.log("Parsing active.".toUpperCase());
  },
  model: BBCRadioModel,
  url: ""
  // URL set in initialize function
})
