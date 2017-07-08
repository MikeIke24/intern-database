import {
  Component,
  OnInit,
  Input,
  NgModule
} from '@angular/core';
import {
  Http
} from '@angular/http';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-name-data',
  templateUrl: './name-data.component.html',
  styleUrls: ['./name-data.component.css'],
  animations: [trigger(
    'openClose', [
      state('collapsed, void', style({
        height: '0px',
        color: 'orange',
        borderColor: 'black'
      })),
      state('expanded', style({
        height: '*',
        borderColor: 'green',
        color: 'green'
      })),
      transition(
        'collapsed <=> expanded', [animate(500)])
    ])],
})
export class NameDataComponent implements OnInit {
  people = [];
  stateExpression: string;
  constructor(private http: Http) {
    this.http.get('../../assets/data/interndata.json')
      .subscribe(res => res.json().forEach(element => {
        this.people.push(element);
      }));

  }

  ngOnInit(): void {
    }

  }

@NgModule({
  imports: [BrowserAnimationsModule],
  declarations: [NameDataComponent],
  bootstrap: [NameDataComponent]
})
export class AppModule {}
