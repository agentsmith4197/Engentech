//table row 1 calculations
//lowcal, concatination 
document.getElementById("Calculate1").onclick = function(){
    let selectElements = document.getElementById("Products1").value;
    let quantity = document.getElementById("Quantity1").value;

    let costPrice1 = parseInt(document.getElementById("costPrice1").textContent);
    let costPrice2 = parseInt(document.getElementById("costPrice2").textContent);
    let costPrice3 = parseInt(document.getElementById("costPrice3").textContent);
    let costPrice4 = parseInt(document.getElementById("costPrice4").textContent);
    let costPrice5 = parseInt(document.getElementById("costPrice5").textContent);

    let sellingprice = parseInt(document.getElementById("sellingPrice1").textContent);
    let sellingPrice = parseInt(document.getElementById("sellingPrice2").textContent);
    let sellingPrice1 = parseInt(document.getElementById("sellingPrice3").textContent);
    let sellingPrice2 = parseInt(document.getElementById("sellingPrice4").textContent);
    let sellingPrice3 = parseInt(document.getElementById("sellingPrice5").textContent);

    if (selectElements == "Products1"){
        let amount = sellingprice * quantity;
        let pt = sellingprice - costPrice1
        let profit = pt * quantity;

        document.getElementById("amount1").textContent = amount  
        document.getElementById("profit1").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;

        document.getElementById("amount1").textContent = amount
        document.getElementById("profit1").textContent = profit
        
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;

        document.getElementById("amount1").textContent = amount
        document.getElementById("profit1").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;

        document.getElementById("amount1").textContent = amount
        document.getElementById("profit1").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;

        document.getElementById("amount1").textContent = amount
        document.getElementById("profit1").textContent = profit
        
    }
    else{
        inval = "invalid product"
        document.getElementById("amount1").textContent = inval
    }
    
}
//table row 2 calculations
document.getElementById("Calculate2").onclick = function(){
    let selectElements = document.getElementById("Products2").value;
    let quantity = document.getElementById("Quantity2").value;

    let costPrice1 = parseInt(document.getElementById("costPrice1").textContent);
    let costPrice2 = parseInt(document.getElementById("costPrice2").textContent);
    let costPrice3 = parseInt(document.getElementById("costPrice3").textContent);
    let costPrice4 = parseInt(document.getElementById("costPrice4").textContent);
    let costPrice5 = parseInt(document.getElementById("costPrice5").textContent);

    let sellingprice = parseInt(document.getElementById("sellingPrice1").textContent);
    let sellingPrice = parseInt(document.getElementById("sellingPrice2").textContent);
    let sellingPrice1 = parseInt(document.getElementById("sellingPrice3").textContent);
    let sellingPrice2 = parseInt(document.getElementById("sellingPrice4").textContent);
    let sellingPrice3 = parseInt(document.getElementById("sellingPrice5").textContent);

    if (selectElements == "Products1"){
        let amount = sellingprice * quantity;
        let pt = sellingprice - costPrice1
        let profit = pt * quantity;

        document.getElementById("amount2").textContent = amount  
        document.getElementById("profit2").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;

        document.getElementById("amount2").textContent = amount
        document.getElementById("profit2").textContent = profit
        
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;

        document.getElementById("amount2").textContent = amount
        document.getElementById("profit2").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;

        document.getElementById("amount2").textContent = amount
        document.getElementById("profit2").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;

        document.getElementById("amount2").textContent = amount
        document.getElementById("profit2").textContent = profit
        
    }
    else{
        inval = "invalid product"
        document.getElementById("amount2").textContent = inval
    }
    
}
// Table row 3 calculations
document.getElementById("Calculate3").onclick = function(){
    let selectElements = document.getElementById("Products3").value;
    let quantity = document.getElementById("Quantity3").value;

    let costPrice1 = parseInt(document.getElementById("costPrice1").textContent);
    let costPrice2 = parseInt(document.getElementById("costPrice2").textContent);
    let costPrice3 = parseInt(document.getElementById("costPrice3").textContent);
    let costPrice4 = parseInt(document.getElementById("costPrice4").textContent);
    let costPrice5 = parseInt(document.getElementById("costPrice5").textContent);

    let sellingprice = parseInt(document.getElementById("sellingPrice1").textContent);
    let sellingPrice = parseInt(document.getElementById("sellingPrice2").textContent);
    let sellingPrice1 = parseInt(document.getElementById("sellingPrice3").textContent);
    let sellingPrice2 = parseInt(document.getElementById("sellingPrice4").textContent);
    let sellingPrice3 = parseInt(document.getElementById("sellingPrice5").textContent);

    if (selectElements == "Products1"){
        let amount = sellingprice * quantity;
        let pt = sellingprice - costPrice1
        let profit = pt * quantity;

        document.getElementById("amount3").textContent = amount  
        document.getElementById("profit3").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;

        document.getElementById("amount3").textContent = amount
        document.getElementById("profit3").textContent = profit
        
    }
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;

        document.getElementById("amount3").textContent = amount
        document.getElementById("profit3").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;

        document.getElementById("amount3").textContent = amount
        document.getElementById("profit3").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;

        document.getElementById("amount3").textContent = amount
        document.getElementById("profit3").textContent = profit
        
    }
    else{
        inval = "invalid product"
        document.getElementById("amount3").textContent = inval
    }
    
}
// table roow 4 calcutions
document.getElementById("Calculate4").onclick = function(){
    let selectElements = document.getElementById("Products4").value;
    let quantity = document.getElementById("Quantity4").value;

    let costPrice1 = parseInt(document.getElementById("costPrice1").textContent);
    let costPrice2 = parseInt(document.getElementById("costPrice2").textContent);
    let costPrice3 = parseInt(document.getElementById("costPrice3").textContent);
    let costPrice4 = parseInt(document.getElementById("costPrice4").textContent);
    let costPrice5 = parseInt(document.getElementById("costPrice5").textContent);

    let sellingprice = parseInt(document.getElementById("sellingPrice1").textContent);
    let sellingPrice = parseInt(document.getElementById("sellingPrice2").textContent);
    let sellingPrice1 = parseInt(document.getElementById("sellingPrice3").textContent);
    let sellingPrice2 = parseInt(document.getElementById("sellingPrice4").textContent);
    let sellingPrice3 = parseInt(document.getElementById("sellingPrice5").textContent);
      

    if (selectElements == "Products1"){
        let amount = sellingprice * quantity;
        let pt = sellingprice - costPrice1
        let profit = pt * quantity;

        document.getElementById("amount4").textContent = amount  
        document.getElementById("profit4").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;

        document.getElementById("amount4").textContent = amount
        document.getElementById("profit4").textContent = profit
        
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;

        document.getElementById("amount4").textContent = amount
        document.getElementById("profit4").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;

        document.getElementById("amount4").textContent = amount
        document.getElementById("profit4").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;

        document.getElementById("amount4").textContent = amount
        document.getElementById("profit4").textContent = profit
        
    }
    else{
        inval = "invalid product"
        document.getElementById("amount4").textContent = inval
    }
    
}
// Table row 5 calculations
document.getElementById("Calculate5").onclick = function(){
    let selectElements = document.getElementById("Products5").value;
    let quantity = document.getElementById("Quantity5").value;
    
    let costPrice1 = parseInt(document.getElementById("costPrice1").textContent);
    let costPrice2 = parseInt(document.getElementById("costPrice2").textContent);
    let costPrice3 = parseInt(document.getElementById("costPrice3").textContent);
    let costPrice4 = parseInt(document.getElementById("costPrice3").textContent);
    let costPrice5 = parseInt(document.getElementById("costPrice5").textContent);
    
    let sellingprice = parseInt(document.getElementById("sellingPrice1").textContent);
    let sellingPrice = parseInt(document.getElementById("sellingPrice2").textContent);
    let sellingPrice1 = parseInt(document.getElementById("sellingPrice3").textContent);
    let sellingPrice2 = parseInt(document.getElementById("sellingPrice4").textContent);
    let sellingPrice3 = parseInt(document.getElementById("sellingPrice5").textContent);
    
    
    if (selectElements == "Products1"){
        let amount = sellingprice * quantity;
        let pt = sellingprice - costPrice1
        
        let profit = pt * quantity;

        document.getElementById("amount5").textContent = amount  
        document.getElementById("profit5").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;

        document.getElementById("amount5").textContent = amount
        document.getElementById("profit5").textContent = profit
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;

        document.getElementById("amount5").textContent = amount
        document.getElementById("profit5").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        

        let profit = pt * quantity;

        document.getElementById("amount5").textContent = amount
        document.getElementById("profit5").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount5").textContent = naira + amount
        document.getElementById("profit5").textContent = profit
        
    }
    else{
        let inval = "invalid product"
        document.getElementById("amount5").textContent = inval
    }
}
//total calculations

//profit calculations
document.getElementById("check").onclick = function(){
        let profit1 = parseInt(document.getElementById("profit1").textContent)
        let profit2 = parseInt(document.getElementById("profit2").textContent)
        let profit3 = parseInt(document.getElementById("profit3").textContent)
        let profit4 = parseInt(document.getElementById("profit4").textContent)
        let profit5 = parseInt(document.getElementById("profit5").textContent)
        let totalPfit = profit1 + profit2 + profit3 + profit4 + profit5
        let totalProfit = totalPfit.toLocaleString()

        document.getElementById("Profit").textContent = totalProfit
    }

// document.getElementById("Calculate2").onclick = function(){
//     var profit = parseInt(document.getElementById("costPrice2").textContent);
//     let sellingPrice = parseInt(document.getElementById("sellingPrice2").textContent);
//     var selectedProduct = document.getElementById("Products2").textContent;
//     let quantity = document.getElementById("Quantity2").value;
    

//     let amount = sellingPrice * quantity;
    
//     document.getElementById("amount2").textContent = amount
// }
// document.getElementById("Calculate3").onclick = function(){
//     var costPrice = parseInt(document.getElementById("costPrice3").textContent);
//     let sellingPrice = parseInt(document.getElementById("sellingPrice3").textContent);
//     var selectedProduct = document.getElementById("Products3").textContent;
//     let quantity = document.getElementById("Quantity3").value;
    

//     let amount = sellingPrice * quantity;
    
//     document.getElementById("amount3").textContent = amount
// }
// document.getElementById("Calculate4").onclick = function(){
//     var costPrice = parseInt(document.getElementById("costPrice4").textContent);
//     let sellingPrice = parseInt(document.getElementById("sellingPrice4").textContent);
//     var selectedProduct = document.getElementById("Products4").textContent;
//     let quantity = document.getElementById("Quantity4").value;
    

//     let amount = sellingPrice * quantity;

//     document.getElementById("amount4").textContent = amount
// }
// document.getElementById("Calculate5").onclick = function(){
//     var costPrice = parseInt(document.getElementById("costPrice5").textContent);
//     let sellingPrice = parseInt(document.getElementById("sellingPrice5").textContent);
//     var selectedProduct = document.getElementById("Products5").textContent;
//     let quantity = document.getElementById("Quantity5").value;
    

//     let amount = sellingPrice * quantity;
   
//     document.getElementById("amount5").textContent = amount
// }

// let sellingPrice = parseInt(document.getElementById("sellingPrice1").textContent);
// let submitButtons = document.querySelectorAll("input[type='submit']");
// let quantityInputs = document.querySelectorAll("input[type='text']");
// let selectElements = document.querySelectorAll("select[name='Products']");



// let totalProfit = 0;
// let totalAmount = 0;

// submitButtons.forEach(function(button, index){
//     button.addEventListener('click', function(event){
//         event.preventDefault();

//         let selectedProduct = selectElements[index].value;
//         let quantity = parseInt(quantityInputs[index].value);

//         let product = productPrices[selectedProduct];

    


//         let productPrices = {
//             "Products1": { costPrice: 30000, sellingPrice: 40000 },
//             "Products2": { costPrice: 33000, sellingPrice: 37000 },
//             "Products3": { costPrice: 40000, sellingPrice: 50000 },
//             "Products4": { costPrice: 45000, sellingPrice: 55000 },
//             "Products5": { costPrice: 25000, sellingPrice: 35000 }
//         };

//         if ( selectElements === selectedProduct) {
//             let costPrice = product.costPrice;
//             let sellingPrice = product.sellingPrice;
            
//             let amount = sellingPrice * quantity;
//             document.getElementById("amount1").textContent = amount
//         }
//     })
    
// })