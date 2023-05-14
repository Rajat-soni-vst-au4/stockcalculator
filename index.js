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

//function to diaplay the data from API
function showStock(){
   try {
      axios.get(url)
      .then(array => {
         //loop on the data's length (array has all the data of API)
         for(let i=0; i<array.data.length; i++){
            let newElem = document.createElement("li");
            newElem.textContent = array.data[i].name +"   -   "+ array.data[i].desc + "   -   "+ array.data[i].price + "   -   "+ array.data[i].quant;
            
            //buttons added
            let button1 = document.createElement("input");
            button1.type = "button";
            button1.value = "Buy-1";
            button1.addEventListener("click", async function () {
              // update quant by subtracting 1
              array.data[i].quant -= 1;
              try {
                // update the quant on the server
                await axios.put(`${url}/${array.data[i]._id}`, array.data[i]);
              } catch (error) {
                console.log(error);
              }
              showStock();
            });
    
            let button2 = document.createElement("input");
            button2.type = "button";
            button2.value = "Buy-2";
            button2.addEventListener("click", async function () {
              // update quant by subtracting 2
              array.data[i].quant -= 2;
              try {
                // update the quant on the server
                await axios.put(`${url}/${array.data[i]._id}`, array.data[i]);
              } catch (error) {
                console.log(error);
              }
              showStock();
            });
    
            let button3 = document.createElement("input");
            button3.type = "button";
            button3.value = "Buy-3";
            button3.addEventListener("click", async function () {
              // update quant by subtracting 3
              array.data[i].quant -= 3;
              try {
                // update the quant on the server
                await axios.put(`${url}/${array.data[i]._id}`, array.data[i]);
              } catch (error) {
                console.log(error);
              }
              showStock();
            });
    
            newElem.append(button1, button2, button3);
            content.appendChild(newElem);
          }
        })
      
   } catch (error) {
            console.log(error)
   }

}
