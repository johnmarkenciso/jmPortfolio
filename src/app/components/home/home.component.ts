import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatCardModule,MatButtonModule,MatIconModule],
    template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="py-20 text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p class="text-xl text-gray-600 mb-8">Full Stack Developer | UI/UX Enthusiast | Problem Solver</p>
        <button mat-raised-button color="primary" class="mr-4">
          <mat-icon>download</mat-icon>
          Download CV
        </button>
        <button mat-stroked-button color="primary">
          <mat-icon>email</mat-icon>
          Contact Me
        </button>
      </section>

      <!-- Skills Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="section-title text-center">My Skills</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <mat-card class="card">
              <mat-card-header>
                <mat-icon class="text-4xl text-primary mb-4">code</mat-icon>
                <mat-card-title>Frontend Development</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Angular, React, TypeScript, HTML5, CSS3, Tailwind CSS</p>
              </mat-card-content>
            </mat-card>

            <mat-card class="card">
              <mat-card-header>
                <mat-icon class="text-4xl text-primary mb-4">storage</mat-icon>
                <mat-card-title>Backend Development</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Node.js, Python, Java, SQL, MongoDB, RESTful APIs</p>
              </mat-card-content>
            </mat-card>

            <mat-card class="card">
              <mat-card-header>
                <mat-icon class="text-4xl text-primary mb-4">devices</mat-icon>
                <mat-card-title>Tools & Technologies</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Git, Docker, AWS, CI/CD, Agile Methodologies</p>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent { }
