"use strict";
// Given Booking Data:
let bookingData = [,,,,,,,,
	{
  	time: "08:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "09:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "10:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "11:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "12:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "13:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "14:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "15:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "16:00",
    reason: "",
    label: "",
    booked: false
  },{
  	time: "17:00",
    reason: "",
    label: "",
    booked: false
  }
];

// Task 2
function checkRoomBooked(time)
{
  /* 
  Name: checkRoomBooked
  Purpose: To check if the Room is booked at a given time
  Return: Returns true if room is booked and vice versa
  */
  return (bookingData[parseInt(time)].booked);
}

// Task 1
function bookRoom(time,reason,label)  
{
  /* 
  Name: bookRoom
  Purpose: To book the Room at a given time with respective reasons and labels
  Return: (No Return Value) updates Booking Data when a room is being booked
  */
  if (checkRoomBooked(time)) // check if room is booked
  {
    alert("Slot Booked, try Again"); // send an alert 
    return;
  }
  let i = parseInt(time);
  bookingData[i].reason = reason;
  bookingData[i].label = label;
  bookingData[i].booked = true;
  return;
}



// Task 3
function clearRoomBookings() // This function clears all slots
{
  /* 
  Name: clearRoomBookings
  Purpose: This function clears up all slots in Booking Data
  Return: (No return value) Resets all values in Booking Data
  */
  for (let i = 8;i<18;i++) // iter over all time slots
  {
  bookingData[i].reason = ""; // reset the values
  bookingData[i].booked = false;
  bookingData[i].label = "";
  }
  return;
}

// Task 5
function updateDisplay()
{
  /* 
  Name: updateDisplay
  Purpose: Updates the display on the HTML page with a list of the Rooms and their Availability
  Return: (No Return Value) Displays Availability of rooms on the Web Page
  */
  let outputref = document.getElementById("output"); // Create referenecs
  outputref.innerHTML = ""; 
  let output = ``; // create variables
  for (let i = 8;i<18;i++) // iter over all slots
  {
    if (bookingData[i].booked == true)
    {
      output += `<p>${bookingData[i].time} : Not Available (${bookingData[i].label})</p>`;
    }
    else
    {
      output += `<p>${bookingData[i].time} : Available</p>`;
    }    
  }

  outputref.innerHTML += output; // update inner html
}

// task 6
function doBooking()
{
  /* 
  Name: doBooking
  Purpose: Books the Room based on user inputs then updates the display
  Return: (No Return Value) Calls the bookRoom and updateDisplay functions
  */
  confirm("Are you sure you want to proceed"); // confrim with user that they want to make the booking

  let labelref = document.getElementById("inputLabel"); // create ref
  let label = labelref.value; // create variable
  let reasonref = document.getElementById("inputReason");
  let reason = reasonref.value;

  if ((label == "") ||(reason == "")) // Validation
  {
    alert("Invalid Reason and/or Label");
    return;
  }

  let timeref = document.getElementById("inputTime");
  let time = timeref.value;

  if (time == 0)
  {
    alert("Please Select Time");
    return;
  }

  bookRoom(time,reason,label); // Book Room
  updateDisplay(); // Update Display
}

// task 7
function clearAllBookings()
{
  /* 
  Name: clearAllBookings
  Purpose: As user clicks a button, clear all bookings then updates the page display
  Return: (No Return Value) Calls the clearRoomBookings and updateDisplay functions
  */
  clearRoomBookings(); // clear Room Bookings
  updateDisplay(); // update Display
}

function updateDayTime()
{
  /* 
  Name: updateDayTime
  Purpose: show the current time (time only, no date) on the HTML Web page
  Return: (No Return Value) Updates the current the time on the Web page
  */
  let liveTimeRef = document.getElementById("timeNow"); // create ref
  let today = new Date();
  let livetime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); // get live time

  liveTimeRef.innerText = livetime; // update in span

}