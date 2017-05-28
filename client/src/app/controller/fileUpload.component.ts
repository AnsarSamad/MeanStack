import { Component, Inject } from '@angular/core';
import { FirebaseConfig } from '../base/firebaseConfig'
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
    snap: JSON
    firebase = FirebaseConfig.initialize();
    constructor() {
        this.firebase.downloadImage('images/Koala.jpg').then((url: any) => {
            this.image = url
        });
    }

    fileChange(event) {
        let fileList: FileList = event.target.files;
        for (var i = 0; i < fileList.length; i++) {
            let file: File = fileList[i];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.firebase.addToStorage('images', file.name, file)
                .then((snapshot) => {
                    var metaData = {
                        "bucket": snapshot.metadata.bucket, "fullPath": snapshot.metadata.fullPath,
                        "name": snapshot.metadata.name, "size": snapshot.metadata.size,
                        "contentType": snapshot.metadata.contentType,
                        "downloadURLs": snapshot.metadata.downloadURLs[0]
                    }
                    this.firebase.addToDatabase('images', snapshot.metadata.generation, metaData);
                });


        }
    }



}