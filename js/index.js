document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:3000/films";

  const fetchFirstFilm = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        renderFirstFilm(data);
      });
    fetchFirstFilm();
  };

  
  const renderFirstFilm = (movie) => {
    const poster = document.getElementById("filmPoster");
    poster.src = item.poster;

    movieImage.src = item.poster;
    movieTitle.innerText = item.title;
    movieDescription.textContent = item.description;
    runTime.innerHTML = `Runtime:<span>${item.runtime}</span>`;
    showTime.innerText = `Showtime: ${item.showtime}`;
    availableTickets.innerText = `Tickets Available ${item.capacity} -- ${item.tickets_sold}`;
  };



  const filmDetails = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let item = data[i];
          const movieList = document.createElement("li");
          const list = document.getElementById("movie-showing");
          movieList.classList.add("list");
          movieList.style.cursor = "pointer";
          movieList.innerText = item.title;
          list.append(movieList);

          movieList.addEventListener("click", () => {
            const movieImage = document.getElementById("filmPoster");
            const movieTitle = document.getElementById("filmTitle");
            const movieDescription =
              document.getElementById("movie-description");
            const runTime = document.getElementById("runtime");
            const showTime = document.getElementById("showtime");
            const availableTickets = document.getElementById("ticket");

            movieImage.src = item.poster;
            movieTitle.innerText = item.title;
            movieDescription.textContent = item.description;
            runTime.innerHTML = `Runtime:<span>${item.runtime}</span>`;
            showTime.innerText = `Showtime: ${item.showtime}`;
            availableTickets.innerText = `Tickets Available ${item.capacity} -- ${item.tickets_sold}`;

            const buyTicket= document.getElementById("ticketPurchase");
            let ticket = parseInt(item.capacity) - parseInt(item.tickets_sold);





            buyTicket.addEventListener("click", () => {
              if (ticket <= 0) {
                movieList.innerHTML = `${item.title} <span>SOLD OUT</span>`;
                availableTickets.innerHTML = `Tickets available: <span>SOLD OUT</span>`;
              } else {
                availableTickets.innerText = `Tickets available: (${ticket})`;
              }
              availableTickets.innerText = `Tickets available: ${ticket}`;
              while (ticket > -1) {
                availableTickets.innerText = `Tickets available: ${ticket}`;
                if (ticket === 0) {
                  return (availaTickets.innerText = "SOLD OUT");
                }
              }

              if (ticket === 0) {
                return (availableTickets.innerText = "SOLD OUT");
              }

              for (let i = ticket; i > -1; i -= 1) {
                const ticketRemain = i;
                availableTickets.innerText = `Tickets available: ${ticketRemain}`;
                if (ticketRemain === 0) {
                  availableTickets.innerText = "SOLD OUT";
                }
              }
            });
          });
        }
      });
  };

  filmDetails();
});
