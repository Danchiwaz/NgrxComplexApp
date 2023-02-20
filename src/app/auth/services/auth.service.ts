import {Injectable} from "@angular/core";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/current-user.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";
import {AuthResponseInterface} from "../types/authResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(
        (response: AuthResponseInterface) => response.user)
    )
  }
}
