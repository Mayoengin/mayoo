import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-fifth-layout',
  templateUrl: './fifth-layout.component.html',
  styleUrls: ['./fifth-layout.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule]
  
})
export class FifthLayoutComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
console: any;
isEmailSent = false; // Tracks if the email was successfully sent

sendEmail() {
  if (!this.formData.name || !this.formData.email || !this.formData.message) {
    alert('Please fill out all required fields.');
    return;
  }

  console.log('Sending email with the following data:', this.formData);

  emailjs
    .send(
      'service_nlry64y', // Replace with your EmailJS Service ID
      'template_0hoaagq', // Replace with your EmailJS Template ID
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
      },
      'XKcP-1iMXwz2iZTMJ' // Replace with your EmailJS User ID
    )
    .then(
      (response: { status: any; text: any }) => {
        this.isEmailSent = true; // Mark email as sent
        console.log('SUCCESS!', response.status, response.text);

        // Reset the button after 5 seconds
        setTimeout(() => {
          this.isEmailSent = false;
        }, 5000);
      },
      (err: any) => {
        alert('Failed to send email. Please try again later.');
        console.error('FAILED...', err);
      }
    );
}
}
