// Get references to the relevant HTML elements
var selectElements = document.querySelectorAll("select[name='Products']");
var quantityInputs = document.querySelectorAll("input[type='text']");
var submitButtons = document.querySelectorAll("input[type='submit']");
var totalProfitCell = document.querySelector("tr:last-child td:nth-child(8)");
var totalAmountCell = document.querySelector("tr:last-child td:nth-child(9)");

// Initialize total profit and amount variables
var totalProfit = 0;
var totalAmount = 0;

// Add click event listeners to the submit buttons
submitButtons.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the selected product value and quantity input value
        var selectedProduct = selectElements[index].value;
        var quantity = parseInt(quantityInputs[index].value);

        // Here, you can calculate the profit and amount based on the selected product and quantity
        // You would need to have a mapping of product prices or calculate it based on your data

        // For demonstration purposes, let's assume you have a product price mapping
        var productPrices = {
            "Products1": { costPrice: 30000, sellingPrice: 40000 },
            "Products2": { costPrice: 33000, sellingPrice: 37000 },
            "Products3": { costPrice: 40000, sellingPrice: 50000 },
            "Products4": { costPrice: 45000, sellingPrice: 55000 },
            "Products5": { costPrice: 25000, sellingPrice: 35000 }
        };

        var product = productPrices[selectedProduct];

        if (product) {
            var costPrice = product.costPrice;
            var sellingPrice = product.sellingPrice;

            var profit = (sellingPrice - costPrice) * quantity;
            var amount = sellingPrice * quantity;

            // Update the total profit and amount
            totalProfit += profit;
            totalAmount += amount;

            // Update the total profit and amount cells in the table
            totalProfitCell.textContent = totalProfit;
            totalAmountCell.textContent = totalAmount;

            // Clear the quantity input field for the current row
            quantityInputs[index].value = "";
        }
    });
});