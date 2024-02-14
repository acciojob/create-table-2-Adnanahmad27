let index = 0;
function createTable() {
    //Write your code here
	const row = prompt("Input number of rows");
	const column = prompt("Input number of columns");
	const table = document.getElementById("myTable");
	for(let i=index ; i < index + row ; i++){
		let currRow = document.createElement("tr");
		for(let j=0 ; j < column ; j++){
			let currCol = document.createElement("td");
			currCol.innerText = `Row-${i} Column-${j}`;
			currRow.appendChild(currCol);
		}
		table.appendChild(currRow);
	}
	index = row;	
}
