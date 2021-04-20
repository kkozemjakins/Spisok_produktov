console.log("rabotaet");

document.getElementById("submit").addEventListener('click', Button);

function Button() {
    console.log("Nazal knopku");

    let list = {product: product.value, amount: amount.value};

    product.value = "";
    amount.value = "";

    console.log(list)
}