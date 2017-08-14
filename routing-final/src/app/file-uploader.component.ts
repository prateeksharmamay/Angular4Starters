import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.css'],
})
export class FilesComponent implements OnInit {
  uploader = new FileUploader({url: `YOUR URL`});

  ngOnInit() {
  }
}
