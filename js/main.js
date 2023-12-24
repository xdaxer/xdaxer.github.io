let rotationDegree = 0;



//Back


function back(){

    rotationDegree += 360;
    var container = document.querySelector('.container');
    container.style.transform = 'rotateY(' + rotationDegree + 'deg)';



    var discord = document.getElementById("discord");
    var spotify = document.getElementById("spotify");
    var telegram = document.getElementById("telegram");
    var twitter = document.getElementById("twitter");
    var pinterest = document.getElementById("pinterest");
   
    document.getElementById("back").classList.add("hide")
    discord.classList.remove("hide");
    spotify.classList.remove("hide");
    telegram.classList.remove("hide");
    twitter.classList.remove("hide");
    pinterest.classList.remove("hide");
    document.getElementById("dcserver").classList.add("hide")
    document.getElementById("dcdm").classList.add("hide")
    document.getElementById("spotifyaccount").classList.add("hide")
    document.getElementById("spotify-playlist-1").classList.add("hide")
    document.getElementById("telegram-channel-1").classList.add("hide")
    document.getElementById("telegramaccount").classList.add("hide")
    document.getElementById("pinterest-album-1").classList.add("hide")
    document.getElementById("pinterestaccount").classList.add("hide")

}



// Discord



function discord() {
  rotationDegree += 360;
  var container = document.querySelector('.container');
  container.style.transform = 'rotateY(' + rotationDegree + 'deg)';


  var discord = document.getElementById("discord");
  var spotify = document.getElementById("spotify");
  var telegram = document.getElementById("telegram");
  var twitter = document.getElementById("twitter");
  var pinterest = document.getElementById("pinterest");



discord.classList.add("hide");
spotify.classList.add("hide");
telegram.classList.add("hide");
twitter.classList.add("hide");
pinterest.classList.add("hide");

document.getElementById("back").classList.remove("hide")
document.getElementById("dcserver").classList.remove("hide")
document.getElementById("dcdm").classList.remove("hide")





document.getElementById("dcserver").addEventListener("click", function() {
  window.open("https://www.google.com", "_blank");
});


document.getElementById("dcdm").addEventListener("click", function() {
  window.open("https://www.google.com", "_blank");
});

};
// Spotify

  
    
  
function spotify() {
    rotationDegree += 360;
    var container = document.querySelector('.container');
    container.style.transform = 'rotateY(' + rotationDegree + 'deg)';
  
  
    var discord = document.getElementById("discord");
    var spotify = document.getElementById("spotify");
    var telegram = document.getElementById("telegram");
    var twitter = document.getElementById("twitter");
    var pinterest = document.getElementById("pinterest");
  
  
  
  discord.classList.add("hide");
  spotify.classList.add("hide");
  telegram.classList.add("hide");
  twitter.classList.add("hide");
  pinterest.classList.add("hide");
  
  document.getElementById("back").classList.remove("hide")
  document.getElementById("spotify-playlist-1").classList.remove("hide")
document.getElementById("spotifyaccount").classList.remove("hide")



document.getElementById("spotify-playlist-1").addEventListener("click", function() {
  window.open("https://www.google.com", "_blank");
});

document.getElementById("spotifyaccount").addEventListener("click", function() {
  window.open("https://www.google.com", "_blank");
});





  }
  


  // Telegram


  function telegram() {
    rotationDegree += 360;
    var container = document.querySelector('.container');
    container.style.transform = 'rotateY(' + rotationDegree + 'deg)';
  
  
    var discord = document.getElementById("discord");
    var spotify = document.getElementById("spotify");
    var telegram = document.getElementById("telegram");
    var twitter = document.getElementById("twitter");
    var pinterest = document.getElementById("pinterest");
  
  
  
  discord.classList.add("hide");
  spotify.classList.add("hide");
  telegram.classList.add("hide");
  twitter.classList.add("hide");
  pinterest.classList.add("hide");
  
  document.getElementById("back").classList.remove("hide")
  document.getElementById("telegram-channel-1").classList.remove("hide")
document.getElementById("telegramaccount").classList.remove("hide")
  

document.getElementById("telegram-channel-1").addEventListener("click", function() {
  window.open("https://www.google.com", "_blank");
});

document.getElementById("telegramaccount").addEventListener("click", function() {
  window.open("https://www.google.com", "_blank");
});






  }
  


  // Twitter

  function twitter() {
    //rotationDegree += 360;
    //var container = document.querySelector('.container');
    //container.style.transform = 'rotateY(' + rotationDegree + 'deg)';
  
  
    //var discord = document.getElementById("discord");
    //var spotify = document.getElementById("spotify");
    //var telegram = document.getElementById("telegram");
    //var twitter = document.getElementById("twitter");
    //var pinterest = document.getElementById("pinterest");
  
  
  
  //discord.classList.add("hide");
  //spotify.classList.add("hide");
  //telegram.classList.add("hide");
  //twitter.classList.add("hide");
  //pinterest.classList.add("hide");
  
  //document.getElementById("back").classList.remove("hide")
  

 // document.getElementById("twitter").addEventListener("click", function() {
   // window.location.href = "https://www.google.com";
  //});

  }
  


  // Pinterest

  function pinterest() {
    rotationDegree += 360;
    var container = document.querySelector('.container');
    container.style.transform = 'rotateY(' + rotationDegree + 'deg)';
  
  
    var discord = document.getElementById("discord");
    var spotify = document.getElementById("spotify");
    var telegram = document.getElementById("telegram");
    var twitter = document.getElementById("twitter");
    var pinterest = document.getElementById("pinterest");
  
  
  
  discord.classList.add("hide");
  spotify.classList.add("hide");
  telegram.classList.add("hide");
  twitter.classList.add("hide");
  pinterest.classList.add("hide");
  
  document.getElementById("back").classList.remove("hide")
  document.getElementById("pinterest-album-1").classList.remove("hide")
  document.getElementById("pinterestaccount").classList.remove("hide")
  





  document.getElementById("pinterest-album-1").addEventListener("click", function() {
    window.open("https://www.google.com", "_blank");
  });

  document.getElementById("pinterestaccount").addEventListener("click", function() {
    window.open("https://www.google.com", "_blank");
  });

  }
  
