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
```
      var SCOPES = ['https://www.googleapis.com/auth/drive.file']
      var CLIENT_ID = 'YOUR CLIENT ID';
      window.loginService = new LoginService(CLIENT_ID, SCOPES);
```
For more info check the Demo


## Demo

Add your api client_id to config.js. You can get the client id following the instruction
from step1 here https://developers.google.com/drive/v3/web/quickstart/js

Clone, install and run
```
npm install
npm start //to run the dev server
```

Then go to localhost:4000/demo

The demo uses jQuery but just for hide/show stuff, is not needed.

Write something and click save, it will create a file in your google drive called gDriveSync.example.txt.

If you change the text and save it again, it will update the file. Have in mind that if you refresh the page the doc id reference will be lost so if you save again it will create a new document. 

The document has a mimeType of application/vnd.google-apps.document' this is a google doc, so you can open and edit it from google drive.


# API methods

- **login.service.js** (parameters: CLIENT_ID, and SCOPES)
  - **checkAuth:** Silently check to see if a user has already authorized the app.
  - **login:** Attempt authorization.


- **drive.service.js**
  - **saveFile:** It creates a new document, or update an existing one if the file has an ID (parameter file)
  - **loadFile:** It return the file given an ID. (parameter file)
  - **listFiles:** It return the files (id and name) from Google Drive.
  
  
  A file is just an object like `var file = {id: null, name: 'testName', content='hello' }`
