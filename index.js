let name = document.getElementById("Name");
let desc = document.getElementById("Description");
let price = document.getElementById("Price");
let quant = document.getElementById("Quantity");
let form = document.getElementById("form")
let content = document.getElementById("content")
var url = "https://crudcrud.com/api/9a48c43ec7864e2db3addb3d56e306d1/stock";


//function for posting value to API
form.addEventListener("submit", add)
function add(e){
   e.preventDefault();
 
   let Data = {
    "name": name.value,
    "desc": desc.value,
    "price": price.value,
    "quant": quant.value,
   } 

   try {
      console.log(3)
    axios.post(url, Data)
   } catch (error) {
    console.log(error)
   }

   showStock()
}

