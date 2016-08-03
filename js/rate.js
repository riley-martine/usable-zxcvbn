var strength = {
        0: "Worst ☹",
        1: "Bad ☹",
        2: "Weak ☹",
        3: "Good ☺",
        4: "Strong ☻"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);

    // Update the password strength meter
    meter.value = result.score;

    // Update the text indicator
    if(val !== "") {
      var store = "Password Strength: " + "<strong>" + strength[result.score] + " </strong>"//"<span>"
      if (result.feedback.warning){
        store += "<div>" + result.feedback.warning + "</div>";}

      for (sug in result.feedback.suggestions){
        store += "<div>" + result.feedback.suggestions[sug] + "</div>";}

      // store += " </span>";
      text.innerHTML = store;
    }
    else {
        text.innerHTML = "";
    }
});

