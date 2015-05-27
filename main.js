function display(val)
{
	document.getElementById("screen").value=val;
}
function append(val)
{
	document.getElementById("screen").value+=val;
}
function compute() 
{ 
	try 
	{ 
	  display(eval(document.getElementById("screen").value)); 
	} 
	catch(e) 
	{
	  display('Error');
	} 
}
function display_tab(x)
{
	for(var i=1;i<=4;++i)
	{
		document.getElementById('tab'+i).style.display="none";
	}
		document.getElementById('tab'+x).style.display="block";
}
