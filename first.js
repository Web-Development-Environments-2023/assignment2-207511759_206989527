const players={}
// add default player
players['p'] = "testuser";
// add intro audio
var introAudio = new Audio()
currentPlayer = null

// about related
function showAbout(){
    $(".modal").css("display","block")
}


function closeAbout(){
    $(".modal").css("display","none")
}

window.onclick = function(event){
    console.log($("#MyModal"))
    if($(event.target).hasClass("modal")){
        closeAbout();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeAbout();
    }
  });


function showWelcome(){
    $(".WelcomePage").css("display","block")
    $("#login").css("display","none")
    $("#Register").css("display","none")
    $("#settings").css("display","none")
    $(".gameScreen").css("display","none")
    closeAbout();

}

function showRegister(){
    $(".WelcomePage").css("display","none")
    $("#login").css("display","none")
    $("#Register").css("display","block")
    $("#settings").css("display","none")
    $(".gameScreen").css("display","none")
    closeAbout();

}

function showLogin(){
    $(".WelcomePage").css("display","none")
    $("#login").css("display","block")
    $("#Register").css("display","none")
    $("#settings").css("display","none")
    $(".gameScreen").css("display","none")
    closeAbout()

}

function showSettings(){
    $(".WelcomePage").css("display","none")
    $("#login").css("display","none")
    $("#Register").css("display","none")
    $("#settings").css("display","block")
    $(".gameScreen").css("display","none")
    closeAbout()
    // introAudio.play()
    // introAudio.loop = true

}


function signup() {
    let username = $("#username").val();
    let password = $("#Password").val();
    let confirmPass = $("#confirmPass").val();
    let firstName = $("#Firstname").val();
    let lastName = $("#Lastname").val();
    let email = $("#email").val();
    let bdate = $("#bdate").val();
  
    if (!username || !password || !confirmPass || !firstName || !lastName || !email || !bdate) {
      alert("Please fill all fields");
      return;
    }
  
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
      alert("Password must contain at least 8 characters including letters and numbers only");
      return;
    }
  
    if (/\d/.test(firstName) || /\d/.test(lastName)) {
      alert("First and last name must not include numbers");
      return;
    }
  
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
  
    if (password !== confirmPass) {
      alert("Passwords do not match");
      return;
    }
  
    players[username] = password;
    alert("You have Signed Up Successfully");
    showWelcome();
  }
  


    function login(){
        let name= $('#LoginUsername').val();
        let pass= $("#Loginpass").val();

        if (name in players){
            if (players[name].localeCompare(pass)==0){
                currentPlayer = name;
                showSettings();
            }

            else{
                alert("Incorrect Password");
                return;
            }
        }
        else{
            alert("Player does not exist or incorrect player name");
            return;
        }
    }
    function defaultSettings(){
      document.getElementById("shoot").value="Spacebar"
      // document.getElementById("up").value="ArrowUp"
      // document.getElementById("down").value="ArrowDown"
      // document.getElementById("right").value="ArrowRight"
      // document.getElementById("left").value="ArrowLeft"
      document.getElementById("time").value=160
  }
  
  function setKey(id, event) {
      const keyName = event.key;
      var key = keyName;
      if (key === ' ') {
        key = 'Spacebar';
      }
      document.getElementById(id).value = key;
      document.getElementById(id).blur();
    }
  
    function showGame(){
      $(".WelcomePage").css("display","none")
      $("#login").css("display","none")
      $("#Register").css("display","none")
      $("#settings").css("display","none")
      $(".Game_Screen").css("display","block")
      $(".menu").css("display","none")
      $(".footer-container").css("display","none")
      let body = document.getElementById("body")
      body.style.backgroundImage = "none";

      closeAbout()
    }





    