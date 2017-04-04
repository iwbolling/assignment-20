export const BBCRadioModel = Backbone.Model.extend({
  initialize: function(givenRadio){
    this.url = `/proxy?api=http://www.bbc.co.uk/radio${givenRadio}/playlist.json`
  },
  parse: function(rawServerRes){
    if ( rawServerRes.playlist !== null  &&
        typeof rawServerRes.playlist.introducing !== "undefined"
     ){
      return rawServerRes.playlist.introducing[0];
    } else return rawServerRes;
  }
});

export const BBCRadioCollection = Backbone.Collection.extend({
  initialize: function(givenRadio){
    this.url = `/proxy?api=http://www.bbc.co.uk/radio${givenRadio}/playlist.json`
  },
  parse: function(rawServerRes){
    console.log("Collection parsing active.".toUpperCase());
    var parsedRes = [];
    var allPlaylistRes = rawServerRes.playlist;
    console.log(rawServerRes.playlist)
    for (var propertyStr in allPlaylistRes){
      if (propertyStr === "a" || propertyStr === "b" || propertyStr === "c"){
        parsedRes.push(...allPlaylistRes[propertyStr]);
      }
    }
    console.log(parsedRes);
    return parsedRes;
  },
  model: BBCRadioModel,
  url: ""
  // URL set in initialize function
})
