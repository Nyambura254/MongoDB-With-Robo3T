# MongoDB-With-Robo3T
learning mongoDB with robo3t basics and new tricks

    TABLE OF CONTENT 
    1.overview
    2.requirements
    2.installation
    
  # Overview
    In this module for mongodb and robo3t  basics to answer questions "how to it?","why this?"etc
    will be introducing new modules everytime we make changes.
# Introduction
definitions of installed programme---->

MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
https://www.mongodb.com

The Robo 3T (formerly Robomongo) tool has been acquired by 3T Software Labs, the creators of the MongoDB client Studio 3T (formerly MongoChef).
https://robomongo.org/

* I will be introducing new modules as i install them


# Installation
1.YOU MUST FIRST INSTALL NODE where node come with npm "node package manager-to install our packages"...i prefer "yarn" it is faster than npm
Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
https://nodejs.org/en/download/
### LINUX users
...you can install using Terminal
* Step 1: Open your terminal or press Ctrl + Alt + T
Step 2: To install node.js use the following command
sudo apt install nodejs/ yarn add nodejs
Step 3: Once installed, verify it by checking the installed version using the following command:
node -v or node –version
* Note: It is recommended to install Node Package Manager(NPM) with Node.js. NPM is an open source library of Node.js packages.
To install NPM, use the following commands:
...sudo apt install npm
...npm -v or npm –version


### For windows OS
https://phoenixnap.com/kb/install-node-js-npm-on-windows

Installing MongoDB
Go to https://www.mongodb.com/ and choose Product – Software – MongoDB Server and download the file according to your operating system.
Move the file to your user directory, extract the downloaded file, rename the folder to ‘mongo’, and create another folder named ‘mongo-data’.
Open your terminal command, go to the mongo/bin folder and type the following command to activate : ./mongod –dbpath ~/mongo-data/
Open a new tab to try to put some commands. Type ./mongo 
Try to input a command, for example: > db.Todos.insert({text:’Create Node Tutorial’})
Fetch the data by typing this command : > db.Todos.find(). We will get an object that we have just created.
Close the connection by typing Ctrl + C.
Installing Robo 3T (Robomongo)
Download the installer from https://robomongo.org/
Download Robo 3T and extract the compressed file.
Connect to your local database :
