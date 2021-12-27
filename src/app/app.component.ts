import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
DataIndicator:string="no dataaaa";
constructor(){
  this.DataIndicator="no Dataaaaa"
}
 enable(value: string)
 { 
   setTimeout(() => {
    this.DataIndicator=value;
  }, 5000);
}
onButtonClick(event:any){
 let  btnValue ="";
 btnValue= event.target.value;
  this.enable(btnValue);
}

}
