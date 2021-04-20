console.log("rabotaet");

let listas = []

document.getElementById("submit").addEventListener('click', newList);


function newList(){

    if (product.value === '') {
        alert('You must write name of product')
    };

    if (amount.value === '') {
        alert('You must write amount of product')
    };


    let list = {product: product.value, amount: amount.value};

    console.log(list);

    product.value = "";
    amount.value = "";

    listas.push(list);

    render()
};

function render() {
    let  = document.getElementById('myLIST');
    stroka_v_ul.innerHTML = "";

    for(let i = 0; i < list.length; i++) {
        let li = `
        <li id="stroka_v_ul">Product:${stroka_v_list[i].product}    Amount:${stroka_v_list[i].amount} </li>`;

        list.innerHTML += stroka_v_list;
    }


    localStorage.setItem("list",JSON.stringify(stroka_v_list))
};