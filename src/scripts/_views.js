export const MultiBBCRadioView = Backbone.View.extend({
  el: "#app-container",
  // events: "",
  playlistTemplate: function(radioModelsList){
    let playlistThumbnails = radioModelsList.map(function(song){
      return `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="song-pane thumbnail">
                  <img src="${song.get("image")}">
                  <div class="caption">
                    <h2>${song.get("title")}</h2>
                    <h3>${song.get("artist")}</h3>
                  </div>
                </div>
              </div>`
    }).join("");
    return `<div class="container">
              <div class="row">
                ${playlistThumbnails}
              </div>
            </div>`
  },
  render: function(radioModelsList){
    this.el.innerHTML = this.playlistTemplate(radioModelsList)
  }
});

export const IntroducingView = Backbone.View.extend({
  el: "#app-container",
  events: "",
  introducingTemplate: function(radioModel){
    let introducedSong = radioModel;
    let songJumbotron = `<div class="container">
                          <div class="jumbotron">
                            <img src="${introducedSong.get("image")}">
                            <div class="caption">
                              <h1>${introducedSong.get("title")}</h1>
                              <h2>${introducedSong.get("artist")}</h2>
                            </div>
                          </div>
                        </div>`
    return songJumbotron;
  },
  render: function(radioModel){
    this.el.innerHTML = this.introducingTemplate(radioModel)
  }
});
