import { Injectable, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { Auth, User, authState, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private _isLoggedIn = false;
  private _user: User | null = null
  authStateSub: Subscription
  authState$;

  constructor(private auth: Auth, private router: Router) {
    this.authState$ = authState(this.auth);
    this.authStateSub = this.authState$.subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/home');
        this._isLoggedIn = true;
        this._user = user;
      } else {
        this._isLoggedIn = false;
        this._user = null;
        if (this.router.url !== '/login') {
          this.router.navigateByUrl("/login");
        }
      }
    });
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  get user() {
    return this._user;
  }

  loginWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((result) => { });
  }

  ngOnDestroy(): void {
    this.authStateSub.unsubscribe();
  }
}
