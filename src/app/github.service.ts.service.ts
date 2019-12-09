import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Githubservice {
   private username = 'murutu';
   private client_id = '15549cb3355bb1c179ca';
   private client_secret = '33659006c550060ede856b764408eecb553e803b';

   constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username+"?client_id=" );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" + this.username + "/repos"
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
  
    }
  

  
  
  
  


