import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

// example create data
const data = {
	item_name: "test",
	quantity: 123,
	expiry_date: "2022-01-01 10:00:00.123Z",
	company: "test",
};

const record = await pb.collection("groceries").create(data);

function generateExcel() {
	var wb = XLSX.utils.book_new();
	var ws = XLSX.utils.json_to_sheet([
		{ "Item Name": "Item 1", "Expiry Date": "2024-05-01", Quantity: 1 },
		{ "Item Name": "Item 2", "Expiry Date": "2024-05-05", Quantity: 2 },
		{ "Item Name": "Item 3", "Expiry Date": "2024-05-10", Quantity: 3 },
	]);
	XLSX.utils.book_append_sheet(wb, ws, "Groceries");
	var today = new Date();

	var fileName =
		"Groceries_" +
		today.getFullYear() +
		"-" +
		(today.getMonth() + 1) +
		"-" +
		today.getDate() +
		".xlsx";
	XLSX.writeFile(wb, fileName);
}
