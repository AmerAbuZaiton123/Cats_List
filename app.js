
alert("Welcome to my website ")

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
