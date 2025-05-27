function generateExcel() {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet([
        { 'Item Name': 'Item 1', 'Expiry Date': '2024-05-01', 'Quantity': 1 },
        { 'Item Name': 'Item 2', 'Expiry Date': '2024-05-05', 'Quantity': 2 },
        { 'Item Name': 'Item 3', 'Expiry Date': '2024-05-10', 'Quantity': 3 }
    ]);
    XLSX.utils.book_append_sheet(wb, ws, 'Groceries');
    var today = new Date();
    var fileName = 'Groceries_' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '.xlsx';
    XLSX.writeFile(wb, fileName);
}
