document.getElementById("total").onclick = function(){
    let amount1 = parseInt(document.getElementById("amount1").textContent)
    let amount2 = parseInt(document.getElementById("amount2").textContent)
    let amount3 = parseInt(document.getElementById("amount3").textContent)
    let amount4 = parseInt(document.getElementById("amount4").textContent)
    let amount5a = document.getElementById("amount5").textContent
    let new_amount5 = amount5a.replace(/[$]/g, ' ')
    let amount5 = parseInt(new_amount5)

    total = amount5
    total  = total.toLocaleString()
        document.getElementById("totalAmount").textContent = total
}