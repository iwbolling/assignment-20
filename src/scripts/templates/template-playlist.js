export const playlistTemplate = function(givenPlaylist){
  let playlistThumbnails = givenPlaylist.map(function(song){
    return `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="song-pane thumbnail">
                <img src="${song.image}">
                <div class="caption">
                  <h2>${song.title}</h2>
                  <h3>${song.artist}</h3>
                </div>
              </div>
            </div>`
  }).join("");
  return `<div class="container">
            <div class="row">
              ${playlistThumbnails}
            </div>
          </div>`
}

export const introducingTemplate = function(givenPlaylist){
  let introducedSong = givenPlaylist.introducing;
  let songJumbotron = `<div class="container">
                        <div class="jumbotron">
                          <img src="${introducedSong.image}">
                          <div class="caption">
                            <h1>${introducedSong.title}</h1>
                            <h2>${introducedSong.artist}</h2>
                          </div>
                        </div>
                      </div>`
}
