import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit
{
  title = `Response`;
  users: any;
public datasource = new MatTableDataSource<AppUser>();
public displayColumns = [`index`, `links`]
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<AppUser[]>('https://localhost:5001/api/users').subscribe(
      {
        next: (response) => (this.datasource.data = response),

        error: (error) => console.log(error),
        complete: () => console.log(`Request has completed`),
      });
  }


}
interface AppUser {
  id: number;
  userName: string;}

