document.getElementById('checkAge').addEventListener('click', function () {
    const age = parseInt(document.getElementById('age').value, 10);
    const message = document.getElementById('message');
    
    if (isNaN(age)) {
      message.textContent = "Please enter a valid age.";
      message.style.color = "#ffcc00";
      return;
    }
  
    if (age >= 21 && age <= 60) {
      message.textContent = "You are allowed to attend the party!🍻🥳";
      message.style.color = "#00ff00";
    } else if (age < 21) {
      message.textContent = "Access denied 🚫, Not upto legal age for alcohol consumption💀 .";
      message.style.color = "#ff0000";
    } else if (age > 60) {
      message.textContent = "Access denied. You are too old to attend.";
      message.style.color = "#ff0000";
    }
  });
  
  document.getElementById('partyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const age = parseInt(document.getElementById('age').value, 10);
    const message = document.getElementById('message');
  
    if (isNaN(age)) {
      message.textContent = "Please enter a valid age.";
      message.style.color = "#ffcc00";
      return;
    }
  
    if (age >= 21 && age <= 60) {
      alert("Form submitted successfully!");
    } else {
      message.textContent = "Please ensure you meet the age requirements before submitting.";
      message.style.color = "#ff0000";
    }
  });
  