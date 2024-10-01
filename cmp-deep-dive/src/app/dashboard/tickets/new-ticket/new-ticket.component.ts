import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // the selector can be a template variable
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // one possibility is to pass the form through a template variable
  // onSubmit(title: string, text: string, form: HTMLFormElement) {
  onSubmit(title: string, text: string) {
    console.log('Entered title: ' + title);
    console.log('Entered text: ' + text);
    this.form?.nativeElement.reset();
  }
}
