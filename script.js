function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {

    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","records");
    element.innerHTML = "<span><q>" + recommendation.value + "</q></span>";
    // Add this element to the end of the list of recommendations
    document.getElementById("recomWr").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function unCheck(){
  let input = document.getElementById("check");
  input.click();
}
