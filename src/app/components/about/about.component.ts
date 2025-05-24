import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="section-title text-center">About Me</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <!-- Profile Section -->
        <mat-card class="card">
          <mat-card-content>
            <div class="text-center mb-8">
              <div class="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4">
                <!-- Add your profile image here -->
                <mat-icon class="text-8xl text-gray-400">person</mat-icon>
              </div>
              <h2 class="text-2xl font-bold">Your Name</h2>
              <p class="text-gray-600">Full Stack Developer</p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center">
                <mat-icon class="text-primary mr-2">email</mat-icon>
                <span>your-email[at]example.com</span>
              </div>
              <div class="flex items-center">
                <mat-icon class="text-primary mr-2">location_on</mat-icon>
                <span>Your Location</span>
              </div>
              <div class="flex items-center">
                <mat-icon class="text-primary mr-2">phone</mat-icon>
                <span>+1 234 567 890</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Bio Section -->
        <mat-card class="card">
          <mat-card-content>
            <h2 class="text-2xl font-bold mb-4">Professional Summary</h2>
            <p class="text-gray-700 mb-6">
              I am a passionate Full Stack Developer with expertise in modern web technologies.
              With a strong foundation in both frontend and backend development, I create
              responsive and scalable applications that deliver exceptional user experiences.
            </p>

            <h3 class="text-xl font-bold mb-3">Education</h3>
            <div class="mb-6">
              <h4 class="font-semibold">Bachelor of Science in Computer Science</h4>
              <p class="text-gray-600">University Name, 2018-2022</p>
            </div>

            <h3 class="text-xl font-bold mb-3">Experience</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold">Senior Developer</h4>
                <p class="text-gray-600">Company Name, 2022-Present</p>
              </div>
              <div>
                <h4 class="font-semibold">Junior Developer</h4>
                <p class="text-gray-600">Previous Company, 2020-2022</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `
})
export class AboutComponent { }
