import { Component } from '@angular/core';

import 'materialize-css/dist/js/materialize.js';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  ngOnInit(): void {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle?.addEventListener("click", () => {
      menu!.classList.toggle("show");
    });
  }
}
