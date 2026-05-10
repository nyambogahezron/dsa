/**
 * @file number-of-recent-calls.ts
 * @description 
 * You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.
 * Implement the `RecentCounter` class:
 * - `RecentCounter()` Initializes the counter with zero recent requests.
 * - `int ping(int t)` Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
 * It is guaranteed that every call to ping uses a strictly increasing value of t.
 * 
 * Constraints:
 * - 1 <= t <= 10^9
 * - Each test case will call ping with strictly increasing values of t.
 * - At most 10^4 calls will be made to ping.
 */

export class RecentCounter {
    constructor() {
        // Your implementation goes here
    }

    ping(t: number): number {
        // Your implementation goes here
        return 0;
    }
}
