import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show:boolean = false;
  public buttonName:any = 'Show';
  public  mostraMenu : string = "menu";
 
  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
   
    
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
    {
      this.buttonName = "Hide";
      this.mostraMenu = "call_received";
    } 
    else
    {
      this.buttonName = "Show";
      this.mostraMenu = "menu";
    }
  }
  
}
