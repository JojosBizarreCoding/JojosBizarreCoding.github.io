function userNameInput() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;
  var post = document.getElementById('post').value;
  var city = document.getElementById('city').value;
  var postPattern = /^\d{4}[A-Za-z]{2}$/;

  if (
      firstName === "" ||
      lastName === "" ||
      address === "" ||
      post === "" ||
      city === ""
  ) {
      alert("Please fill in your information correctly.");
  } else if (
    !post.match(postPattern)
  ) {
    alert("Not a valid postal code.")
  } else {
    alert("Dear " + firstName + " " + lastName + ", your order has been placed.")
  }
}

var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', userNameInput, false);
