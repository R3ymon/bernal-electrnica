import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-nonfound',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './nonfound.component.html',
  styleUrl: './nonfound.component.css',
})
export class NonfoundComponent {}
