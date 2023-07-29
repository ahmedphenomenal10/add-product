
let product_name = document.getElementById("product_name"),
product_price = document.getElementById("product_price"),
product_category = document.getElementById("product_category"),
product_description = document.getElementById("product_description");
let arr =[];
if(localStorage.product != null){
    arr = JSON.parse(localStorage.product)
}
else{
    arr =[];
}







let button = document.querySelector(".btn1")

//to print in table
button.onclick = function(){
    let product = {
        name:product_name.value,
        price:product_price.value,
        category:product_category.value,
        description:product_description.value,
    }
    arr.push(product)
    localStorage.setItem("product",JSON.stringify(arr))
    console.log(arr)
    clear();
    display();
}
function display(){
    let html = '';
    for(let i = 0;i<arr.length;i++){
        html += `<tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].description}</td>
        <td><button class="btn2"  onclick = "del(${i})">delete</button></td>
        <td><button class="btn3" onclick = "upd(${i})">update</button></td>
        </tr>`
    }
    document.getElementById("tab").innerHTML = html

}


function clear(){
    product_name.value = "";
    product_price.value = "";
    product_category.value = "";
    product_description.value = "";
}

display()

//function in case button delete
function del(product){
    arr.splice(product,1)
    localStorage.product = JSON.stringify(arr)
    display()
    console.log(5)
}
