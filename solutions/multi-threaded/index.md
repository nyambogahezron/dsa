# Multi-threaded

The Multi-threaded technique decomposes work into independent tasks that can run concurrently across multiple execution threads. It is useful for CPU-bound workloads, parallel divide-and-conquer, and throughput-focused pipelines.

---

## When to Use & Key Identification Signals
1. The workload can be split into independent chunks with minimal shared state.
2. CPU-bound tasks are bottlenecked by single-thread execution.
3. Throughput matters more than strict sequential ordering.

---

## How to Consider & Analyze It
Identify what can run safely in parallel, what data must be synchronized, and what overhead thread coordination introduces. Parallelization helps only when task granularity is large enough to offset scheduling and communication costs.

---

## How to Plan & Solve (Step-by-Step)
1. **Partition Work**: Break input into independent units.
2. **Assign Workers**: Execute units in parallel worker threads.
3. **Coordinate Safely**: Use message passing, queues, or controlled locking.
4. **Aggregate Results**: Merge outputs deterministically.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Improves utilization of multi-core CPUs. | Introduces synchronization complexity and race conditions. |
| Can reduce wall-clock time for large workloads. | Debugging concurrent bugs is significantly harder. |
| Supports scalable producer-consumer pipelines. | Thread setup and communication overhead can dominate small tasks. |

---

## Tips & Tricks (Trap Avoidance)
1. **Prefer Message Passing**: Immutable messages are safer than shared mutable state.
2. **Bound Queues**: Prevent memory blowups in producer-consumer systems.
3. **Measure Speedup**: Validate actual gains; not all tasks benefit from threads.

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Parallel Merge Sort**
2. **Worker Pool Task Queue**
3. **Producer Consumer**
