
var fRequiredCheck = function(){

	var sInput = this.value.trim();

	var oMessage = document.getElementById(this.id+"Message");
	if(sInput.length == 0){
		oMessage.innerHTML = "Please fill in";
		oMessage.className = "message-error"
		this.valid = false;
		
	}else{
		oMessage.innerHTML = "Thank you";
		oMessage.className = "message-success";
		this.valid = true;
	}
};

var fNameCheck = function(){

	var sInput = this.value.trim();

	var oRegExp = /[^a-zA-Z]/;
	var bResult = oRegExp.test(sInput);

	var oMessage = document.getElementById(this.id+"Message");
	if(sInput.length == 0){//empty input
		oMessage.innerHTML = "Please fill in";
		oMessage.className = "message-error"
		this.valid = false;
	}
	else if(bResult==true){//wrong format
		oMessage.innerHTML = "Letters only";
		oMessage.className = "message-error";
		this.valid = false;
	}
	else{//all good
		oMessage.innerHTML = "Thank you";
		oMessage.className = "message-success";
		this.valid = true;
	}

	// //make regex object
	// var oRegExp = /[^a-zA-Z]/;//looks for non-alphabetic

	// //use the regex to test
	// var bResult = oRegExp.test(sInput);

	// var oMessage = document.getElementById(this.id+"Message");
	// if(bResult == true){
	// 	oMessage.innerHTML = "Letters only";
	// 	oMessage.className = "message-error";
	// 	this.valid = false;
		
	// }else{
	// 	oMessage.innerHTML = "Thank you";
	// 	oMessage.className = "message-success";
	// 	this.valid = true;
	// }


};


var fEmailCheck = function(){

	var sInput = this.value.trim();

	//make regex object
	var oRegExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

	//use the regex to test
	var bResult = oRegExp.test(sInput);

	var oMessage = document.getElementById(this.id+"Message");
	if(bResult == false){
		oMessage.innerHTML = "Invalid email";
		oMessage.className = "message-error";
		this.valid = false;
		
	}else{
		oMessage.innerHTML = "Thank you";
		oMessage.className = "message-success";
		this.valid = true;
	}

};



window.onload = function(){

	var oFirstNameInput = document.querySelector("#firstName");
	oFirstNameInput.valid = true;
	oFirstNameInput.onblur = fNameCheck;


	var oLastNameInput = document.querySelector("#lastName");
	oLastNameInput.valid = true;
	oLastNameInput.onblur = fRequiredCheck;


	var oEmailInput = document.querySelector("#email");
	oEmailInput.valid = true;
	oEmailInput.onblur = fEmailCheck;

	var oPasswordInput = document.querySelector("#password");
	oPasswordInput.valid = true;
	oPasswordInput.onblur = fRequiredCheck;

	var oSignupForm = document.querySelector("#signupForm");
	oSignupForm.onsubmit = function(){

		//force all checks to happen
		oFirstNameInput.onblur();
		oLastNameInput.onblur();
		oEmailInput.onblur();
		oPasswordInput.onblur();

		var bFormValid = oFirstNameInput.valid && 
						 oLastNameInput.valid &&
						 oEmailInput.valid &&
						 oPasswordInput.valid;

		return bFormValid;
	};
};