var slider = document.getElementById("pLength");
var output = document.getElementById("displayLen");
output.innerHTML = slider.value;
var Password = "";
var pLength = 20;
color = "#77eb34";

slider.oninput = function()
{
	pLength = this.value
	output.innerHTML = pLength;
	
	if(pLength>=20)
	{
		color = "#77eb34";
	}
	else if(pLength>=8)
	{
		color = "#ff6600";
	}
	else
	{
		color = "#b82905";
	}
	Generate();
}

var N = 4; //Number of boxed checked
var boxes = document.querySelectorAll(".checkbox");
for(var i=0;i<4;i++)
{
	boxes[i].addEventListener('change', function()
	{
		if(this.checked)
		{
			Generate();
			N++;
			if(N==2)
			{
				for(var i=0;i<4;i++)
					if(boxes[i].checked)
						boxes[i].disabled = false;
			}
		}
		else
		{
			Generate();
			N--;
			if(N==1)
			{
				for(var i=0;i<4;i++)
					if(boxes[i].checked)
						boxes[i].disabled = true;
			}
		}
	});
}

function Generate()
{
	document.getElementById("displayPassword").style.background = color;
	Password = "";
	var allowed = "";
	var lowercase = "abcdefghijklmnopqrstuvwxyz";
	var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "01234567890123456789";
	var special = "!@#$%^&*()~_=[]\;',./{}|:<>?-+";
	
	if(document.getElementById("lowercase").checked)
		allowed += lowercase;
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
