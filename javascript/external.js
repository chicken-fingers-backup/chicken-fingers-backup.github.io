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
var webmaps =
[
  ["Oil Spill Toolkit", "https://www.glo.texas.gov"],
  ["The Oil Spill Toolkit developed by Enterprise Technology Solutions of The Texas General Land Office is a decision-support resource. This is where I would write my second sentence about the Oil Spill Toolkit. This is where I would write my third sentence about the Oil Spill Toolkit. This is where I would write my fourth sentence about the Oil Spill Toolkit."],
  ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/"],
  ["The Texas Parks and Wildlife's Landscape Ecology program developed this application to deliver the Ecological Mapping Systems of Texas (EMS) data to Texas citizens. This is where I would write my second sentence about the Texas Ecosystems Analytical Mapper. This is where I would write my third sentence about the Texas Ecosystems Analytical Mapper (TEAM)."]
];

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

function webmap_table() {
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++) {
    document.write("<tr>");
    if (row % 2 == 0) { // For even rows (0-based index)
      for (var column=0; column < webmaps[0].length; column++) {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
    } else { // For odd rows
      document.write("<td colspan='2'>" + webmaps[row][0] + "</td>");
    }
    document.write("</tr>");
    if (row % 2 == 1) { // Only after the description rows
      document.write("<tr><td colspan='2'>&nbsp;</td></tr>");
    }
 }
  document.write("</table>");
  return "";
}
