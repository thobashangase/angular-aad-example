import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
    this.getUsers();
  }

  getProfile() {
    this.http.get('https://graph.microsoft.com/v1.0/me?$select=givenName,surname').subscribe((response: any) => {
      this.username = response.givenName + ' ' + response.surname;
    });
  }

  getUsers() {
    this.http.get('https://graph.microsoft.com/v1.0/users?$select=givenName,surname').subscribe((response: any) => {
      console.log(response);
    });
  }
}
