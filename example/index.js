// function stumilateError() {
//   let a = 2 / 0
//   console.log(a)
//   return a
//   // throw new Error("errrrrrr")
// }

// process.on('uncaughtException', (err) => {
//   console.log("this is a error", err)
//   process.exit(1)
// })

// process.on('unhandledRejection', (err, promise) => {
//   console.log("error",err)
//   process.exit(0)
// })

// const stimulateError = () => {
//   return new Promise((succ, rej) => {
//     rej(new Error("unhandle error"))
//   })
// }


// const promise = stimulateError()
// promise.catch((err) => console.log("from catch", err))

// const express = require('express');
// var multer = require('multer');
// var upload = multer();

// const app = express();
// const port = 8000;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(upload.array());
// app.get('/',(req,res)=>{
//   res.send('hello word')
// })
// app.post('/path', (req, res) => {
//   const name = req.body.name;
//   console.log(name);
//   res.send(req.body);
// });
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// stumilateError()






//event listner
// const EventEmitter = require('events'); // Import the EventEmitter class
// const myEmitter = new EventEmitter();   // Create an instance of EventEmitter

// // Define an event listener function
// const exam = (message) => {
//   console.log('Message received:', message);
// };

// // Register the event listener with the emitter
// myEmitter.on('messageReceived', exam);

// // firr (Emit) an event with data
// myEmitter.emit('messageReceived', 'Hello, world!
// const { exec } = require('child_process');
// exec('ls -lh /usr', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

// //example process
// console.log('process id :', process.versions.node)
// console.log('process id :', process.argv)
// diffrnce next tick and setImmidate
// def=Both process.nextTick() and setImmediate() are used in Node.js for scheduling the execution of callback functions, but they have different characteristics in terms of when the callbacks are executed within the event loop
// setImmediate(() => {
//   console.log('This will be executed on the next iteration of the event loop.');
// });
// process.nextTick(() => {
//   console.log('This will be executed before any I/O or timers.');
// });

// //diffrence setTimeout and setInterval
// const intervalId = setInterval(() => {
//   console.log('This will be executed every 2000 milliseconds (2 seconds).');
// }, 2000);

// // To stop the interval after some time
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000); // Stop the interval after 10 seconds

// setTimeout(() => {
//   console.log('This will be executed after 1000 milliseconds (1 second).');
// }, 1000);
// // const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');





// const { fork } = require('child_process');

// console.log('Running main.js');
// console.log('Forking a new subprocess....');

// const child = fork('child.js');
// child.on('close', function (code) {
//   console.log('child process exited with code ' + code);
// });

//promise chaining
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: 'Data fetched successfully' };
//       resolve(data);
//     }, 1000);
//   });
// }

// function processResponse(response) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = response.message.toUpperCase();
//       resolve(processedData);
//     }, 1000);
//   });
// }

// async function main() {
//   try {
//     const response = await fetchData();
//     console.log('Step 1: Data fetched');
//     const result = await processResponse(response);
//     console.log('Step 2: Data processed:', result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();
// fetchData()
//   .then((response) => {
//     console.log('Step 1: Data fetched');
//     return processResponse(response);
//   })
//   .then((result) => {
//     console.log('Step 2: Data processed:', result);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// // {
//   // bestFood’s TDZ starts and ends here
//   console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
//   var bestFood = 'Vegetable Fried Rice'; // bestFood’s TDZ does not exist here
//   console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
//   // bestFood’s TDZ does not exist here
//   // bestFood’s TDZ does not exist here
// }
// var x = 10;
// Here x is 10

// {
//   let x = 2; // Here x is 2
// }
//fo browser run environment
// let x = typeof window === 'object';
// console.log(x);
//for nodejs environment
// let n = typeof process === 'object';
// console.log(n);
// let x = 'ffininnoeoeeee';

// // let y  =
// let y = x.split('');

// let z = new Set(y);
// let a = z.map((d) => d.join(''));
// // let a = Array.from(z).join('');
// console.log(a);

// Print the unique characters
// console.log(uniqueCharsArray); // Output: [ 'f', 'i', 'n', 'o', 'e' ]
// const express = require('express');
// var cache = require('memory-cache');
// const axios = require('axios');
// const app = express();
// const cachekey = 'abcdhjhkkjkllnl';
// const cachetime = 10 * 1000;

// app.get('/user', (req, res) => {
//   const cachedData = cache.get(cachekey);
//   if (cachedData) {
//     console.log('fetching from cache');
//     res.send(cachedData);
//   } else {
//     console.log('fetching from  axios');
//     axios({
//       method: 'GET',
//       url: 'https://swapi.dev/api/people?search=luke',
//     })
//       .then((response) => {
//         let x = response.data.results[0];
//         // {response.data.results[0]}
//         {
//         }
//         const{name,height,mass,hair_color}=x
//         const data = {
//           name,
//           height,
//           mass,
//           hair_color
//         };
//         // cache.put(cachekey, data, cachetime);
//         // res.send(data);
//         return data;
//       })
//       .then((response) => {
//         res.send(response);
//       })
//       .catch((error) => {
//         res.status(500).send('Internal Server Error !!');
//       });
//   }
// });
// Register an event listener for the 'uncaughtException' event
// process.on('uncaughtException', (error) => {
//   console.error('Uncaught Exception:', error);
//   // You can perform additional logging or cleanup here if needed

//   // You might choose to gracefully exit the application after handling the exception
//   process.exit(1);
// });

// // Example intentional uncaught exception to test the handling
// function simulateError() {
//   setTimeout(() => {
//     throw new Error('This is an intentional uncaught exception');
//   }, 1000);
// }

// // Call the function to simulate an error
// simulateError();

// Simulating other application logic
// console.log('Application is running...');

// const port = 4000;
// app.listen(port, () => {
//   console.log('Running Server!!');
// });


// const axios = require('axios');
// // const request1 = axios.get('https://github.com/');
// // const request2 = axios.get('https://in.search.yahoo.com/');
// // const request3 = axios.get('https://moodledev.io/');

// let endpoints = [
//   'https://www.google.com/',
//   'https://in.search.yahoo.com/',
//   // 'https://www.w3schools.com/'
// ];
// axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  // method 1 return array []
  // (data) => console.log(data) 
  // method 2 return object
  // axios.spread((user, repos, followers, following) => {
  //   console.log({ user, repos, followers, following });
  // })
  // method 3 // return data from object
  // axios.spread(({data: user}, {data:repos}, {data:followers}, {data:following}) => {
  //   console.log({ user, repos, followers, following });
  // })
// );
// Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
//   // (data) => console.log(data),
//   // axios.spread((...allData) => {
//   //   console.log({ allData });
//   // })
//   ([{data: user, data:repos, data:followers}]) => {
//     console.log({ user, repos, followers });
//   }
// ).catch((error) => {
//   if (error.response) {
//       console.error('Error Status Code:', error.response.status);
//       console.error('Error Data:', error.response.data);
//     } else {
//       console.error('Error:', error.message);
//     }
// });
// const request = require('request');

// const urls = ['https://www.google.com/', 'https://www.yahoo.com/'];

// // Use a loop to send multiple requests
// urls.forEach(url => {
//   request(url, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//     // response.send(response.data)
//       console.log(`Request to ${url} succeeded`);
//       console.log(body.toString());
//       // Process the response body here
//     } else {
//       console.error(`Request to ${url} failed with error: ${error}`);
//     }
//   });
// });
// const axios = require('axios');

// const urls = ['https://www.google.com/', 'https://www.yahoo.com/'];

// async function sendRequests() {
//   for (const url of urls) {
//     try {
//       const response = await axios.get(url);
//       console.log(`Request to ${url} succeeded`);
//       console.log(response.data)
//       // Process the response data here using response.data
//     } catch (error) {
//       console.error(`Request to ${url} failed with error: ${error.message}`);
//     }
//   }
// }

// sendRequests();
// console.log("Welcome to Programiz!");
// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout callback');
// },0)

// setImmediate(() => {
//   console.log('setImmediate callback');
// },0);

// process.nextTick(() => {
//   console.log('process.nextTick callback');
// });

// console.log('End');


//for super keyword
// In JavaScript, the super keyword is used to call functions or methods defined in a parent class (also known as a superclass) within the context of a subclass. It is often used in object-oriented programming when working with classes and inheritance.
// class Animal{
//   constructor(name){
//       this.name = name;
//   }
//   speak() {
//   console.log(`${this.name} makes a sound`);
// }
// }
// class Dog extends Animal{
//   constructor(name,bread){
//       super(name);
//       this.bread = bread;
//   }
//   speak() {
//   super.speak(); // Calling the speak method of the parent class
//   console.log(`${this.name} barks`);
// }
// }
// const myDog = new Dog("Buddy", "Golden Retriever");
// myDog.speak();

//for private and protected
// class MyClass {
//   #privateField = 'I am private';

//   #privateMethod() {
//     console.log('This is a private method');
//   }

//   getPrivateField() {
//     return this.#privateField;
//   }

//   callPrivateMethod() {
//     this.#privateMethod();
//   }
// }

// const obj = new MyClass();

// // console.log(obj.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
// console.log(obj.getPrivateField()); // Accessing private field through a public method
// obj.callPrivateMethod(); // Calling private method through a public method

// Task without use db signup and signin page 
const express = require("express")
const app = express()
const port = 8000
const fs = require("fs")

app.use(express.json())

app.post("/api/user/signup", (req, res) => {
  let {email, password} = req.body;
  let data = fs.readFileSync("./data.json");
  let jsonData = JSON.parse(data);
  if(email && password){
    jsonData.push({email, password})
    fs.writeFileSync("./data.json", JSON.stringify(jsonData))
    res.status(201).json({
      message: "User register successfully"
    })
  }else{
    res.status(400).json({
      message: "Email / Password is not found...!!"
    })
  }
})

app.post("/api/user/signin", (req, res) => {
  let {email, password} = req.body
  let data = fs.readFileSync("./data.json")
  let jsonData = JSON.parse(data)
  if(email && password){
    let userDetails = jsonData.find((user) => user.email === email)
    if(userDetails){
      if(userDetails.password === password){
        res.status(200).json({
          message: "User logged in successfully...!!"
        })
      }else{
        res.status(400).json({
          message: "Email / Password is not valid...!!"
        })
      }
    }else{
      res.status(404).json({
        message: "User not found..!!"
      })
    }
  }
})

app.get("/api/user/getUsers", (req, res) => {
  let data = fs.readFileSync("./data.json")
  let jsonData = JSON.parse(data)
  if(!jsonData.length){
    res.status(404).json({
      message: "Users not found..!!"
    })
  }
  const userList = jsonData.filter((user) => user.type !== "Admin").map((data) => data.email)
  res.status(200).json({
    data: userList
  })
})
app.patch("/api/user/update", (req, res) => {
  let { email, password } = req.body;
  let data = fs.readFileSync("./data.json");
  let jsonData = JSON.parse(data);

  // Check if there are users in the data.json file
  if (!jsonData.length) {
    return res.status(404).json({
      message: "Users not found..!!"
    });
  }

  // Update user details based on the request body
  for (let i = 0; i < jsonData.length; i++) {
    let userDetails = jsonData[i];
    if (userDetails.email === email) {
      // Update user password if the email matches
      if (password) {
        jsonData[i] = {
          ...userDetails,
          password: password
        };
      }
    }
  }

  // Write the updated data back to data.json
  fs.writeFileSync("./data.json", JSON.stringify(jsonData));

  res.status(200).json({
    message: "User/s updated successfully...!!"
  });
});

// app.patch("/api/user/update", (req, res) => {
//   let data = fs.readFileSync("./data.json")
//   let jsonData = JSON.parse(data)
//   if(!jsonData.length){
//     res.status(404).json({
//       message: "Users not found..!!"
//     })
//   }
//   for(let i = 0; i < jsonData.length; i++){
//     let userDetails = jsonData[i]
//     if(!userDetails.type){
//       jsonData[i] = {
//         ...jsonData[i],
//         type : "Normal"
//       }
//     }
//   }
//   fs.writeFileSync("./data.json", JSON.stringify(jsonData))
//   res.status(200).json({
//     message: "User/s updated successfully...!!"
//   })
// })

app.listen(port, (err) => {
  if(err) console.log("Error", err)
  console.log(`Server is running on ${port}`);
})
