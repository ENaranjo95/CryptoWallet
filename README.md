# My Awesome Project
The objective of this project was a proof of concept of users login into their wallet and purchsing coins and storing it in their wallet, all simuntenously.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node-JS, MongoDB, Express, Passport

 This project includes a server.js to run the application, calling on our different APIs when as the user navigates to different pages. Once the user setups up a profile and logins in, he is navigated to the Crypto Wallet Exchange. He is identified by his email and id located at the top, left side of the page. Also at the top is two links to logout and unlink his profile from the wallet, located at the top right side of the page. The body of the page includes a form to submit their purchase of cryptocurrency, and on the right a section to display their transactions. It starts with the user entering an amount, selecting which foreign currency he/she is using and which coin they would like to purchase. Once the user clicks on the button, this will activate our main.js.

The main.js includes two APIs, the first API that activates when the user clicks on the button, or our event listener. The value from our input, selection of foreign currency and selection of coin is used to make this application work. The first API takes in the parameter of the foreign currency to find the buy price of bitcoin, and the selling price of bitcoin to usd. These arguments are passed as parameters to our second function and uses these parameters to calculate our bitcoin value, then divide our bitcoin value back to USD, then passes the argument USD into our third function that activates our second API. This second API is activated using our USD parameter and the value of our coin selection to calculate our coin name, symbol and total coin purchase. These three arguments (name, symbol, and total) is pass to our fourth function as parameters that calls on fetch method to store these values into our database, then refresh the window page and loads the values stored in our database into our user's wallet.

The QR code leads users to my linkedIn and portfolio.
## Optimizations

This application is just a proof of concept but I will continue to build on this application. For instance, once the user purchases their coins and decides to sell them their money will store in a bank account at the top with user id and email. Secondly, use the QR code to link to their wallet so other users can send coins to their wallet. Another feature that accumulates our coins, and finally allow users to trade their own coins into our cryptocurrency.

## Lessons Learned:

More to come when improvements are made.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`
