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
/*  alert("Welcome");
 var userType = prompt("Enter if you admin or user")
  if (  "admin" == userType) {
  
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
  *//* 
var evensum=0
var oddsum=0

var num=prompt("Enter Naumber to detrmain how match even and odd number")
 
for(var i=0 ;i < num;i++)
{
  if(i %2==0)
  { 
     evensum + 1
    document.write("<h4>"+""i+""+"</h4>")
  }/
  else
*/

alert("Welcome")
var catType = prompt("Enter the type of cat from the list below \n americancurl ,chartreux ,balinese ")

while (catType != 'americancurl' && catType != 'chartreux' && catType != 'balinese') {
  catType = prompt("please select from the list (americancurl ,chartreux ,balinese) and but what select in box")
}

var numberRe = prompt(' How ' + catType + 'do you want to see ?')


for (var i = 0; i <= numberRe; i++) {
  if(catType == "americancurl") {
    document.write('<img src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/american-curl-detail.jpg?bust=1535566890&width=355" alt="American Curl photo">')
  } else if(catType == "balinese") { document.write('<img src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/balinese-detail.jpg?bust=1535566910&width=355" alt="Balinese">')}
 else
 {
  document.write(' <img src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/chartreux-detail.jpg?bust=1535566975&width=355" alt="Chartreux">')
 }
}
