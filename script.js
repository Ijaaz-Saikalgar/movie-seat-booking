/*
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
  updateSelectedCount();
*/



const movieSelected = document.getElementById("movie");
const seats = document.querySelectorAll(".container .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const container = document.querySelector('.container');

let movieValue = Number(movieSelected.value);

fetchLocalStorage();

// fetch Local Storage
function fetchLocalStorage() {
  const fetchSeatIndex = JSON.parse(localStorage.getItem('seatIndex'));
  
  // render seat index 
  if (fetchSeatIndex !== null && fetchSeatIndex.length > 0) {
    fetchSeatIndex.forEach(e => {
      [...seats][e].classList.add('selected');
    })
  }

  // render select index 
  if ((localStorage.getItem('movieValue') && localStorage.getItem('movieIndex')) !== null) {
    movieValue = localStorage.getItem('movieValue');
    movieSelected.selectedIndex = localStorage.getItem('movieIndex');
  }

  updateCountTotal()
}


// update count && total
function updateCountTotal() {
  const seatSelected = document.querySelectorAll('.container .selected');
  const seatSelectedLength = seatSelected.length;

  count.innerText = seatSelectedLength;
  total.innerText = seatSelectedLength * movieValue;

  const seatIndex = [...seatSelected].map(item => {
    return [...seats].indexOf(item);
  })

  localStorage.setItem("seatIndex", JSON.stringify(seatIndex));
}



// movie select event 
movieSelected.addEventListener('change', e => {
  movieValue = +e.target.value;

  localStorage.setItem('movieValue', movieValue);
  localStorage.setItem('movieIndex', e.target.selectedIndex);

  updateCountTotal();
})



// seat select event 
container.addEventListener('click', e => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateCountTotal();
  }
})

