import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Http
} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people = [];
  stateExpression: string;
  visibleId = "";
  constructor(private http: Http) {
    this.http.get('../../assets/data/interndata.json')
      .subscribe(res => res.json().forEach(element => {
        this.people.push(element);
      }));

  }

  ngOnInit(): void {
    }
  
   
    
  nameClick(event):void{
    let x = event.path;
    console.log(this.idExtract(x));
    this.visibleId = this.idExtract(x)
  }

  idExtract(location:object){
    let id = (location[0].id);
    if(!id){
      id = (location[1].id);
    }
    return id.slice(1);
  }
}
