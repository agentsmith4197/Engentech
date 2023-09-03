let a = document.getElementById("dev")

function getVal(){
    const val = document.querySelector("input").value;
    document.getElementById('btn').onclick = function(){
        a.style.color = val
    }
}
