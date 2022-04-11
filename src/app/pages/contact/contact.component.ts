import { Component, OnInit } from '@angular/core';
import { ContactDto } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [
    ContactService
  ],
})
export class ContactComponent implements OnInit {

  public contacts: ContactDto[] = [];

  constructor(
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.contactService.getContact().subscribe(
      (data) => {
        this.contacts = data;
        console.log(data);
      },
      (errorReponse) => {
        console.log(errorReponse);
      }
    );
  }


}
