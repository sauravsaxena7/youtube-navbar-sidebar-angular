import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="sidenav-header">
      <img
        [width]="profilePicSize()"
        [height]="profilePicSize()"
        src="/assets/images/owl.jpg"
      />
      <div class="header-text" [class.hide-header-text]="signalNavCollapsed()">
        <h2>Your Channel</h2>
        <p>LOLA</p>
      </div>
    </div>
    <mat-nav-list>
      <a
        mat-list-item
        class="menu-item"
        *ngFor="let item of menuItems()"
        [routerLink]="item.route"
        routerLinkActive="selected-menu-item"
        #rla="routerLinkActive"
        [activated]="rla.isActive"
      >
        <mat-icon matListItemIcon [fontSet]="rla.isActive ? 'material-icons' :'material-icons-outlined' ">{{ item.icon }}</mat-icon>
        <span matListItemTitle *ngIf="!signalNavCollapsed()">{{
          item.label
        }}</span>
      </a>
    </mat-nav-list>
  `,
  styles: [
    `
      :host * {
        transition: all 500ms ease-in-out;
      }
      .sidenav-header {
        padding-top: 24px;
        text-align: center;
        > img {
          border-radius: 100%;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .header-text {
          height:3rem;

          > h2 {
            margin: 0;
            font-size: 1rem;
            line-height: 1.5rem;
          }

          > p {
            margin: 0;
            font-size: 0.8rem;
          }
        }
      }
      .hide-header-text {
        opacity: 0;
        height: 0px !important;
      }

      .selected-menu-item{
        border-left-color:blue !important;
        background:rgba(0,0,0,0.05);
      }
      .menu-item{
        border-left:5px solid;
        border-left-color:rgba(0,0,0,0);
      }

    `,
  ],
})
export class CustomSidenavComponent {
  signalNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.signalNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comment',
      route: 'comment',
    },
  ]);

  profilePicSize = computed(() => (this.signalNavCollapsed() ? '32' : '100'));
}
