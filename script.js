let total = "";
let arrei = [];

document.getElementById("z").addEventListener("click" , display);

function display(a){
    total += a;
    document.getElementById("b").innerHTML = total;

    if(a === c){
        total = "";
        arrei = "";
        document.getElementById("b").innerHTML = total;
    }
}