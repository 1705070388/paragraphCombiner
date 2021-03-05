function getPara1()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
			inputs.push(document.getElementById("inputBox_" + i).value);
		}
	document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
	}

	function getPara2()
	{
		var inputs = [];
		for(var i = 6 ; i <=12 ; i++)
		{
			inputs.push(document.getElementById("inputBox_" + i).value);
		}
	document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
	}

