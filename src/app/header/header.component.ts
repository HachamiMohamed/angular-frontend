import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {

  }
  navigateById(c : any){ if (c ==1){this.router.navigate(['/products/1/0']).then(() => {
    window.location.reload();
  });}
  if (c ==2){this.router.navigateByUrl('/products/2/1').then(() => {
    window.location.reload();
  });}
  if (c ==3){this.router.navigateByUrl('/products/2/2').then(() => {
    window.location.reload();
  });}
  if (c ==4){this.router.navigateByUrl('/products/2/3').then(() => {
    window.location.reload();
  });}

}}
