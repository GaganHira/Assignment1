# Assignment1
Assignment phase 1 

## GIT for chatter
Git is a version control system which is primarily used as a source code management. Git help one or multiple developer to work on same project with minimum issues. GitHub provide access control, bug tracking, task management and many more features. 
I use GitHub for development of my application “chatter” for this assignment. The approach I took for a development chatter is by making a git repository which I used as a remote repository. 
GitHub help you by tracking you code and keep you and your team by updating the progress. If something went wrong, you can easily revert back to where you were. I follow the very basic workflow of GitHub which is 

-	Make a Repository
-	Initialise repo with your project 
-	Once you add or change the file, use git add . command to add it to GitHub. 
-	Git commit will commit the changes online with a message. Command – git commit -m”your message”
-	Git push origin master will push all the changes online. 

GitHub is very convenient way while developing software, many times I made a mistake and then reverse back to my original code without any issues. GitHub readme file allow other developers to know what the project is about and give you a brief introduction. You can also track you progress by checking insights. 
 
## Data Structure 
For assignment 1, Json has been used as local storage for storing users, chats and groups. 
Angular is used as a front-end and node as a server side. Every time a user’s pass the information it converted to Json by using stringify and store in the data json files located in server. 
A server has 3 files 
-	Chat.json – This will have all the chat messages passed by the different users and will be saved with a time stamp. 
-	User.json – User file will have the details of users saved in that file, which will be retrieved by angular front end. This file is used to check the login information and also to store and add new users in local storage.
-	Group.json – This file has all the information of groups and channels using in application.  

## Angular Architecture 

Angular is used as a front end for this application
### Component
Angular use components as a view which is defined inside a class. The class interacts with view and display HTML and CSS, handle events and manage the data for that component. The components used for this application is below – 
-	Login component – This component will view a login form through its html file which will interact with server. Logincomponent.ts file will have all event handler, which take data from html file and login func() will check if right and pass the results. 
-	Chat-interface – This is another component which show the chat through html and typescript file will enable all the functions like send and receive messages. 
-	App component – This comes as a default component from angular. This component has root html, modules and routing for the application. Routing typescript file have app the modules and routes required from the root file. 
-	User – This component will define the user and their different roles throughout the application.
### Services

Services are the extended class which are designed to use as singleton. An instance is created once at start of the application which can be used later in all other components.
Users, chat and login services are created for use in this application. 
Users service will define the user in constructor and will have common code which will pass data through routes. For example, get user and show user list, these functions can easily be used in other components without duplicating the code again.
Chat service will interact with server using socket. This service has a code which will define which id will receive and send message and then can add or emit message.

### Routes 

All routes for this application are defined and implemented in app.routing.module.ts file. A path will go from angular to server side. 
`{ path: 'login',component: LoginComponent }`
Path will have login which define the url and Login component will define what component need show for that page. 

### Modules 

Different modules are used to implement chatter application 
Forms Module is used enable angular forms throughout the application. 
Ng modules, Router, ngx and observables are used from angular router to enable functionality. 

## Node Architecture 

Node is server side and modules I used are listed below. 

`var express = require("express");
var bodyParser = require('body-parser')
var chatServer = express();
var http = require('http').Server(chatServer);
var io = require('socket.io')(http);
const fs = require('fs');`

- fs module provides an API to interact with file system in server side. This application is build using json files so fs module is very important. 
- Express module is used run server on local host:3000
- Sockets are used to interact and send and receive messages from angular to server. 
- CORS – Another important module used is cors which act as middleware and enable both angular and server to use a common URL.

Files used on server side which are data files and they are in json format. 

## REST API 

Initially, A server is setup with a express module to run as a node server. A body parser is used to encode the data using json files. Fs module is required to get and post data to json files system. Cors will act as a middleware to enable a common URL port to use application. 

Once a server start, an angular will choose the url path and the path will be defined as routes in server side. For example 
`chatServer.post("/api/auth", (req, res) => {
    let users = fs.readFileSync('./user.json', "utf-8");
    users = JSON.parse(users);
    const { username, password } = req.body
    const login = users.filter(user => user.username === username && user.password === password && user.valid === true)
    login.length > 0 ? res.send({ status: 200, response: login }) : res.send({ status: 400, err: "Invalid username or password" })
})`

Example above is a post method comes from an angular and which will use /api/auth as API and pass the function (req, res).  Fs will read the user.json file and pass the data using parse command. Login function will check and compare the data coming from the front side. If validation is true it will pass the data and If it didn’t match it will throw an error. 

Similarly, Different API are define to interact with server and angular. 





