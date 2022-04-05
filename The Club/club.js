let age = 17;
let vip;


function checkAccess() {
    age = document.getElementById("Age").value; 
    vip = document.getElementById("VIP").checked; 

	if (vip == true) {
		alert('Welcome in my best VIP customer :)');
	} else if (age >= 18) {
		alert('access granted');
	} else {
		alert('access denied');
	}
};
