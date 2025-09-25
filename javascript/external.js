document.writeIn("<button onclick='condition()' >Conditional Test</button>");
function condition()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeIn("You chose Okay!");
  }
  else
  {
    document.writeIn("You chose Cancel!");
  }
}
//  a prompt box is ussed to prompt users to input a value before entering a page.
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
