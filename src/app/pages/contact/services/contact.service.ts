import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactDto } from '../models/contact';

@Injectable()
export class ContactService {
  private API_URL: string = `https://localhost:44323/api/contacts`;
  constructor(private http: HttpClient) {}
  getContact(): Observable<ContactDto[]> {
    return this.http.get<ContactDto[]>(`${this.API_URL}`);
  }
}
