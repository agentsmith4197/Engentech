//profit calculations
document.getElementById("check").onclick = function(){
    let profit1 = parseInt(document.getElementById("profit1").textContent)
    let profit2 = parseInt(document.getElementById("profit2").textContent)
    let profit3 = parseInt(document.getElementById("profit3").textContent)
    let profit4 = parseInt(document.getElementById("profit4").textContent)
    let profit5 = parseInt(document.getElementById("profit5").textContent)
    let totalPfit = profit1 + profit2 + profit3 + profit4 + profit5
    let totalProfit = totalPfit.toLocaleString()
    let naira = "$"

    document.getElementById("Profit").textContent = naira + totalProfit
}