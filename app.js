/* alert("Welcome to my website ")

var typeCat =prompt("Enter your cat's type from American ,Balinese,Chartreux ")
if(typeCat == "American"){alert("There is some information about this type of cat")}
else if(typeCat == "Balinese"){alert("There is some information about this type of cat")}
else if(typeCat =="Chartreux" ){alert("There is some information about this type of cat")}
else    
{alert("There is no information about this type of cat!!!")}
var catWeigth =prompt("Enter your cat's weight")
if(catWeigth >299 && catWeigth <501)
{alert("perfect weight")}
else{alert("Your cat needs more care  perfect weight between 300 to 500")}
var catName=prompt("Enter your cat name")
document.write("<h3>"+ catName+ "</h3>")
 */
 alert("Welcome");
var userType = prompt("Enter if you admin or user")
  if (userType == "admin") {

  var adminName = prompt("Enter Your UserName")
  if (adminName == "ahmad" || adminName || == "Amer" adminName || == "osama")
  {
    var pass = prompt("Enter your password")
    if (adminName == "ahmad" && pass == "12345") {
      document.write("<h2>" + "Welcome " + adminName + "</h2>")
    }
    else if (adminName == "amer" && pass == "678910") {
      document.write("<h2>" + "Welcome " + adminName + "</h2>")
    }

  }else if (adminName == "osama" && pass == "54321") {
    document.write("<h2>" + "Welcome " + adminName + "</h2>")
  } else { alert("password invalid") }

} else { alert("User name Invalid") }

}

else { alert("welcom ") 
  */