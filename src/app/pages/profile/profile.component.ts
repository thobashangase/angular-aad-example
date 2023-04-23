import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username = '';

  mapLink = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.http.get('https://graph.microsoft.com/v1.0/me?$select=givenName,surname').subscribe((response: any) => {
      this.username = response.givenName + ' ' + response.surname;
    });
  }
}
