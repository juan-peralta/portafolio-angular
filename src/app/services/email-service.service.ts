import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, phone: string, message: string) {
    const data = { name, email, phone, message };
    return this.http.post('/send-email', data);
  }
}