function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  var playing = false;
  //Start coding here
  function draw(results) {
    var template = '';
    for (let i = 0; i < results.length; i++) {
      var card = results[i];
      var custImg = card.albumArt.replace('100x100', '250x250')
      template += `<div class="card audioCard text-center" >
      <img class="card-img-top songImg" src="${custImg}" alt="Card image cap" onclick="app.controllers.itunesCtrl.playPause('${card.preview}')">
      <div class="card-body">
        <h5 class="card-title">Song Title: ${card.title}</h5>
        <p class="card-text">Artist: ${card.artist}</p>
        <p class="card-text">Collection: ${card.collection}</p>
        <p class="card-text">Price: ${card.price}</p>

      </div>
    </div>`
    }
    var songElem = document.getElementById('songs');
    songElem.innerHTML = template;
    console.log(results)
  }

  var song = new Audio();

  this.playPause = function playPause(src) {

    if (playing) {
      pauseSong(src)
      if (src !== song.src) {
        playSong(src)
      }

    } else {
      playSong(src)
    }



  }
  function playSong(src) {

    song.src = src,
      song.play();
    playing = true
  }
  function pauseSong(src) {

    song.pause();
    playing = false
  }

}
