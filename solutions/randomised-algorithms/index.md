# Randomised Algorithms

Randomised Algorithms use randomness as part of their logic, either to improve average performance, avoid adversarial worst-case inputs, or simplify design. The same input can produce different internal execution paths, while still preserving correctness guarantees in expectation or with high probability.

---

## When to Use & Key Identification Signals
1. When deterministic approaches are vulnerable to pathological/adversarial input patterns.
2. When average-case performance is more important than strict deterministic worst-case behavior.
3. When a random pivot, random sample, or randomized ordering can simplify implementation.

---

## How to Consider & Analyze It
First ask what randomness is buying you: better expected runtime, lower collision probability, or fair sampling. Then define whether your algorithm must always be correct (Las Vegas) or can have a small probability of error (Monte Carlo).

---

## How to Plan & Solve (Step-by-Step)
1. **Choose Random Primitive**: Random index, random pivot, random subset, or shuffle.
2. **Preserve Invariants**: Ensure each randomized choice still respects algorithm correctness constraints.
3. **Analyze Expected Cost**: Reason about expected time or success probability.
4. **Stabilize via Repetition**: If error is possible, repeat trials to reduce failure probability.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Strong expected performance for practical workloads. | Harder to debug due to non-deterministic execution paths. |
| Often simpler than deterministic alternatives. | Requires careful reasoning about probability and expectations. |
| Can resist adversarial inputs better. | Reproducibility requires fixed random seeds in tests. |

---

## Tips & Tricks (Trap Avoidance)
1. **Seed for Testing**: Add deterministic seeds when writing unit tests so failures are reproducible.
2. **Avoid Biased Sampling**: Ensure random index generation is uniform.
3. **Document Guarantees**: Clearly state expected complexity and error probability assumptions.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Randomized Quickselect**
2. **Randomized Quicksort**
3. **Reservoir Sampling**
