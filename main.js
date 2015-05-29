function display(val)									//displays the final answer
{
	document.getElementById("screen").value=val;
} 
function append(val)
{
	document.getElementById("screen").value+=val;
}
function process(str)									//processes the input string and replaces sin with Math.sin etc
{
	search=new Array('sin','cos','tan','log','ln','sqrt','!');
	repl=new Array('Math.sin','Math.cos','Math.tan','1/2.302585092994*Math.log','Math.log','Math.sqrt','fact');
	for(var i=0;i<search.length;++i)
	{
		str=str.split(search[i]).join(repl[i]);
	}
	console.log(str);
	return str;
} 
function fact(n)										//finds the factorial of a number
{
	var f=1;
	for(var i=1;i<=n;++i)
	{
		f*=i; 
	}
	return f;
}
function compute() 										//evaluates the processed string
{ 
	try
	{ 
	  display(eval(process(document.getElementById("screen").value))); 
	} 
	catch(e) 
	{
	  display('Error');
	} 
}
function display_tab(x)									//function which displays only the content of the clicked tab and hides others
{
	for(var i=1;i<=4;++i)
	{
		document.getElementById('tab'+i).style.display="none";
	}
		document.getElementById('tab'+x).style.display="block";
}
