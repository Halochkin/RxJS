# How do rxjs handle ifElse?

Most of the cases using  `if/else`can be satisfied by using RxJS operators like `filter()`, `map()` and others. In other words, most of the complex tasks for which you need to implement loops and branches are just instances of a certain combination of these operators.
 Most uses of `if/else` statements can be supplanted by a combination of `map()` and `filter()`.
 
 In cases where you absolutely need to apply specific logic, you can insert operators upstream of where the merge occurs in order to create compatible types ahead of time. Instead of forcing observers to use conditional logic to discern between different types of events, you should make the stream data conformant before the merge to make your subscribers happier by avoiding any checks.
 
 ### If/else statement rxJS example
 In the normal way we write a condition the _imperative_ way.
```javascript
if(condition){
//do this
}else{
//do that
}
```

Speaking of the _declarative_ method, there are several ways to execute conditional statements in RxJS.
 
To implement if/else statement in RxJS we can use:
 1) if-else within Map,
 2) `iif()`,
 3. `filter()`
 4) `filter()` & `map()` with condition
   
#### 1. if-else within Map

Here we use the regular if else statement to render only even items.

 ```javascript
import {from} from "rxjs";
import {map, filter} from "rxjs/operators";

const test = from([3, 5, 8, 9, 24])

test.pipe(
  map(x => {
    if (x % 2 === 0) {
      return x;
    } else {
      return false;
    }
  }),
  filter(x => x != false)
)
  .subscribe(val => console.log("even number :" + val))

/* 
even number : 8
even number : 24
*/
```
 
#### 2. iif()
 
`iif()` is usually used as a conditional operator, it is more powerful and flexible. 

> iff compares the first parameter, if the condition satisfies, it just returns the next parameter, if the third parameter also exists, it sends that if the condition fails. You can just give it two parameters like I did. To just return both true and return with a false flag. 
 
```javascript
import ...

const test = from([3, 5, 8, 9, 24])

test.pipe(
  mergeMap(x => iif(() => (x % 2 === 0), of(x)))
)
  .subscribe(val => console.log("even number :" + val))

/* 
even number : 8
even number : 24
*/
```
 
#### 3. Using just `filter()` operator

When using filter it outputs only data which passes its condition rest all are suppressed hence making it simple to implement.

```javascript
const test = from([3, 5, 8, 9, 24])

test.pipe(
  filter(x => x % 2 === 0)
)
  .subscribe(val => console.log("even number :" + val)) 

/* 
even number : 8
even number : 24
*/
```

#### 4. Using `filter()`, `map()` operators

A filter is the most used operator to filter certain data. But it simply filters out data that satisfy the condition. Resting data is not returned. The filter is easy to use and is most often used to solve simple filtering cases.

```javascript
let value = 0;

from([3, 5, 8, 9, 24])
  .pipe(
  map(x => value = x), // Assign the current variable to value
  map(x => x%2 === 0),  // check condition returns true or false
  filter(x => x == true),  // we filter data which allows the data further only if true
  map(x => value) // Output the value stored in value
  )
  .subscribe(val => console.log(val));

/* 
even number : 8
even number : 24
*/
```

## How deep into async is rxjs (in my mind rxjs was about handling async)? 

 The runtime of an asynchronous application depends on factors outside its control such as network, filesystem, server speed, and others; all of these become bottlenecks to code that would otherwise execute instantly on a CPU. An _asynchronous_ event has two main challenges: 
  
  * It’s ambiguous in that it _may or may not_ happen at any time in the future. 
  * It’s conditional, meaning that it’s _dependent on the correct execution of a previous task,_ such as loading data from a file or database. 
  
  The reason RxJS is a game changer is that it allows you to treat asynchronous tasks as if their execution order were synchronous. In simpler terms, it’s designed to serialize operations so that one piece of code executes only after another piece of code has completed. This is possible through the orchestration layer of observables so that you can handle time _implicitly_ or _explicitly_.
  
  ### Implicit timing.
  
   Consider the example of a relay race. In a relay, participants run as fast as possible on a course. Each time a runner finishes a given distance, they pass the baton to the next runner. The winner of the race is always the team that collectively crosses the finish line first. JavaScript functions that use callbacks operate on the same philosophy. That's why all client-side _AJAX_ APIs, and all streaming I/O APIs in Node.js, to name a few, declare a baton of callback parameters. Timing factors in many types of JavaScript problems, whether it's getting data from a server or database or processing user input. 
   
  In both cases, nested callbacks can be used to pass the baton and keep them synchronous. By treating both scenarios as threads, observers are internally concerned about passing you the baton through the operator's internal subscription mechanism. Your job is to wait and react accordingly. 
  
  Now consider another form of timing in JavaScript, **explicit timing**.
  
  ### Explicit timing
  
Unlike implicit timing, explicit timing has the following desirable characteristics: 

* `Specific` - happen at a specific time. 
* `Explicit` - happen at a time you clearly define and control. 
* `Unconditional` - always happen unless an error occurs or the flow is cancelled. 

Think of any time you've had to record an event that occurred a few seconds after the user performed an action, or perhaps postponed an animation for a specified time.
The use cases for these explicitly synchronized operations tend to revolve around two general categories: user-centric and resource-centric. 


Examples of targeting the user timings are animations, dialogs and messages about validation. But some animations are unnecessary, they are still considered a necessary part of the recruitment of the user to what he has to work further, and the creation of a connection with the user interface, so that he was always responsive. By carefully defining how components move and respond to the interaction with the user, you can delicately guide the user through what can otherwise be difficult. In the resource-oriented case, you can apply time to reduce requests to that resource. Network I/O operations, the sharp user input and resource-intensive calculations using the CPU are scenarios where reducing the number of methods calls has the opportunity to significantly improve performance. In these cases, you can limit the number of calls or their impact by specifying timeout. 

Another way to handle resources is to buffer or cache a particular subset of items so that they can be executed at once. One example is when many database operations need to be applied, and it is preferable to perform a single operation on a single array (we will show at the end of this chapter how buffering helps in this respect).

> Explicit timing is similar to a train or airline schedule. Tasks such as transporting passengers from point A to point B are not done as soon as possible. Trains and planes leave at scheduled times (for the most part, of course, but that's a separate issue). You know that a plane doesn't leave just because you're on it (or you signed up for it). It only departs during or after the time of departure. 

Explicit timing events are a useful property in computing, because it means that you can exercise some control over when a piece of code is executed instead of relying on the implied timing of operations in the _sequence_. The latter is unreliable for any type of precise timing because it relates to the speed and availability of processors, memory, and network latency. In practice, this means that the behavior of the application on the desktop will be very different from that of the smartphone, so explicitly defined behavior is sometimes necessary. You can use explicit timing to sequentially invoke timed tasks, such as hiding and showing messages to the user after a specified number of seconds, displaying a notification dialog that directs the user to the next step, implementing a countdown clock indicating that an action must be completed by a certain time, and others. 

 
 ## Reference
 
 * [Basic Conditional Statements Handling – RxJS](https://jslearn.in/basic-conditional-statements-handling-rxjs/) 
 
 