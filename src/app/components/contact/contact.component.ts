import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="section-title text-center">Contact Me</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <!-- Contact Form -->
        <mat-card class="card">
          <mat-card-content>
            <form class="space-y-6">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Name</mat-label>
                <input matInput placeholder="Your name">
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Email</mat-label>
                <input matInput placeholder="Your email" type="email">
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Subject</mat-label>
                <input matInput placeholder="Subject of your message">
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Message</mat-label>
                <textarea matInput rows="6" placeholder="Your message"></textarea>
              </mat-form-field>

              <button mat-raised-button color="primary" class="w-full">
                <mat-icon>send</mat-icon>
                Send Message
              </button>
            </form>
          </mat-card-content>
        </mat-card>

        <!-- Contact Information -->
        <mat-card class="card">
          <mat-card-content>
            <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <mat-icon class="text-primary mr-4 mt-1">location_on</mat-icon>
                <div>
                  <h3 class="font-semibold">Location</h3>
                  <p class="text-gray-600">Your City, Country</p>
                </div>
              </div>

              <div class="flex items-start">
                <mat-icon class="text-primary mr-4 mt-1">email</mat-icon>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-gray-600">your-email[at]example.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <mat-icon class="text-primary mr-4 mt-1">phone</mat-icon>
                <div>
                  <h3 class="font-semibold">Phone</h3>
                  <p class="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="font-semibold mb-4">Follow Me</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-primary">
                  <mat-icon>linkedin</mat-icon>
                </a>
                <a href="#" class="text-gray-600 hover:text-primary">
                  <mat-icon>github</mat-icon>
                </a>
                <a href="#" class="text-gray-600 hover:text-primary">
                  <mat-icon>twitter</mat-icon>
                </a>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `
})
export class ContactComponent { }
