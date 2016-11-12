function DriveService(){ 

  this.loadFile = function(file, done) {
    gapi.client.drive.files.export({
      fileId: file.id,
      mimeType: 'text/plain',
      fields: 'id,name'
    }).then(function(resp) {
      var retFile = {name: file.name, id: file.id, content: resp.body}
      done(retFile)
    });
  }

  this.saveFile = function(file, done) {
    function addContent(fileId) {
      return gapi.client.request({
          path: '/upload/drive/v3/files/' + fileId,
          method: 'PATCH',
          params: {
            uploadType: 'media'
          },
          body: file.content
        })
    }
    
    if (file.id) { //just update
      addContent(file.id).then(function(resp) {
        console.log('File just updated', resp.result)
        done(resp.result)
      })
    } else { //create and update
      gapi.client.drive.files.create({
        mimeType: 'application/vnd.google-apps.document',
        name: file.name,  
        fields: 'id'
      }).then(function(resp) {
        addContent(resp.result.id).then(function(resp) {
          console.log('created and added content', resp.result)
          done(resp.result)
        })
      });  
    }
  }

  this.listFiles = function(done) {
    gapi.client.drive.files.list({
        pageSize: 30,
        corpus: 'user',
        spaces: 'drive',
        fields: "nextPageToken, files(id, name)",
        q: 'name contains "riotwebeditor_"',
        orderBy: 'modifiedTime desc'
    }).then(function(resp) {
      return done(null, resp.result.files)  
    },function(reason) {
      return done(reason, null)  
    })
  }
}
