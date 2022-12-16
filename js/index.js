document.addEventListener("DOMContentLoaded", () => {

  function fetchFilms(films) {
    fetch('http://localhost:3000/films')
    .then(resp => resp.json())
  //  .then(data =>  console.log(data) )
    .then ((data) =>  {
      data.forEach(renderFilms);

    })
  }fetchFilms()

   function renderFilms (movie) {
      const list = document.getElementById('movie-showing')
      const movieList = document.createElement('li')
      movieList.classList.add('list')
      movieList.style.cursor = 'pointer'
      movieList.innerText = movie.title;
      list.append(movieList)
      movieList.addEventListener('click', () => {
        movieSelected = movie;
        showMovie (movie)
   })
 }

 function showMovie(movie) {
  const movieTitle = document.getElementById('filmTitle')
  movieTitle.innerHTML = movie.title
  const movieImg = document.getElementById('filmPoster');
  movieImg.src = movie.poster
  const movieDescription = document.getElementById('movie-description')
  movieDescription.innerText = movie.description
  const movieRuntime = document.getElementById ('runtime')
  movieRuntime.innerHTML = `Runtime: ${movie.runtime} minutes `
  const movieShowtime = document.getElementById ('showtime')
  movieShowtime.innerHTML = `Showtime: ${movie.showtime}`
  const movieCapacity = document.getElementById ('capacity')
  movieCapacity.innerHTML = `Capacity: ${movie.capacity}`
  const movieTicket = document.getElementById ('ticket')
  movieTicket.innerHTML = `Tickets Sold: ${movie.tickets_sold}`
  const availableTickets = document.getElementById('ticketAvailable')
  const remainingTicktes = movie.capacity - movie.tickets_sold
  availableTickets.innerHTML = `Available Tickets: ${remainingTicktes}`
 
  const btn = document.getElementById ('ticketPurchase')
  btn.addEventListener ('click', (event) => {
  event.preventDefault()
  //console.log('click')
  })
  console.log (availableTickets)

} 
//BUY A MOVIE TICKET
 
 function ticketBuy (movie) {
  const btn = document.getElementById ('ticketPurchase')

   if (availableTickets > 0){
     availableTickets --;
     movieTicket = movie.tickets_sold + 1;
     console.log (availableTickets)
   }else {
     alert('MOVIE TICKETS SOLD OUT')
     btn.textContent = "SOLD OUT!"
   }
 } ticketBuy()



});