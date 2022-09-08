// var $body = $('.body-for-seats');

// $body.on('click','.btn-utility',function(){
//   $('.aircraft-details').toggleClass('open');
// })

// const body = document.querySelector('..body-for-seats');


// body.addEventListener('click', function(){

//     document.querySelector('..aircraft-details').toggleClass('open');


// });


const seatsBtnd = document.getElementById('selectSeatsd');
const seatsFormd = document.querySelector('.body-for-seats-d');


seatsBtnd.addEventListener('click', function(){
    
    seatsFormd.classList.toggle("hiddenDplay");

});



const seatsBtnr = document.getElementById('selectSeatsr');
const seatsFormr = document.querySelector('.body-for-seats-r');


seatsBtnr.addEventListener('click', function(){
    
    seatsFormr.classList.toggle("hiddenDplay");

});