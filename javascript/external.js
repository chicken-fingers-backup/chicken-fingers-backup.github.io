// document.writeIn("<button onclick='condition()' >Conditional Test</button>");
// function condition()
// {
//   x = confirm("Are you sure you want to proceed?");
//   if(x)
//   {
//     document.writeIn("You chose Okay!");
//   }
//   else
//   {
//     document.writeIn("You chose Cancel!");
//   }
// }
// //  a prompt box is ussed to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());
