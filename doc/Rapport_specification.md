# Why and how logging
 
## 1. What is debugging log.

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

## 2 How to log. Output debugging information.

* `console.log()` : outputs comma-separated arguments to the console. It is used to output various general-purpose messages.
* `console.info()` : similar to `log()`, but outputs messages in different style to emphasize their importance.
* `console.warn()` : outputs a warning message to the console.
* `console.error()` : outputs an error message to the console.

> The console uses a different style for each type of message to be output. These console methods support formatting of the output messages. That means you can use special control sequences (templates) in the text of your output messages that will be replaced by their corresponding values (arguments additionally passed to the function, in the order they are rendered). The following formatting templates are supported by console methods.
   >* `%s` : `console.log("%s world, hello %s", "Hello", "sunshine")`;  // Hello world, hello sunshine
   >* `%c` : `console.log("%s green text, %s red text on blue background, %sBig letters, %sCustom text", "color:green;", "color:red; background:blue;", "font-size:20px;", "font:normal; color:normal; background:normal")`; //try it yourself

#### Trace and checks

* `console.trace()` : outputs the call stack from the code point the method called from. The call stack includes file names, line numbers, and the _trace()_ method call count from the same point.  Allows you to output an informative stack-trace with a complete list of functions and their arguments at the time of the call.

* `console.assert()` : checks the expression passed in the expression parameter and, if the expression is false, outputs an error to the console along with the call stack (`console.error()`); otherwise, it outputs nothing. Allows to enforce the rules in code and make sure the results of code execution meet expectations. It is convenient to use for code testing.

```javascript
const a = 1, b = "1"; console.assert(a === b, "A does not equal B");
```

#### Profiling and measuring

You can use the browser's console methods to measure code runtime.

* `console.time(label)` Include a counter (milliseconds) with label.
* `console.timeEnd(label)` Stops the counter (milliseconds) with label and publishes the result to the console.

```javascript
  const myArray = new Array();
  // Enabling the counter labeled Initialize myArray.
  console.time("Initialize myArray");
  myArray[0] = myArray[1] = 1;
  for (i = 2; i < 10; i++) {
    myArray[i] = myArray[i - 1] + myArray[i - 2];
  }
  // Switching off the counter labeled Initialize myArray.
  console.timeEnd("Initialize myArray");
```

In addition to performing measuring, you can use the console methods to _perform code profiling_ and output the profiling stack, which _gives detailed information about how much time and for what operations was spent by the browser._

* `console.profile(label)` : launches the Java Script profiler, then displays the results under label.
* `console.profileEnd(label)` : stops the Java Script profiler.


 


## 3 Why did the fetch event fail?  
Getting data with Fetch is very easy. You just need to provide Fetch with the resource you are trying to fetch.

There are many reasons why requests may fail, including but not limited to the following:

* You tried to fetch a resource that does not exist.
* You do not have permissions to fetch the resource.
* You entered the wrong arguments.
* The server is giving you an error.
* Server timeout expired.
* Server crashed.
* API has changed.


Not everything will be fine if your request fails. Imagine a scenario where you tried to buy something online. An error occurred, but the site developers couldn't handle it. As a result, nothing moves after you click to buy. The page just hangs there. You have no idea what happened. Did your card pass?

The good is news is fetch provides a simple `ok` flag that indicates whether an HTTP response's status code is in the successful range or not.

```javascript
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

fetch("https://mywebsite.com")
    .then(handleErrors)
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.error(error);
    });
```

##  4. What to log? Security log. 

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

Logging is considered a necessary part of application infrastructure, even more so in a modern JavaScript application. A typical JavaScript application will involve browser actions, server actions, actions related to foreign API interactions, and the real need for in-depth profiling and analysis of application performance data. 

Security holes can be tracked by looking at hacking logs, covering the creation of user accounts and IPs. Security specialists have a chance to use logs to create a breadcrumb print that has a chance to lead to the source of infiltration, identify attack vectors, and identify dark paths and malware that may have been introduced.

The security expertise includes a study:

* _Who_ was involved.
* _What_ was compromised.
* _When_ it was compromised.
* _How_ it was compromised.
* _Which_ systems were involved.
* Attack vectors (intruder path and sequence of events).


Because the system, which was compromised, can no longer be trusted, it is principled to obtain an instant copy of the system in standalone mode, once the violation is found, before trying to perform any diagnostic operations.

Putting the system into stand-alone mode is like a police investigation capturing the space of an offense. The idea is to save the evidence as much as possible. If the system is still active, the criminal can be active on it, destroying evidence. Including if the offender has long been gone, the impact of investigators have all chances to destroy evidence, for example, the police are invited to cover the fingerprints of the offender's own personal.

Pay attention to the fact that with the support of virtual machines is possible to arrange a snapshot of the working machine. It is possible to arrange a snapshot on its own and isolate the abandoned instance from other network components, in order to entice the villain to return to the scene of the offense. As soon as the isolated system becomes accessible again, you catch the villain red-handed.

Using this technique, investigators have every chance to monitor the behavior of the villain in real time in a non-hazardous sandbox. It is also possible to simulate full machine clusters with fake data.

Similar sandbox clusters are refined at times as a preventative measure before any familiar intrusion. The sole purpose that they work is to lure the villains, so that you know proper that every IP address that accesses the system is considered untrustworthy. Cross-testing these IP addresses in the access logs of your other machines has the ability to detect infiltration vectors, which otherwise have all chances to go unnoticed.

#### What to security log 

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

 #### What _not_ to log:

* Passwords
* Secret tokens
* Credit card numbers
* Information that would hurt user privacy
* Classified information

## 5. User analytics log.

For business intelligence, you need to record anything that can move your business forward. Analyzing aggregated user behavior data can be useful for managing large-scale plans, such as campaigns targeting large geographic areas. Individual user behavior data can certainly help you understand their needs, form personalized offers, or solve problems. For example, you can learn the behavior of a user with an unusually high average offer price, or recognize the reason why there was a problem placing a particular order. 

Make sure you record enough data to calculate them all:

* Viral Factor.
   > The number of invitations sent by existing customers before they become inactive.
* Churn rate.
    > Percentage of users who stop using the product from one month to the next.
* Monthly recurring revenue.
    > The amount of revenue earned per customer per month.
* The cost of attracting a customer
   > To calculate this value, it's important to link conversions to campaign costs if possible. Make sure that marketing campaign identifiers are recorded along with your transactions.
* Customer Lifetime Value.
 > How much does each customer spend on average over the course of their activity?
 
 User analytics can be measured using tools like Google Analytics without explicitly building the log calls into the source code. You should also log (at least):

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


## 6. Automatic unit tests.

So, the first logging provides us with an actual written record of what happened after we performed the test. So, logging will allow us to do this because it will keep a record of all the steps that we performed while running our functional tests.

Logging, if done correctly, can really make it easier to debug code. A lot of test automation engineers practice that when a test fails, they re-run the test, which is actually wrong because you can actually hide the real failure, something important that needs to be understood and fixed. When we have good logging, we can actually use the log to retrace our steps and figure out what went wrong in our test automation instead of just repeating the whole test.

If your log looks good a lot of times, you can reuse that information to just take it and put it in something like a bug report. Okay, you can do this step, copy and paste, take this step, copy and paste, and so on and so forth.

Also, logging can speed up debugging because we have logs. We might just be able to look at the actual log file and understand the steps that happened in the log and what caused the test to fail, as opposed to actually running the test again, and you know its failing, which obviously can sometimes take a few minutes, depending on your test, etc., and you might have to add some breakpoints there.

## 7. Machine learning. 

Machine Learning is a set of the technique used for the processing of large data by developing algorithms and a set of rules to deliver the required results to the user. It is the method used for developing automated machines by the execution of algorithms and set of defined rules.

One of the major benefits of machine learning is the ability to independently recognize and analyze patterns that enable repetitive tasks across industries and offload them for autonomous execution using software. Our field of log analysis has improved dramatically in recent years thanks to machine learning. Automatic pattern recognition saves developers an enormous amount of time, allowing them to focus their efforts on work that really requires human intelligence.

Today, logs are generated from an incredibly wide range of devices, applications, and servers, resulting in thousands of permutations of syntax and a huge amount of data that people can't organize manually. Automated aggregation of these logs is the first step toward simplifying log management and analysis.

Machine learning organizes an array of log data into related, correlated categories. Logs can be grouped by user actions, log origin, system trends, time periods, or any number of other common characteristics. Newly created logs are then automatically placed into the existing groups to which they correspond.

This automation of log monitoring greatly reduces the time it takes to classify logs manually. Nevertheless, human guidance is still needed to set up, adapt and customize the aggregation categories according to the different needs and concerns of each company.

## Reference

* [Handling Failed HTTP Responses With fetch()](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)