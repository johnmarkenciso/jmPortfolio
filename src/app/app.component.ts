import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    template: `
    <mat-toolbar color="primary" class="fixed top-0 z-50">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="ml-4">My Portfolio</span>
    </mat-toolbar>

    <mat-sidenav-container class="h-screen">
      <mat-sidenav #sidenav mode="side" class="w-64">
        <mat-nav-list>
          <a mat-list-item routerLink="/home">Home</a>
          <a mat-list-item routerLink="/about">About</a>
          <a mat-list-item routerLink="/projects">Projects</a>
          <a mat-list-item routerLink="/contact">Contact</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content class="p-8 mt-16">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
    styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class AppComponent {
    title = 'My Portfolio';
}
