# Complexity Notes

## 1. Time vs Space Complexity

Complexity helps us describe how an algorithm scales as input size grows.

- Time Complexity: how the number of operations grows with input size `n`.
- Space Complexity: how much extra memory (auxiliary space) grows with `n`.

### Time-Space Tradeoff

Many optimizations trade one resource for the other:

- Use extra memory to reduce repeated work (faster, more space).
- Avoid extra memory and compute on the fly (slower, less space).

### Examples

- `linearTimeExample(arr)` in `index.ts`
  - Time: `O(n)`
  - Auxiliary Space: `O(1)`

- `polynomialTimeExample(arr)` in `index.ts`
  - Time: `O(n^2)` (nested loops)
  - Auxiliary Space: `O(n^2)` in output size (stores all pairs)

- Recursive functions (`exponentialTimeExample`, `factorialTimeExample`)
  - Include call stack usage in space analysis.

---

## 2. How to Calculate Complexity

### Step-by-step method

1. Identify the input size variable (`n`, or multiple inputs like `a`, `b`).
2. Identify the core operation (comparison, array access, arithmetic, recursive call, etc.).
3. Count how many times the core operation runs as a function of input size.
4. Express the result asymptotically.
5. Simplify using Big-O rules.

### Core Rules

1. Worst-case dominates for Big-O.
2. Drop constants:
   - `O(2n)` -> `O(n)`
   - `O(500)` -> `O(1)`
3. Drop non-dominant terms:
   - `O(n^2 + n)` -> `O(n^2)`
   - `O(n^3 + n log n)` -> `O(n^3)`
4. Distinguish independent inputs:
   - Sequential over different inputs: `O(a + b)`
   - Nested over different inputs: `O(a * b)`

### Pattern shortcuts

- Single full pass loop -> usually `O(n)`
- Nested loops on same input -> usually `O(n^2)`
- Divide search space each step -> `O(log n)`
- Branching recursion (e.g., two recursive calls each level) -> often exponential

---

## 3. Asymptotic Notation

### Big-O: `O(g(n))` (Upper Bound)

Describes an upper bound on growth. In practice, commonly used to communicate worst-case scaling.

### Big-Theta: `Theta(g(n))` (Tight Bound)

Describes the exact growth class up to constant factors (both upper and lower bounds).

### Big-Omega: `Omega(g(n))` (Lower Bound)

Describes a lower bound on growth (algorithm takes at least this much).

### Intuition by Example

- Binary search: `Theta(log n)`
- Linear scan: `Theta(n)`
- Merge sort: `Theta(n log n)`
- Naive Fibonacci recursion: approximately `Theta(2^n)`

---

## 4. Common Runtime Classes

| Complexity | Name | Practical Interpretation |
| --- | --- | --- |
| `O(1)` | Constant | Input growth has negligible effect |
| `O(log n)` | Logarithmic | Scales very well (divide and conquer) |
| `O(n)` | Linear | Cost grows proportionally with input |
| `O(n log n)` | Linearithmic | Efficient for comparison sorting |
| `O(n^2)` | Quadratic | Becomes expensive at larger `n` |
| `O(2^n)` | Exponential | Explodes quickly, often infeasible |
| `O(n!)` | Factorial | Catastrophic growth, infeasible very early |

---

## 5. Notes Specific to This Folder

`index.ts` includes practical demo implementations:

- `constantTimeExample` -> `O(1)`
- `logarithmicTimeExample` -> `O(log n)`
- `linearTimeExample` -> `O(n)`
- `polynomialTimeExample` -> `O(n^2)`
- `exponentialTimeExample` -> `O(2^n)`
- `factorialTimeExample` -> `O(n!)`

It also includes a benchmark runner (`runBenchmarks`) to visualize operation growth and execution time.

---

## 6. Quick Accuracy Correction

If you describe `O(n^2)` growth in text, call it **quadratic growth**, not exponential growth. Exponential is reserved for classes like `O(2^n)`.
