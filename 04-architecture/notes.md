- Whenever a client sends a request, it goes into the Event Queue.
Then, it is picked up by the Event Loop.
The Event Loop checks whether the operation is blocking (synchronous) or non-blocking (asynchronous).

- If it is non-blocking, the response is handled immediately or passed to background APIs, and the Event Loop continues.

- If it is blocking, the Event Loop sends the request to the Thread Pool, where worker threads handle the task.
Once the work is finished, the result is sent back to the Event Loop, which then sends the response to the client