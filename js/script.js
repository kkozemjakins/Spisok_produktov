console.log("rabotaet");

let listas_js = []

window.addEventListener('load', () => {
    listas_js = JSON.parse(localStorage.getItem("listas_js") || "[]");
    console.log(listas_js)
    render();
});

const list = document.querySelector('#div_ul')

list.addEventListener('click', (e) => {
    let delete_check = confirm("Are you sure you want to delete this?")


    if (delete_check == true) {
        if(e.target.className == 'btn_delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        listas_js.splice(li, 1);
        localStorage.setItem('listas_js',JSON.stringify(listas_js));
        }
    }
  });

function render() {
    let stroka_v_ul = document.getElementById('div_ul');
    stroka_v_ul.innerHTML = "";

    for(let i = 0; i < listas_js.length; i++) {
        let list = `
        <li class="stroka_v_ul">
            <p>Product:${listas_js[i].product}</p>
            <p id="nd_stroka_v_ul">Amount:${listas_js[i].amount}</p>
            <button class="btn_delete">X</button>
        </li>`;

        stroka_v_ul.innerHTML += list;
    };

    product.value = "";
    amount.value = "";
};

document.getElementById("submit").addEventListener('click', newList);


function newList(){

    if (product.value === '') {
        alert('You must write name of product')
    };

    if (amount.value === '') {
        alert('You must write amount of product')
    };

    if (amount.value && product.value  != '') {
        
    
        let list = {product: product.value, amount: amount.value};

        console.log(list);

        listas_js.push(list);

        render()
    };

    localStorage.setItem("listas_js", JSON.stringify(listas_js))
};