console.log("rabotaet");

document.getElementById("submit").addEventListener('click', newList);


function newList(){

    if (product.value == '') {
        alert('You must write name of product')
    };

    if (amount.value == '') {
        alert('You must write amount of product')
    };


    let list = {product: product.value, amount: amount.value};

    product.value = "";
    amount.value = "";

    console.log(list);


    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);

   
}