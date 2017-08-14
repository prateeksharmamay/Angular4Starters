import {BehaviorSubject} from "rxjs/BehaviorSubject";
export class AuthService {

  totalTicketCount: BehaviorSubject<number> = new BehaviorSubject<number>(10);

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
