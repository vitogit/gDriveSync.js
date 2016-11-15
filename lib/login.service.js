function LoginService(clientId, scopes, discoveryDocs){ 
  this.initClient = function(updateSigninStatus) {

    return gapi.client.init({
      clientId: clientId,
      scope: scopes,
      discoveryDocs: discoveryDocs
    }).then(function (resp) {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function(reason){
      console.log('ERROR: '+reason)
    });
  }   
  
  this.signIn = function() {
    return gapi.auth2.getAuthInstance().signIn();
  } 
  
  this.signOut = function() {
    return gapi.auth2.getAuthInstance().signOut();
  }  
  
  //return an object and you can call: getId() getName(), getEmail()
  //ref: https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
  this.userProfile = function() {
    return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()
  }

  
     
}
