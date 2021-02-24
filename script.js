var slider = document.getElementById("pLength");
var output = document.getElementById("displayLen");
output.innerHTML = slider.value;
var Password = "";
var pLength = 20;

slider.oninput = function()
{
	pLength = this.value
	output.innerHTML = pLength;
	Generate();
}

function Generate()
{
	Password = "";
	var lowercase = "abcdefghijklmnopqrstuvwxyz";
	var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "01234567890123456789";
	var special = "!@#$%^&*()~_=[]\;',./{}|:<>?-+";
	var allowed = lowercase;
	
	if(document.getElementById("uppercase").checked)
		allowed += uppercase;
	if(document.getElementById("numbers").checked)
		allowed += numbers;
	if(document.getElementById("special").checked)
		allowed += special;
	
	for(var i=0;i<pLength;i++)
	{
		var r = Math.floor(Math.random()*allowed.length);
		Password += allowed.charAt(r);
	}
	
	document.getElementById("displayPassword").innerText = Password;
}

function Copy()
{
	navigator.clipboard.writeText(Password);
	document.getElementById("copyButton").innerText = "Copied !";
	document.getElementById("copyButton").style.background = "#77eb34";
	
	setTimeout
	(
		function()
		{
			document.getElementById("copyButton").innerText = "Copy";
			document.getElementById("copyButton").style.background = "#f0f0f0";
		},1000
	);
}