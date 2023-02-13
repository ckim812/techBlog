let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  function logout() {
    console.log("You are now logged out.");
    location.href = "/api/users/logout";
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 60000);
    // 1000 milliseconds = 1 second
  }
};

inactivityTime();
