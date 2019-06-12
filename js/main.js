//initial and add the map
function initMap(){
  //your location
  const loc ={ lat: 18.483765, lng: 73.812941}
  //centered map on location
  const map =  new google.maps.Map(document.querySelector('.map'),
{
  zoom: 14,
  center: loc
});
// The marker position at locaton
const marker = new google.maps.Marker({ position: loc, map: map});
}

//sticky Menu
window.addEventListener('scroll', function()
{
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else{
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

//smoth scrolling

$('#navbar a, .btn').on('click', function(event)
{
  if(this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );  
  }
});