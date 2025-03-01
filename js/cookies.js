function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

function acceptCookies() {
  setCookie("cookieConsent", "accepted", 365); // Cookie valid for 1 year
  document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
  setCookie("cookieConsent", "declined", 365); // Cookie valid for 1 year
  document.getElementById("cookieConsent").style.display = "none";
}

window.onload = function () {
  var cookieConsent = getCookie("cookieConsent");
  if (cookieConsent !== "accepted") {
    document.getElementById("cookieConsent").style.display = "block";
  }
};

document
  .getElementById("acceptCookies")
  .addEventListener("click", acceptCookies);
// document
//  .getElementById("declineCookies")
//  .addEventListener("click", declineCookies);
