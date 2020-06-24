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

2.Download MongoDB community server from official site.Navigate through software...Choose which type of deployment is best for you'
in my case,navigate in below link and download the linux version of your choice
#### linux users
https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-3.6.18.tgz
#### for window Operating System user
.....https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.6.18-signed.msi
#### for macOS users
https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-3.6.18.tgz

. After installation, extract the files,in my case i have exracted in desktop
and renamed the folder after extraction to mongoDB
.create a new outside the desktop and name it mongoDB-data where all database will be accessed after we run server
3. download postman to get post and get request to our robo3t
