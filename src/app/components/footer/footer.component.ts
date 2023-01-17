import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>Copyright &copy; 2023</p>
      <a routerLink="/about">About</a>
    </footer>


  `,
  styles: [`
    footer {
      margin-top: 30px;
      text-align: center;
    }
  `]
})
export class FooterComponent {

}
