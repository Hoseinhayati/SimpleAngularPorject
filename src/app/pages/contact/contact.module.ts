import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './services/contact.service';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [ContactService],
})
export class ContactModule { }
