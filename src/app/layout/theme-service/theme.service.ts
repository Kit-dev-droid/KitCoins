// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeKey = 'darkMode';
  private darkModeSubject = new BehaviorSubject<boolean>(this.getDarkModeFromStorage());
  

  //set the observable
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Apply the stored theme on service initialization
    this.applyTheme(this.darkModeSubject.value);
  }

  // retrieve the boolean value stored in local storage
  private getDarkModeFromStorage(): boolean {
    const stored = localStorage.getItem(this.darkModeKey);
    return stored ? JSON.parse(stored) : false;
  }

  // check for toggle to change the stored theme setting
  toggleDarkMode(): void {
    const currentMode = this.darkModeSubject.value;
    const newMode = !currentMode;
    
    this.setDarkMode(newMode);
  }

  //update local storage as true
  //local storage has to be an string so we use json.stringify to chanmge it from a string to a boolean value
  setDarkMode(isDark: boolean): void {
    localStorage.setItem(this.darkModeKey, JSON.stringify(isDark));
    this.darkModeSubject.next(isDark);
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean): void {
    const element = document.querySelector('html');
    if (element) {
      if (isDark) {
        element.classList.add('my-app-dark');
      } else {
        element.classList.remove('my-app-dark');
      }
    }
  }

  get isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}