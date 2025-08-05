import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define interfaces for type safety
export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
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
  private apiUrl = 'http://localhost/kitCoinsApi';

  constructor(private http: HttpClient) { }

  /**
   * Register a new user
   * @param userData - User registration data
   * @returns Observable with the API response
   */
  register(userData: RegisterRequest): Observable<RegisterResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Make POST request to registration endpoint
    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/register`, 
      userData, 
      { headers }
    );
  }

  //login functionality 
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(
      `${this.apiUrl}/login`,
      { email, password },
      { headers }
    );
  }
}