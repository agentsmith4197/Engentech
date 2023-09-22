document.getElementById("total").onclick = function(){
    let amount1a = document.getElementById("amount1").textContent
    let amount2a = document.getElementById("amount2").textContent
    let amount3a = document.getElementById("amount3").textContent
    let amount4a = document.getElementById("amount4").textContent
    let amount5a = document.getElementById("amount5").textContent

    let new_amount1 = amount1a.replace(/[$]/g, ' ')
    let new_amount2 = amount2a.replace(/[$]/g, ' ')
    let new_amount3 = amount3a.replace(/[$]/g, ' ')
    let new_amount4 = amount4a.replace(/[$]/g, ' ')
    let new_amount5 = amount5a.replace(/[$]/g, ' ')

    let amount1 = parseInt(new_amount1)
    let amount2 = parseInt(new_amount2)
    let amount3 = parseInt(new_amount3)
    let amount4 = parseInt(new_amount4)
    let amount5 = parseInt(new_amount5)
    let naira = "$"

    total = amount1 + amount2 + amount3 + amount4 + amount5
    total  = total.toLocaleString()
        document.getElementById("totalAmount").textContent = naira + total
}