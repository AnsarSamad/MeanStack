import { Component,Inject} from '@angular/core';
import * as firebase from 'firebase'

@Component({
    selector: 'uploads',
    template: `
                <script src="assets/js/upload.js"></script>
                 <link href="assets/css/upload.css" rel="stylesheet">
                 <div class="fileupload fileupload-new" data-provides="fileupload">
                    <span class="btn btn-primary btn-file"><span class="fileupload-new">Select file</span>
                    <span class="fileupload-exists">Change</span>         <input type="file" id="file" multiple (change)="fileChange($event)" /></span>
                    <span class="fileupload-preview"></span>
                    <a href="#" class="close fileupload-exists" data-dismiss="fileupload" style="float: none">×</a>
                    <button type="button" class="btn btn-default">Upload</button>
                </div>
                <img src="{{image}}"/>
                
                `
    
})
export class FileUploadComponents {
    image: string;
    storage: firebase.storage.Storage 
    database: firebase.database.Database
    snap:JSON
  constructor() {
        var config = {
                apiKey: "AIzaSyDp5PfXL2nQWqrKumXCuYUQSgVpW8HX9_U",
                authDomain: "tfsmean.firebaseapp.com",
                databaseURL: "https://tfsmean.firebaseio.com",
                projectId: "tfsmean",
                storageBucket: "tfsmean.appspot.com",
                messagingSenderId: "378897946454"
        };
        firebase.initializeApp(config); 
        this.storage = firebase.storage();  
        this.database = firebase.database();

        var storageRef = this.storage.ref();
        
        var imgRef = storageRef.child('images/Koala.jpg');  
        imgRef.getDownloadURL().then((url: any) => {

            console.log('image URL :' + url);
            this.image = url
        });
  }

fileChange(event) {
    let fileList: FileList = event.target.files;
    for (var i = 0; i < fileList.length; i++) {
        let file: File = fileList[i];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        console.log('file :' + file.name);
        console.log('file type:' + file.type);


        var storageRef = this.storage.ref();
        var imgRef = storageRef.child('images/' + file.name);
        imgRef.put(file).then((snapshot) => {
            console.log('Uploaded a file , adding datasbase entry :'); 
            var metaData = {
                "bucket": snapshot.metadata.bucket, "fullPath": snapshot.metadata.fullPath,
                "name": snapshot.metadata.name, "size": snapshot.metadata.size,
                "contentType": snapshot.metadata.contentType,
                "downloadURLs":snapshot.metadata.downloadURLs[0]
            }
            console.log('meta data:' + metaData);
            this.database.ref('images/'+snapshot.metadata.generation).set(metaData);
        });
    
   
    }
  }



}