
document.getElementById("actualitzar").addEventListener("click",function(){
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("bitcoin").innerHTML= data.bpi.EUR.rate+" €"
  });
})


document.getElementById("novaBroma").addEventListener("click",function(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML= data.value
  });
})


document.getElementById("nouUsuariRandom").addEventListener("click",function(){
    fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("nombre").innerHTML = data.results[0].name.first;
    document.getElementById("apellidos").innerHTML = data.results[0].name.last;
    document.getElementById("pais").innerHTML = data.results[0].location.country;
    document.getElementById("imagen").src = data.results[0].picture.thumbnail;

  });

})
