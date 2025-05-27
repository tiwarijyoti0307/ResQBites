const ExcelJS = require('exceljs');

// Function to create a new Excel workbook and worksheet
async function createExcelFile() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Groceries');

    // Add headers
    worksheet.addRow(['Item Name', 'Quantity', 'Expiry Date']);

    // Add data
    worksheet.addRow(['Apples', 10, '2024-04-30']);
    worksheet.addRow(['Bananas', 5, '2024-05-15']);
    worksheet.addRow(['Oranges', 8, '2024-05-10']);

    // Save workbook
    await workbook.xlsx.writeFile('groceries.xlsx');
}

// Function to read data from an existing Excel file
async function readExcelFile() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('groceries.xlsx');
    const worksheet = workbook.getWorksheet('Groceries');

    // Read data
    const data = [];
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber !== 1) { // Skip headers
            data.push({
                itemName: row.getCell(1).value,
                quantity: row.getCell(2).value,
                expiryDate: row.getCell(3).value
            });
        }
    });

    return data;
}

module.exports = { createExcelFile, readExcelFile };
