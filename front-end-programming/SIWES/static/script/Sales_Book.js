var sellingPrice = parseInt(document.getElementById("sellingPrice1").textContent);

document.getElementById("Calculate4").onclick = function(){
    var costPrice = parseInt(document.getElementById("costPrice1").textContent);
    let sellingPrice = parseInt(document.getElementById("sellingPrice1").textContent);
    var selectedProduct = document.getElementById("Products1").textContent;
    let quantity = document.getElementById("Quantity1").value;
    

    let amount = sellingPrice * quantity;
    alert(quantity)
    //alert(selectedProduct)
    document.getElementById("amount1").textContent = amount
}
//}