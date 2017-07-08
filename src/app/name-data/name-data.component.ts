import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Http
} from '@angular/http';


@Component({
  selector: 'app-name-data',
  templateUrl: './name-data.component.html',
  styleUrls: ['./name-data.component.css'],
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

