import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private http: Http) {}

  // --- sets property as observable, maps to json so it matches <object[]> type and becomes iterable, by default type is Response
  users$: Observable<object[]> = this.http.get('https://api.github.com/users').map(res => res.json());

  ngOnInit() {
    // --- can later subscribe to user$
    this.users$.subscribe(users => {
      console.log(users);
    });
  }
}
