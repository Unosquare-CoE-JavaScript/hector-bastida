
## Demonstration of how concurrency works on Node.
Just because the promises are being created together and waited upon together
doesn’t mean that the code resolving them runs at the same time,
it just means their time frames are overlapping.
There’s still only one instruction pointer, and only one instruction is being executed at a time.

## Why is Node concurrent?
At a high level, Node.js falls into the category of concurrent computation. This is a direct result of the single-threaded event loop being the backbone of a Node.js application. The event-loop repeatedly takes an event and then sequentially executes all listeners interested in that event. The event loop never runs two pieces of JavaScript in parallel.

## Useful links:
[Promises concurrent or parallel](https://anotherdev.xyz/promise-all-runs-in-parallel/)
[Parallel vs concurrent in Node.js](https://bytearcher.com/articles/parallel-vs-concurrent/)
