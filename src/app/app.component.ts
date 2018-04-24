import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piper Wright';
  catGif = 'https://media.giphy.com/media/oSQgHSdZmGmwU/giphy.gif';
  catGifAlt = "A cat gif";
  dog1 = {name: "Harry", color:"blue"}
  dog2 = {name: "Barry", color:"red"}
}
