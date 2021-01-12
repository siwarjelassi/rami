// console.log("testing");
let plus = document.querySelectorAll(".plus");
let imagesf = document.querySelectorAll(".image3");
let qte = document.querySelectorAll(".qte");
let moin = document.querySelectorAll(".moin");
let pri = document.getElementById("prix");
let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
let image = Array.from(document.querySelectorAll(".image"));
let btnprice = document.getElementById("bprice");
let del = Array.from(document.querySelectorAll(".btn-dark"));
let sup = Array.from(document.querySelectorAll(".col-lg-4"));
let coulmn1 = document.querySelector(".sec1");
let favs = Array.from(document.querySelectorAll(".fa-grin-hearts"))

console.log(btnprice);
console.log(del, "hello rami");


// changer le couleur en noir et en rouge
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
    })
}

// add bouton 1
let result = 0;
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
        /* result = result + (+ unitPrices[i].innerHTML) * (+ qte[i].innerHTML)
        prixQuantite[i].value = result; */
    });

}


// moin1
for (let i = 0; i < moin.length; i++) {
    moin[i].addEventListener("click", function () {
        if (qte[i].innerHTML > 0) {
            qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
            /* result -= 100;
            document.getElementById("prix-quantite").value = result; */
        } else {
            alert("il nya pas un panier negative")
        }
    });

}
/* function totalInput() {
    let prixQuantite = Array.from(document.querySelectorAll(".prix-quantite"));
    let qte = document.querySelectorAll(".qte");
    let s = 0;

    for (let i in unitPrices) {
        s += (+ unitPrices[i].innerHTML) * (+ qte[i].innerHTML)
    }
    prixQuantite[i].value = s

} */


/* // resultat final
function priceTotal() {
    let price = document.querySelectorAll(".price-total");
    let prixQuantite = Array.from(document.querySelectorAll(".prix-quantite"));
    result = 0;
    for (let i in prixQuantite) {


        result = prixQuantite[i] + prixQuantite[i + 1]
        price.value = result

    }
}; */

// bouton delete
for (let i in del) {
    del[i].addEventListener("click", function () {
        del[i].parentNode.parentNode.remove()
        // sup[i].remove()

    })
}
