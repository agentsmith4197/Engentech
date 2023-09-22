//table row 1 calculations
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
        let naira = "$"

        document.getElementById("amount1").textContent = naira + amount  
        document.getElementById("profit1").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount1").textContent = naira + amount 
        document.getElementById("profit1").textContent = profit
        
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount1").textContent = naira + amount 
        document.getElementById("profit1").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount1").textContent = naira + amount 
        document.getElementById("profit1").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount1").textContent = naira + amount 
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
        let naira = "$"

        document.getElementById("amount2").textContent = naira + amount   
        document.getElementById("profit2").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount2").textContent = naira + amount
        document.getElementById("profit2").textContent = profit
        
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount2").textContent = naira + amount
        document.getElementById("profit2").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount2").textContent = naira + amount
        document.getElementById("profit2").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount2").textContent = naira + amount
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
        let naira = "$"

        document.getElementById("amount3").textContent = naira + amount 
        document.getElementById("profit3").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount3").textContent = naira + amount
        document.getElementById("profit3").textContent = profit
        
    }
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount3").textContent = naira + amount
        document.getElementById("profit3").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount3").textContent = naira + amount
        document.getElementById("profit3").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount3").textContent = naira + amount
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
        let naira = "$"

        document.getElementById("amount4").textContent = naira + amount
        document.getElementById("profit4").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount4").textContent = naira + amount
        document.getElementById("profit4").textContent = profit
        
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount4").textContent = naira + amount
        document.getElementById("profit4").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount4").textContent = naira + amount
        document.getElementById("profit4").textContent = profit
        
    }
    else if ( selectElements == "Products5"){
        let amount = sellingPrice3 * quantity;
        let pt = sellingPrice3 - costPrice5
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount4").textContent = naira + amount
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
        let naira = "$"

        document.getElementById("amount5").textContent = naira + amount  
        document.getElementById("profit5").textContent = profit
    }
    else if ( selectElements == "Products2"){
        let amount = sellingPrice * quantity;
        let pt = sellingPrice - costPrice2
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount5").textContent = naira + amount
        document.getElementById("profit5").textContent = profit
}
    else if ( selectElements == "Products3"){
        let amount = sellingPrice1 * quantity;
        let pt = sellingPrice1 - costPrice3
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount5").textContent = naira + amount
        document.getElementById("profit5").textContent = profit
        
    }
    else if ( selectElements == "Products4"){
        let amount = sellingPrice2 * quantity;
        let pt = sellingPrice2 - costPrice4
        let profit = pt * quantity;
        let naira = "$"

        document.getElementById("amount5").textContent = naira + amount
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

