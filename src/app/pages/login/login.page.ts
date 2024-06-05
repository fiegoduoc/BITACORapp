import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  spin = false;

  constructor(private router: Router) { }

  onLogin() {
    this.spin = true;
    setTimeout(() => {
      this.spin = false;
      this.router.navigate(['/menu']);
    }, 2000);
  }
}
