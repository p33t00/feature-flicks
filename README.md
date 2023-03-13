# feature-flicks

## Project Structure:
Below I have described only files and directories which I have created and when it's not obvious what these contain.

- public/ 			(public assets)
- src/				(app source code)
--- components/		(app components and pages)
--- lib/			(library functions and helpers)
--- services/		(services like MoviesAPI)
- env.js 			(Constants and env vars)


## Component structure:
The app is split into 2 pages (Main & Booking). Main page displays the screenings and Booking page lets book the seets for a specific screening.
Pages are separate components there fore reside in src/components/pages/ 


### Navbar (component)
Site navigation bar. It contains category filter and sorting fields. These fields are conditionaly rendered
and this happens only when user is on the main page. Both these fields are separate comonents responsible only for it's own simple functionality (CategorySelect & TimeSortSelect)


### Main (page)
Main page loads alot of data initially and stores it in state variables. At some point it would be better to load all data during response to initial client request and store it in some global state. On the other hand, if any changes or updates occure to screenings (schedule change, a new screening added) than client will not have this data if it will be kept throught the whole user session on the website. And if we could have pagination, than screenings load from server would not be such a time consuming operation. 

Main page contains a Stack of Screening components, which are loaded when data from API is ready.
Sorting and filtering takes place if current state of sortOrd or categoryId has changed.
Sorting is done by epoch unix timestamp.


### Screening (component)
Mostly build from React Bootstrap components. And contains links to Booking page.
For this component to work I needed to have not only screenings but movies data as well.


### Booking (page)
This page loads all the screening seats and ticket information from API.
It also contains many state variables to detect user interraction actions.
This page is used to book seats and choose how many seniors and children will be among guests.
On this page users can book the seats or come back to main page by clicking Cancel button.


### Auditorium (component)
Is responsible for UI to view booked and vacant seats in specific auditorium.
The auditorium UI is generated from the seats which are pulled from API based on auditorium ID provided to Booking page by clicking the link on a specific Screening.
Since laoding all necessary data from API may take time, there is a spinner to amuse clients during the data load. This component's main content is Row component wihch renders Seat components.
There is only one onClick listener attached to whole auditorium and incoming events are filtered to react only to seat nodes. 


### RangeSenior & RangeChilcren (components)
Are sliders to set number of children and senior guests. If number of selected seats less than number of selected seniors or children, than a notification message appears regarding this matter when user tries to book the ticket.


### Messenger (component)
This component is a simple notification message which is shown to help user book seats correctly.


### Receipt (component)
Is just a simple modal window resembling movie ticket with screening, seats and price information.
After user confirms the ticket booking, he is redirected to a main page. Or if there is something wrong 
thare is an opportunity to hit that Cancle button and re-select the seats and guests. 