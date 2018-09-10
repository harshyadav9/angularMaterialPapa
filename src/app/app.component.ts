import { Component , ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('sidenav') sidenav;

  
  onClose()
  {
    this.sidenav.close();
  } 
  ngAfterViewInit(){
    console.log("sidenav",this.sidenav);
  }
  title = 'app';
}
