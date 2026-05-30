const sales: number[] = [100, 200, 300, 400, 500]

function int(): number {
	let sum = 0

	for (let sale of sales) {
		sum += sale
	}
	console.log('sum: ', sum)
	return sum
}

int()
