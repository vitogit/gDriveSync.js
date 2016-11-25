# gDriveSync.js
Javascript wrapper library for Google Drive API v3.

It authenticate, save, load and list documents from your google drive.

## How to use it?
There are two files: login.service.js and drive.service.js. 
Add them to your app, for instance:
```    
<script src="../lib/login.service.js"></script>
<script src="../lib/drive.service.js"></script>
```

Initialize it:

SCOPES: scopes to request, as a space-delimited string. 
CLIENT_ID: The app's client ID, found and created in the Google Developers Console.
DISCOVERY_DOCS: are the apis that we are going to use. An array of discovery doc URLs or discovery doc JSON objects.
      
```
      var SCOPES = 'https://www.googleapis.com/auth/drive.file'
      var CLIENT_ID = 'YOUR CLIENT ID';
      DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
      window.loginService = new LoginService(CLIENT_ID, SCOPES, DISCOVERY_DOCS);
```
For more info check the Demo


## Demo

Add your api client_id to demo/index.html. You can get the client id following the instruction
from step1 here https://developers.google.com/drive/v3/web/quickstart/js

Clone, install and run
```
npm install
npm start //to run the dev server
```

Then go to localhost:4000/demo

The demo uses jQuery but just for hide/show stuff, is not needed.

It will ask for signin using a google account, or automatically signin if you already authorized the app. 

Write something and click save, it will create a file in your google drive called gDriveSync.example.txt.

If you change the text and save it again, it will update the file. Have in mind that if you refresh the page the doc id reference will be lost so if you save again it will create a new document. 

The document has a mimeType of application/vnd.google-apps.document' this is a google doc, so you can open and edit it from google drive.


# API methods

- **login.service.js** (parameters: CLIENT_ID, and SCOPES)
  - **initClient:** Silently check to see if a user has already authorized the app. Pass a callback function and it will return true/false if user is signin/signoff
  - **signIn:** promp the accounts selector to signin.
  - **signOut:** sign out the current user.
  - **userProfile:** return an object with logged user information and you can call: getId() getName(), getEmail()


- **drive.service.js**
  - **saveFile:** It creates a new document, or update an existing one if the file has an ID (parameter file)
  - **loadFile:** It return the file given an ID. (parameter file)
  - **listFiles:** It return the files (id and name) from Google Drive that contains the query_name. (parameters: query_name and callback function)
  
  
  A file is just an object like `var file = {id: null, name: 'testName', content='hello' }`



The library code is based on this example https://github.com/googledrive/web-quickeditor but using the Google Drive api v3 and plain Javascript.

## Info

This is not intended to use in a production envioronment, it just for educational purposes.
