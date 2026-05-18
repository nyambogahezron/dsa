# Computational Complexity & Big O Notation

Complexity analysis is the foundation of computer science. It allows us to measure the efficiency of an algorithm in terms of **Time** (execution duration) and **Space** (memory footprint) as the size of the input grows.

Rather than measuring performance in seconds (which varies based on hardware, OS, and background processes), we express complexity using **asymptotic notations** that model how resource consumption scales mathematically.

---

## The Big O Spectrum

The **Big O Complexity Chart** below illustrates the efficiency spectrum from highly optimal (green/efficient) to extremely inefficient (red/intractable) as the input size $n$ grows.

```
  Operations
      ▲
      │                                                O(n!) [Factorial]
      │                                              /
      │                                             /   O(2^n) [Exponential]
      │                                            /   /
      │                                           /   /
      │                                          /   /   O(n^2) [Polynomial/Quadratic]
      │                                         /   /   /
      │                                        /   /   /
      │                                       /   /   /     O(n log n) [Linearithmic]
      │                                      /   /   /     /
      │                                     /   /   /     /    O(n) [Linear]
      │                                    /   /   /     /    /
      │                                   /   /   /     /    /
      │                                  /   /   /     /    /
      │                                 /   /   /     /    /
      │                                /   /   /     /    /
      │                               /   /   /     /    /
      │                              /   /   /     /    /      O(log n) [Logarithmic]
      │                             /   /   /     /    /     /
      │                            /   /   /     /    /    /____ O(1) [Constant]
      └─────────────────────────────────────────────────────────────► Input Size (n)
```

### Growth Rate Summary Table

| Complexity | Name | Growth Rate vs. Input ($n = 10 \rightarrow 100$) | Scalability |
| :--- | :--- | :--- | :--- |
| **$O(1)$** | Constant | Unchanged ($1 \rightarrow 1$) | Excellent (Instantaneous) |
| **$O(\log n)$** | Logarithmic | Tiny increase ($3.3 \rightarrow 6.6$) | Excellent (Divide & Conquer) |
| **$O(n)$** | Linear | Proportional ($10 \rightarrow 100$) | Fair (Iterative) |
| **$O(n \log n)$** | Linearithmic | Moderate ($33 \rightarrow 664$) | Good (Optimal Sorting) |
| **$O(n^2)$** | Polynomial (Quadratic) | Exponential increase ($100 \rightarrow 10,000$) | Poor (Nested Loops) |
| **$O(2^n)$** | Exponential | Intractable ($1,024 \rightarrow 1.26 \times 10^{30}$) | Terrible (Combinatorics) |
| **$O(n!)$** | Factorial | Catastrophic ($3.6 \times 10^6 \rightarrow 9.3 \times 10^{157}$) | Worst (Permutations) |

---

## Detailed Runtime Breakdown

Here is an in-depth analysis of the six key runtimes displayed in the **Common Runtimes** spectrum, complete with physical analogies, real-world examples, and references to their implementation in [index.ts](./index.ts).

### 1. Constant Time — $O(1)$
An algorithm has constant complexity when its runtime is independent of the input size $n$. The number of operations remains fixed.

*   **Real-World Analogy**: Finding the total page count of a physical book by looking directly at the number printed on the back cover. Whether the book has 10 pages or 10,000, you only need one glance.
*   **Common Examples**:
    *   Accessing an array element by its index (`arr[5]`).
    *   Inserting or retrieving from a Hash Map (average case).
    *   Checking if an integer is even or odd (`num % 2 === 0`).
*   **TypeScript Implementation**: See `constantTimeExample` in [index.ts](./index.ts).

### 2. Logarithmic Time — $O(\log n)$
An algorithm has logarithmic complexity when its runtime grows by one unit every time the input size is doubled. This is typically achieved by halving the search space at each step.

*   **Real-World Analogy**: Finding a word in a physical dictionary. Instead of flipping every single page from the start, you open it in the middle. If the target word is alphabetically earlier, you discard the second half of the book and repeat the process on the first half.
*   **Common Examples**:
    *   Binary Search on a sorted array.
    *   Finding, inserting, or deleting elements in a Balanced Binary Search Tree (e.g., AVL Tree, Red-Black Tree).
*   **TypeScript Implementation**: See `logarithmicTimeExample` in [index.ts](./index.ts).

### 3. Linear Time — $O(n)$
An algorithm has linear complexity when its runtime grows in direct, 1-to-1 proportion with the input size $n$. If $n$ doubles, the number of operations doubles.

*   **Real-World Analogy**: Reading a physical book word-by-word from the very first page to the very last page to count how many times a specific word appears.
*   **Common Examples**:
    *   Iterating through an array once (e.g., finding the maximum value, calculating sum).
    *   Linear Search on an unsorted list.
    *   Traversing a Singly Linked List.
*   **TypeScript Implementation**: See `linearTimeExample` in [index.ts](./index.ts).

### 4. Polynomial Time — $O(n^k)$ (specifically Quadratic $O(n^2)$)
An algorithm has quadratic complexity when its runtime grows proportionally to the square of the input size $n$. This usually occurs when we perform nested iterations over the same data.

*   **Real-World Analogy**: A classroom of $n$ students where every student must shake hands with every other student exactly once. The total number of handshakes is proportional to $n^2$.
*   **Common Examples**:
    *   Nested loops over the same array.
    *   Bubble Sort, Selection Sort, and Insertion Sort in their worst cases.
    *   Finding duplicate elements in an array using brute-force comparison.
*   **TypeScript Implementation**: See `polynomialTimeExample` in [index.ts](./index.ts).

### 5. Exponential Time — $O(2^n)$
An algorithm has exponential complexity when the number of operations doubles with every single increment of the input size $n$. Algorithms with this complexity quickly become impossible to run for $n > 30$.

*   **Real-World Analogy**: A classic pyramid scheme or recursive chain letter: one person sends a letter to two people, who each send it to two more, and so on. The number of people involved doubles at each stage.
*   **Common Examples**:
    *   Naive recursive calculation of Fibonacci numbers (`fib(n) = fib(n-1) + fib(n-2)`).
    *   Solving the Towers of Hanoi puzzle.
    *   Generating the power set (all subsets) of a set.
*   **TypeScript Implementation**: See `exponentialTimeExample` in [index.ts](./index.ts).

### 6. Factorial Time — $O(n!)$
An algorithm has factorial complexity when the number of operations grows by a factor of $n$ at each level ($n! = n \times (n-1) \times (n-2) \times \dots \times 1$). This is the slowest common runtime and is intractable for $n > 12$.

*   **Real-World Analogy**: A salesperson planning a route to visit $n$ distinct cities. To find the absolute shortest route, they calculate every single possible sequence of cities. For 3 cities, there are 6 paths; for 10 cities, there are 3.6 million paths; for 20 cities, the number is larger than the age of the universe in seconds!
*   **Common Examples**:
    *   Brute-force Traveling Salesperson Problem (TSP).
    *   Generating all possible permutations of an array or string.
*   **TypeScript Implementation**: See `factorialTimeExample` in [index.ts](./index.ts).

---

## Practical Rules of Big O Analysis

When analyzing the time complexity of an actual codebase, use these four structural rules:

### Rule 1: Worst-Case Scenario
Big O always represents the upper bound—the absolute worst-case scenario. If a linear search finds an item on the first attempt ($O(1)$) or the last ($O(n)$), we classify the algorithm as $O(n)$ because we must plan for the worst case.

### Rule 2: Drop the Constants
Constants do not matter as $n$ approaches infinity.
*   $O(2n) \rightarrow O(n)$
*   $O(500) \rightarrow O(1)$
*   $O(1.5n^2 + 100) \rightarrow O(n^2)$

### Rule 3: Drop Non-Dominant Terms
Only the term with the highest growth rate is kept; others become negligible as $n$ grows.
*   $O(n^2 + n) \rightarrow O(n^2)$
*   $O(n^3 + n^2 + 500\log n) \rightarrow O(n^3)$
*   $O(2^n + n^{10}) \rightarrow O(2^n)$

### Rule 4: Multi-Part Inputs
If your algorithm operates on multiple distinct inputs:
*   Nested loops over *different* inputs of sizes $a$ and $b \rightarrow O(a \times b)$.
*   Sequential loops over *different* inputs of sizes $a$ and $b \rightarrow O(a + b)$.

---

## Space Complexity vs. Time Complexity

An algorithm does not just use processor cycles; it also consumes RAM. **Space Complexity** refers to the total memory allocated by an algorithm relative to the input size $n$.

Space complexity is divided into two parts:
1.  **Input Space**: The memory occupied by the input elements themselves.
2.  **Auxiliary Space**: The extra or temporary memory allocated *by the algorithm itself* during execution (excluding the input).

*Example*: If you write an algorithm that takes an array of size $n$ and returns a *new* array of size $n$, the auxiliary space is $O(n)$. If it sorts the array *in-place* without allocating new arrays, the auxiliary space is $O(1)$ (constant space).

### The Call Stack Exception
Recursive algorithms consume space on the **Call Stack** for every active stack frame. Even if a recursive function does not define any variables, it has a space complexity proportional to the maximum recursion depth. For instance, the naive Fibonacci recursion `fib(n)` has a call stack depth of $O(n)$, despite calculating a number using only primitive variables.
