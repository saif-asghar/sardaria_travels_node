const checked = document.querySelectorAll(".btn");
const returnDate = document.getElementById("returningDate");
const roundTrip = document.getElementById("roundTrip");
const oneWay = document.getElementById("oneWay");
// const multiCity = document.getElementById("multiCity");
// const multiCityBox = document.querySelector(".booking-form2");
const otherBoxes = document.querySelector(".booking-form");
const boxesSizes = document.getElementById("boxesSizes");
const addFlight = document.getElementById("addFlight");
const addedFlights = document.getElementById("addedFlights");
const hotelBookingForm = document.querySelector(".booking-form3");
const hotels = document.getElementById("skhot");
const radioBtn = document.querySelector(".radio-btn");
const flights = document.getElementById("airli");
const headingRightSide = document.getElementById("headingRightSide");
const noOfChildren = document.getElementById('noOfChildren');
const addChildAgeDiv = document.getElementById('addChildDiv');
const showBtnFlights = document.getElementById('showBtnFlights');





let sequenceNumber = 1;

function addAgeDivs() {
  const numberOfChildren = Number(noOfChildren.value);

  if(numberOfChildren === 1){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" min="1" name="childAge1" class="form-control">
    `;
  }else if(numberOfChildren === 0){
    addChildAgeDiv.innerHTML = '';
  }else if(numberOfChildren === 2){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" repuired value="1" min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" repuired min="1" name="childAge2" class="form-control">
    `;
  }else if(numberOfChildren === 3){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" min="1" repuired name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" min="1" repuired name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" min="1" repuired name="childAge3" class="form-control">
      `;
  }else if(numberOfChildren === 4){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" min="1" repuired name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
    `;
  }else if(numberOfChildren === 5){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" required min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
      <label>5: Child's Age</label>
      <input id="childAge5" type="number" value="1" required min="1" name="childAge5" class="form-control">
    `;
  }else if(numberOfChildren === 6){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" required min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
      <label>5: Child's Age</label>
      <input id="childAge5" type="number" value="1" required min="1" name="childAge5" class="form-control">
      <label>6: Child's Age</label>
      <input id="childAge6" type="number" value="1" required min="1" name="childAge6" class="form-control">
    `;
  }else if(numberOfChildren === 7){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" required min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
      <label>5: Child's Age</label>
      <input id="childAge5" type="number" value="1" required min="1" name="childAge5" class="form-control">
      <label>6: Child's Age</label>
      <input id="childAge6" type="number" value="1" required min="1" name="childAge6" class="form-control">
      <label>7: Child's Age</label>
      <input id="childAge7" type="number" value="1" required min="1" name="childAge7" class="form-control">
    `;
  }else if(numberOfChildren === 8){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" required min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
      <label>5: Child's Age</label>
      <input id="childAge5" type="number" value="1" required min="1" name="childAge5" class="form-control">
      <label>6: Child's Age</label>
      <input id="childAge6" type="number" value="1" required min="1" name="childAge6" class="form-control">
      <label>7: Child's Age</label>
      <input id="childAge7" type="number" value="1" required min="1" name="childAge7" class="form-control">
      <label>8: Child's Age</label>
      <input id="childAge8" type="number" value="1" required min="1" name="childAge8" class="form-control">
    `;
  }else if(numberOfChildren === 9){
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" required min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
      <label>5: Child's Age</label>
      <input id="childAge5" type="number" value="1" required min="1" name="childAge5" class="form-control">
      <label>6: Child's Age</label>
      <input id="childAge6" type="number" value="1" required min="1" name="childAge6" class="form-control">
      <label>7: Child's Age</label>
      <input id="childAge7" type="number" value="1" required min="1" name="childAge7" class="form-control">
      <label>8: Child's Age</label>
      <input id="childAge8" type="number" value="1" required min="1" name="childAge8" class="form-control">
      <label>9: Child's Age</label>
      <input id="childAge9" type="number" value="1" required min="1" name="childAge9" class="form-control">
    `;
  }else{
    addChildAgeDiv.innerHTML = `
      <label>1: Child's Age</label>
      <input id="childAge1" type="number" value="1" required min="1" name="childAge1" class="form-control">
      <label>2: Child's Age</label>
      <input id="childAge2" type="number" value="1" required min="1" name="childAge2" class="form-control">
      <label>3: Child's Age</label>
      <input id="childAge3" type="number" value="1" required min="1" name="childAge3" class="form-control">
      <label>4: Child's Age</label>
      <input id="childAge4" type="number" value="1" required min="1" name="childAge4" class="form-control">
      <label>5: Child's Age</label>
      <input id="childAge5" type="number" value="1" required min="1" name="childAge5" class="form-control">
      <label>6: Child's Age</label>
      <input id="childAge6" type="number" value="1" required min="1" name="childAge6" class="form-control">
      <label>7: Child's Age</label>
      <input id="childAge7" type="number" value="1" required min="1" name="childAge7" class="form-control">
      <label>8: Child's Age</label>
      <input id="childAge8" type="number" value="1" required min="1" name="childAge8" class="form-control">
      <label>9: Child's Age</label>
      <input id="childAge9" type="number" value="1" required min="1" name="childAge9" class="form-control">
      <h6 style="color: red; margin-top: 10px">Max Limit Reached</h6>
      `;
  };
};



// flights.addEventListener("click", changeBoxesForFlights);

// function changeBoxesForFlights() {
//   // boxesSizes.removeAttribute("style");
//   multiCityBox.setAttribute("style", "display: none;");
//   otherBoxes.setAttribute("style", "display: block;");
//   hotelBookingForm.setAttribute("style", "display: none;");
//   radioBtn.removeAttribute("style");
//   flights.setAttribute("style", "background-color: #12214a;");
//   returnDate.removeAttribute("disabled");
//   returnDate.style.border = "1px solid #fff";
//   hotels.setAttribute(
//     "style",
//     "background-color: #52557e; transform: translate(0, 21%); height: 30px;"
//   );
//   headingRightSide.innerHTML = "Cheap flights everywhere, from anywhere";
// }

roundTrip.addEventListener("click", changeBoxesForRoundtrip);

function changeBoxesForRoundtrip() {
  // boxesSizes.removeAttribute("style");
  multiCityBox.setAttribute("style", "display: none;");
  otherBoxes.setAttribute("style", "display: block;");
  hotelBookingForm.setAttribute("style", "display: none;");
  radioBtn.removeAttribute("style");
  
  returnDate.removeAttribute("disabled");
  returnDate.style.border = "1px solid #fff";
}

oneWay.addEventListener("click", changeBoxesForOneway);

function changeBoxesForOneway() {
  // boxesSizes.removeAttribute("style");
  multiCityBox.setAttribute("style", "display: none;");
  otherBoxes.setAttribute("style", "display: block;");
  hotelBookingForm.setAttribute("style", "display: none;");
  radioBtn.removeAttribute("style");
  returnDate.setAttribute("disabled", true);
  returnDate.style.border = "1px solid gray";
}

// multiCity.addEventListener("click", changeBoxesForMulticity);

// function changeBoxesForMulticity() {
//   multiCityBox.setAttribute("style", "display: block;");
//   otherBoxes.setAttribute("style", "display: none;");
//   // boxesSizes.setAttribute("style", "width: 50%;");
//   hotelBookingForm.setAttribute("style", "display: none;");
//   radioBtn.removeAttribute("style");
// }

// hotels.addEventListener("click", changeBoxesForHotels);

// function changeBoxesForHotels() {
//   multiCityBox.setAttribute("style", "display: none;");
//   otherBoxes.setAttribute("style", "display: none;");
//   hotelBookingForm.removeAttribute("style");
//   radioBtn.setAttribute("style", "display: none;");
//   // boxesSizes.removeAttribute("style");
//   hotels.setAttribute("style", "background-color: #12214a");
//   flights.setAttribute(
//     "style",
//     "background-color: #52557e; transform: translate(0, 21%); height: 30px;"
//   );
//   headingRightSide.textContent = "Find your place to stay";
// }


// function addRemFlightsForm() {
  
//   let addedFlights = document.getElementById('addedFlights');
  
//   let div = document.createElement('div');
//   div.innerHTML = `
//     <div class='for-removing'>
//     <div class="input-grp2">
//         <label>Flying From</label>
//         <input type="text" placeholder="City or Airport" class="form-control">
//     </div>
//     <div class="input-grp2">
//         <label>Flying To</label>
//         <input type="text" placeholder="City or Airport" class="form-control">
//     </div>
//     <div class="input-grp2">
//         <label>Departing</label>
//         <input type="date" class="todaysDate2 select-date form-control">
//         </div>
//     <a style="text-decoration: none; color: #fff; font-size: 20px;" class="remove" href="javascript:void(0)">x</a>
//     </div>
//   `;
  
//   addedFlights.appendChild(div);

  
//   let removeDivs = document.querySelector('ul');
//   removeDivs.addEventListener('click', function(e){
//     let addedFlights = document.getElementById('addedFlights');
//     let div = document.querySelector('a');
//     div = (e.target.parentNode).parentNode;
//     console.log(div);
//     addedFlights.removeChild(div);

//   });
      
//   };





  
  















var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
document.getElementById('todaysDate').setAttribute('min', today);
document.getElementById('todaysDate2').setAttribute('min', today);
document.getElementById('returningDate').setAttribute('min', today);
document.querySelectorAll('.todaysDate2').setAttribute('min', today);





