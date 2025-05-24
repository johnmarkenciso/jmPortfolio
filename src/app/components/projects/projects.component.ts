import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [MatCardModule,MatButtonModule,MatIconModule,MatChipsModule],
    template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="section-title text-center">My Projects</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <!-- Project Card 1 -->
        <mat-card class="card">
          <img mat-card-image src="https://via.placeholder.com/400x250" alt="Project 1">
          <mat-card-content>
            <h2 class="text-xl font-bold mt-4 mb-2">E-Commerce Platform</h2>
            <p class="text-gray-600 mb-4">
              A full-featured e-commerce platform with real-time inventory management
              and secure payment processing.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <mat-chip>Angular</mat-chip>
              <mat-chip>Node.js</mat-chip>
              <mat-chip>MongoDB</mat-chip>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>launch</mat-icon>
              Live Demo
            </button>
            <button mat-button color="accent">
              <mat-icon>code</mat-icon>
              Source Code
            </button>
          </mat-card-actions>
        </mat-card>

        <!-- Project Card 2 -->
        <mat-card class="card">
          <img mat-card-image src="https://via.placeholder.com/400x250" alt="Project 2">
          <mat-card-content>
            <h2 class="text-xl font-bold mt-4 mb-2">Task Management App</h2>
            <p class="text-gray-600 mb-4">
              A collaborative task management application with real-time updates
              and team collaboration features.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <mat-chip>React</mat-chip>
              <mat-chip>Firebase</mat-chip>
              <mat-chip>Material-UI</mat-chip>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>launch</mat-icon>
              Live Demo
            </button>
            <button mat-button color="accent">
              <mat-icon>code</mat-icon>
              Source Code
            </button>
          </mat-card-actions>
        </mat-card>

        <!-- Project Card 3 -->
        <mat-card class="card">
          <img mat-card-image src="https://via.placeholder.com/400x250" alt="Project 3">
          <mat-card-content>
            <h2 class="text-xl font-bold mt-4 mb-2">Portfolio Website</h2>
            <p class="text-gray-600 mb-4">
              A modern portfolio website showcasing projects and skills with
              smooth animations and responsive design.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <mat-chip>Angular</mat-chip>
              <mat-chip>Tailwind CSS</mat-chip>
              <mat-chip>TypeScript</mat-chip>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>launch</mat-icon>
              Live Demo
            </button>
            <button mat-button color="accent">
              <mat-icon>code</mat-icon>
              Source Code
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `
})
export class ProjectsComponent { }
