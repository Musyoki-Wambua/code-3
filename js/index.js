document.addEventListener("DOMContentLoaded", () => {
  function fetchFilms() {
    fetch('https://api.npoint.io/90f6689628b43b79fe0d/films/0')
      .then(resp => resp.json())
      .then((data) => {
        data.forEach(movie => renderFilms(movie));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function renderFilms(movie) {
    const list = document.getElementById('movie-showing');
    const movieList = document.createElement('li');
    movieList.classList.add('list');
    movieList.style.cursor = 'pointer';
    movieList.innerText = movie.title;
    list.append(movieList);
    movieList.addEventListener('click', () => {
      movieSelected = movie;
      showMovie(movie);
    });
  }

  function showMovie(movie) {
    const movieTitle = document.getElementById('filmTitle');
    movieTitle.innerHTML = movie.title;
    const movieImg = document.getElementById('filmPoster');
    movieImg.src = movie.poster;
    const movieDescription = document.getElementById('movie-description');
    movieDescription.innerText = movie.description;
    const movieRuntime = document.getElementById('runtime');
    movieRuntime.innerHTML = `Runtime: ${movie.runtime} minutes`;
    const movieShowtime = document.getElementById('showtime');
    movieShowtime.innerHTML = `Showtime: ${movie.showtime}`;
    const movieCapacity = document.getElementById('capacity');
    movieCapacity.innerHTML = `Capacity: ${movie.capacity}`;
    const movieTicket = document.getElementById('ticket');
    movieTicket.innerHTML = `Tickets Sold: ${movie.tickets_sold}`;
    const btn = document.getElementById('ticketPurchase');
    const availableTickets = document.getElementById('ticketAvailable');
    availableTickets.innerHTML = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;

    btn.addEventListener('click', () => {
      ticketBuy(movie);
    });
  }

  function ticketBuy(movie) {
    const btn = document.getElementById('ticketPurchase');
    const availableTickets = document.getElementById('ticketAvailable');
    const movieTicket = document.getElementById('ticket');

    let remainingTickets = parseInt(movie.capacity - movie.tickets_sold);

    if (remainingTickets > 0) {
      movie.tickets_sold++;
      remainingTickets--;
      availableTickets.innerHTML = `Available Tickets: ${remainingTickets}`;
      movieTicket.innerHTML = `Tickets Sold: ${movie.tickets_sold}`;
    } else if (availableTickets <= 0) {
      alert('MOVIE TICKETS SOLD OUT');
      btn.textContent = 'SOLD OUT!';
    }
  }

  fetchFilms();
});
