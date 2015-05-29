function display(val)
{
	document.getElementById("screen").value=val;
}
function append(val)
{
	document.getElementById("screen").value+=val;
}
function process(str)
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
function fact(n)
{
	var f=1;
	for(var i=1;i<=n;++i)
	{
		f*=i;
	}
	return f;
}
function compute() 
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
function display_tab(x)
{
	for(var i=1;i<=4;++i)
	{
		document.getElementById('tab'+i).style.display="none";
	}
		document.getElementById('tab'+x).style.display="block";
}
