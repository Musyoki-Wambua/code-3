
document.addEventListener('DOMContentLoaded',()=>{
  const url = "http://localhost:3000/films"



    const moviePlaceHolder = ()=>{
        fetch(url)
        .then(res =>res.json())
        .then(content =>{
            const firstMovie = content[0]

           filmImg.src = firstMovie.poster
            movieTitle.innerText = firstMovie.title
            movieDescr.textContent = firstMovie.decription
            runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
            showingTime.innerText =`Showtime: ${firstMovie.showtime}`
            availTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`


            const ticketBuy = document.getElementById("buyTicket")
            let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)

            ticketBuy.addEventListener('click',()=>{

                tickets--

                // const ticketRemaining = tickets-1

                if(tickets <= 0){
                    const frstMovie = document.getElementById("1")
                    frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger me-1">SOLD OUT</span>`

                    availTicket.innerHTML = `Ticketd available:  <span class="badge bg-danger">SOLD OUT</span>`
                }else{
                    availTicket.innerText = `Tickets available: (${tickets})`
                }
            })

        })




    }

