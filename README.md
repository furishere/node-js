# Backend Notes
- Node js is runtime environment for javascript and this is where we run our script
- `node -v` and `npm -v`- node package manager
- `npm init` to intialze and make package.json file, `npm run start`to run specific script file
- Js only execute in browser
- with require method we can import

### Architecture
- Whenever a client sends a request, it goes into the Event Queue.
Then, it is picked up by the Event Loop.
The Event Loop checks whether the operation is blocking (synchronous) or non-blocking (asynchronous).

- If it is non-blocking, the response is handled immediately or passed to background APIs, and the Event Loop continues.

- If it is blocking, the Event Loop sends the request to the Thread Pool, where worker threads handle the task.
Once the work is finished, the result is sent back to the Event Loop, which then sends the response to the client

- always write code in non-blocking

### Http Methods
- Get - when you want to get some data from the server
- post - when you want to send and mutate some data in server / sending a sever (like sending user information to server through form, username and password and it make post request)
- put - put something in server like image
- patch - when you want to change something
- delete - when you want to delete something 

### Versioning
``` Javascript
"version": "1.0.0"
```
