document.getElementById("groceryForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Get form values
  var itemName = document.getElementById("itemName").value;
  var quantity = document.getElementById("quantity").value;
  var expiryDate = document.getElementById("expiryDate").value;
  // Create HTML for the new grocery item
  var groceryItemHtml = `
      <div class="grocery-item">
          <p><strong>Item Name:</strong> ${itemName}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Expiry Date:</strong> ${expiryDate}</p>
      </div>
  `;
  // Append the new grocery item to the grocery list
  document.getElementById("groceryList").insertAdjacentHTML("beforeend", groceryItemHtml);
  // Clear the form fields
  document.getElementById("itemName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("expiryDate").value = "";
});
