import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define interfaces for type safety
export interface LoginRequest {
  name: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  userId?: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // need to set up the login api next
  private apiUrl = 'http://localhost/kitCoinsApi/';

  constructor(private http: HttpClient) { }

  // /**
  //  * Register a new user
  //  * @param userData - User registration data
  //  * @returns Observable with the API response
  //  */
  // register(userData: LoginResponse): Observable<LoginResponse> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   // Make POST request to registration endpoint
  //   return this.http.post<LoginResponse>(
  //     `${this.apiUrl}register.php`, 
  //     userData, 
  //     { headers }
  //   );
  // }

  //login functionality 
  login(name: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(
      `${this.apiUrl}/login`,
      { name, password },
      { headers }
    );
  }
}