import { Injectable, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { Auth, authState, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth'
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private _isLoggedIn = false;
  authStateSub: Subscription
  authState$;

  constructor(private auth: Auth, private router: Router) {
    this.authState$ = authState(this.auth);
    this.authStateSub = this.authState$.subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/home');
        this._isLoggedIn = true;
      } else {
        this._isLoggedIn = false;
        if (this.router.url !== '/login') {
          this.router.navigateByUrl("/login");
        }
      }
    });
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  loginWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((result) => { });
  }

  ngOnDestroy(): void {
    this.authStateSub.unsubscribe();
  }
}
