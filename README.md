
## Project Description

Ticket Viewer
### Customer service tool that allows the creation and management of support tickets.

[Github Repository](https://github.com/SeepG/ticket-viewer)

### Site Map
<!-- ![](./docs/sitemap.png) --> To do

### Functionality
- Ticket Viewer allows user to browse through tickets.
- Ticket Viewer allows user to check individual tickets 

### User stories for App.

User stories have been planned as per role, action and business goal/reasoning).

As a User(role),
I want to connect to the Zendesk API (action).
So that I can view the tickets for my account (business-goal/reasoning).

As a User,
I want the option to page through tickets when more than 25 are returned.
So that I am able to see them easily and work through them.

As a User, 
I want to browse all the tickets (action),
So that I can know how many tickets are requiring my attention.

As a User,
I want to see individual ticket.
So that I can start work on closing the ticket.

### Screenshots /Gif

- Postman - Receiving information from API.
- Landing page - List of All tickets & Individual ticket

![](./docs/landing-page1.png)

### Technology Stack

Ticket-Viewer is built using a simple REST API with NodeJS and Express. PostMan app has been utilized for querying the same server.HTML and CSS for the front-end markup. Javascript has also been used for asynchronous requests. 

### Software used in Application.

* Javascript - version
* Node - version
* Express - version
* NPM as a packet manager gave us access to various libraries and programs and easily manage the installation process.
* Visual Studio Code helped in writing source-code and supported debugging.

## Installation

1. Navigate to a location where you want to install the source and run `git clone https://github.com/SeepG/ticket-viewer.git`

# Run `npm install`
Runs the app in the development mode.
Open http://localhost:8000 to view it in the browser.

# Run `npm start` to run the server in development mode.

#### Dependencies?
    "@babel/cli": "^7.4.4",
    "@babel/plugin-transform-regenerator": "^7.4.5",
    "@babel/polyfill": "^7.4.4",
    "axios": "^0.19.0",
    "axios-mock-adapter": "^1.16.0",
    "body-parser": "^1.19.0",
    "compression": "^1.5.2",
    "cors": "^2.7.1",
    "dotenv": "^8.0.0",
    "express": "^4.13.3",
    "express-generator": "^4.16.1",
    "morgan": "^1.8.0",
    "resource-router-middleware": "^0.6.0"

## Design process
This application has been designed for "Desktop-first" experience, as customer service will tend to resolve queries over desktop in a real life scenario.

### Wireframe sketches

### Workflow Timeline 

#### Day1
- Planning
- Trello
- Wireframes
- Research

#### Day2
- Populated tickets through Postman and got sample 101 tickets to play around.  
- Researched on express server.
- Add dependencies and configuration.

#### Day3
- Explored express server boilerplate.
- Worked on receiving responses from API.
- Created Git repository to start.

#### Day 4
- Worked on back-end application
- Getting tickets from API.
- Separated concerns and put user stories under different classes.

#### Day5
- Researched on testing frameworks.
- Worked on trial UI.
- Installed Mocha, Chai and Nock.
- Set unit test requirements.

#### Day6
- Making app MVP ready
- Make sure code is well commented
- Pending requirements
- Documentation 
- Submission

#### Trello screenshots
- Trello
![](./docs/trello.png)

Trello board link
<!-- [Github Repository](https://github.com/SeepG/ticket-viewer) -->

### Approach justification and advantages

### Error handling

- Displays a friendly error message if the API is unavailable.
- Displays a error message or the response is invalid.
- Tells the user something is wrong if there is a program error.

### Architecture of App.

Back End
- Node.js & Express.js
- Axios HTTP client for routing requests

Front End
- Javascript
- HTML 
- Bootstrap

### Version control process ?
Git commits after every feature and test run.

### Testing process
- Tried Mocha and Chai earlier. Didn't get them to work so moved instead to Jest unit testing.

# To run tests: npm test
Launches the test runner in the interactive watch mode.

- Upgraded Babel 6 to 7. Added Jest dependencies. Wrote Happy Path - Test case 1. Checked test running on CL. Ran server and checked the data recieved in Postman.
- Added Jest dependencies in package.json. Upgraded Babel 6 to 7 
- Wrote test case scenario and changed requirements in index for running test.

Happy Path tests
Test case 1: Show all tickets from the User account.
Displaying all tickets with 200 status code.

Test case 2: Show individual ticket.
Displaying all tickets with 200 status code.

Not so happy Path tests?

### Protecting information and data
I have used Dotenv module to protect api sensitive information. 
Configuration information was saved in a .env file and Dotenv loaded the environment variables into process.env.
.env file has been added to git ignore for extra layer of security.