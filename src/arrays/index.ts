/**
 * @file index.ts
 * @description Implementation and examples of an Array-based data structure.
 */

const fruits: string[] = ['Apple', 'Banana', 'Cherry']

const vehicles = new Array<string>('Car', 'Truck', 'Bike')

const grid = [
	[1, 2],
	[3, 4],
]

for (let i = 0; i < grid.length; i++) {
	for (let j = 0; j < grid[i].length; j++) {
		console.log(grid[i][j])
	}
}

