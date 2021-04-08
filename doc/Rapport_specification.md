 
 
 
 
## A. Debugging log.

The process of writing and executing program code almost always involves searching for and correcting errors.

Globally, all debugging methods are divided into `static` and `dynamic`, depending on whether the program code is executed or not. In the static debugging process the software itself is actually not involved. In dynamic debugging, the program is running and executing.

#### Static debugging of applications
Logging and log analysis. Analysis of a file or service containing the information about the events which occurred in the application during its operation helps find and eliminate errors in the program.

#### Dynamic debugging of applications
Runtime logging. During debugging, you can execute JavaScript commands and  output. You can output all sorts of debugging information - informational messages, warnings, debugging information, trace information, code gauging and profiling - to the console. You can use appropriate methods of the console object for that.

For debugging, it’s critical to log all application errors and warnings. The log messages that serve other functions will also come in handy while you’re debugging, because they can supply context when something goes wrong.

During development, it’s often useful to log debug messages to investigate specific issues. In those scenarios, it’s useful to log:

* The value of a related variable
* If a particular function was called
* The return value for a function call
* API responses
* The sequence of particular events

 Of course, `console.log()` is the most popular option, but it's far from the only one. Such methods as `console.trace`, `console.assert`, will also help in debugging.

#### Output debugging information

* `console.log() `Outputs comma-separated arguments to the console. It is used to output various general-purpose messages.
* `console.info() `Similar to log(), but outputs messages in a different style to emphasize their importance.
* `console.warn()` Outputs a warning message to the console.
* `console.error()` Outputs an error message to the console.

> The console uses a different style for each type of message to be output. These console methods support formatting of the output messages. That means you can use special control sequences (templates) in the text of your output messages that will be replaced by their corresponding values (arguments additionally passed to the function, in the order they are rendered). The following formatting templates are supported by console methods.
   >* `%s` : `console.log("%s word, hello %s", "Hello", "sunshine")`;
   >* `%c` : `console.log("%s green text, %s red text on blue background, %sBig letters, %sCustom text", "color:green;", "color:red; background:blue;", "font-size:20px;", "font:normal; color:normal; background:normal")`;

#### Trace and checks

* `console.trace()` Outputs the call stack from the code point the method called from. The call stack includes file names, line numbers, and the _trace()_ method call count from the same point.  Allows you to output an informative stack-trace with a complete list of functions and their arguments at the time of the call.


* `console.assert()` Checks the expression passed in the expression parameter and, if the expression is false, outputs an error to the console along with the call stack ( console.error() ); otherwise, it outputs nothing. Allows you to enforce the rules in your code and make sure that the results of code execution meet expectations. You can use the console.assert() method to perform code testing.

```javascript
const a = 1, b = "1"; console.assert(a === b, "A does not equal B");
```

#### Profiling and measuring

You can use the browser's console methods to measure code runtime.

* `console.time(label)` Include a counter (milliseconds) with label.
* `console.timeEnd(label)` Stops the counter (milliseconds) with label and publishes the result to the console.

An example of using the console.time() and console.timeEnd() methods in code:

```javascript
var myArray = new Array();
// Enabling the counter labeled Initialize myArray.
console.time("Initialize myArray");
myArray[0] = myArray[1] = 1;
for (i = 2; i<10; i++)
{
myArray[i] = myArray[i-1] + myArray[i-2];
}
// Switching off the counter labeled Initialize myArray.
console.timeEnd("Initialize myArray");
```

In addition to performing metering, you can use the console methods to perform code profiling and
output the profiling stack, which gives detailed information about how much time and for what
operations was spent by the browser.

* `console.profile(label)` Launches the Java Script profiler, then displays the results under label .
* `console.profileEnd(label)` Stops the Java Script profiler.

#### What to log?
Let's take a look at the specifics of what exactly you should log. The following list will help you determine exactly what data you should be logging, as well as more about how you can log it:

* Requests from buyers (GET, POST, etc.)
* Errors
* Failure warnings
* Authorizations (requesting the user to the protected resource)
* Function activations (moves between pages and views, etc.)
* Performance metrics
* Server response time
* Time to page-ready event
* Time to page-rendered event

## Why did the fetch event fail?  
## While we are making the app. Cloudflare doesn't have a debug log.

##  B. Security log. When is something peculiar happen? And what is that peculiar thing, who, where, when, etc.

Logging is considered a necessary part of application infrastructure, even more so in a modern JavaScript application. A typical JavaScript application will involve browser actions, server actions, actions related to foreign API interactions, and the real need for in-depth profiling and analysis of application performance data.

Security holes can be tracked by looking at hacking logs, covering the creation of user accounts and IPs. Security specialists have a chance to use logs to create a breadcrumb print that has a chance to lead to the source of infiltration, identify attack vectors, and identify dark paths and malware that may have been introduced.

The security expertise includes a study:

* Who was involved
* What was compromised
* When it was compromised
* How it was compromised
* Which systems were involved

Vectors of attack (villain's path and sequence of events)

Because the system, which was compromised, can no longer be trusted, it is principled to obtain an instant copy of the system in standalone mode, once the violation is found, before trying to perform any diagnostic operations.

Putting the system into stand-alone mode is like a police investigation capturing the space of an offense. The idea is to save the evidence as much as possible. If the system is still active, the criminal can be active on it, destroying evidence. Including if the offender has long been gone, the impact of investigators have all chances to destroy evidence, for example, the police are invited to cover the fingerprints of the offender's own personal.

Pay attention to the fact that with the support of virtual machines is possible to arrange a snapshot of the working machine. It is possible to arrange a snapshot on its own and isolate the abandoned instance from other network components, in order to entice the villain to return to the scene of the offense. As soon as the isolated system becomes accessible again, you catch the villain red-handed.

Using this technique, investigators have every chance to monitor the behavior of the villain in real time in a non-hazardous sandbox. It is also possible to simulate full machine clusters with fake data.

Similar sandbox clusters are refined at times as a preventative measure before any familiar intrusion. The sole purpose that they work is to lure the villains, so that you know proper that every IP address that accesses the system is considered untrustworthy. Cross-testing these IP addresses in the access logs of your other machines has the ability to detect infiltration vectors, which otherwise have all chances to go unnoticed.

### What to security log 

For most applications, you should log _all requests from your server_, regardless of the result.

For each request, you can log the following:

* Timestamp
* Hostname of the server (diagnose a clustered server)
* Request ID (to link related log messages together)
* Requester IP address
* Request method
* Request URL
* Request headers
* Request protocol (usually HTTP or HTTPS)
* Referrer
* User-Agent HTTP request header
* Response
* Status
* Headers
* Response time
* Request ID

In an error log message, there are three critical pieces of information:

* Timestamp
* Error message
* Stack trace

User Event Logging
In addition to collecting console JavaScript logs, you can log custom events to track any activity that's important to your business, whether it's related to user experience or revenue. For example, you can use customizable browser logs to gain visibility into customer latency, or to track how users interact with different versions of your site.

 #### What not to log:

* Passwords
* Secret tokens
* Credit card numbers
* Information that would hurt user privacy
* Classified information


## C. User analytics log. How can max find out where our users are? Can we call them? What are they looking for? What is the users that give us money doing that the other users are not?

User analytics can be measured using tools like Google Analytics without explicitly building the log calls into the source code. You should also log (at a minimum):

* New visitors
* New signups
* Customer transactions
* Application invites

For transactions:

* Timestamp
* User’s IP address
* User
* A flag indicating whether the user is a new or repeat customer
* Purchased items
* Total transaction amount
* Entry page
* Keyword used to find the entry page, if any
* Marketing campaign, if known
* Referring user, if known

Most of this data will come from the user session and shopping cart.


## D. Automatic unit tests. Ok. We run iur app 1000 times successfully, then we want this data to help us test future versions of our app. But. We want this in a function level, also, because when we update, we change maybe 2 of 12 functions, and so we need to keep unit tests for 10 functions, but not the whole entity of 12.

## E. Machine learning. User a is guessing all of the multiplication questions up to 6 correctly now, but are struggling with table 7, and 9.