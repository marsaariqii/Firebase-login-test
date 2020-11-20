function initApp() {
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    	document.getElementById("welcome_div").style.display = "initial";
			document.getElementById("login_div").style.display = "none";

			var user = firebase.auth().currentUser;

			if(user != null){
				var email_id = user.email;

				document.getElementById("user_email").innerHTML = email_id;
			}

	  } else {
	    // No user is signed in.
	       	document.getElementById("welcome_div").style.display = "none";
			document.getElementById("login_div").style.display = "initial";
	  }
});
}

window.onload = function() {
  initApp();
};


function login(){
	var userEmail = document.getElementById('userEmail').value;
	var userPass = document.getElementById('userPassword').value;
	
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch((error) => {
	    var errorCode = error.code;
	    var errorMessage = error.message;

	    window.alert("Error : " + errorMessage + "\nError code : " +errorCode);
	  });
	window.alert('Login Success!, Click OK to Redirect');
  
}

function signup(){
	var userEmaill = document.getElementById('userEmail').value;
	var userPasss = document.getElementById('userPassword').value;

	firebase.auth().createUserWithEmailAndPassword(userEmaill, userPasss).catch((error) => {
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    // ..
	    window.alert("Error : " + errorMessage + "\nError code : " + errorCode);
	});
	if(userEmaill != ""){
		window.alert('Sign Up Success!');
	}
}

function logout(){
	firebase.auth().signOut();
	alert('Logout Success!, Click OK to Redirect');
}