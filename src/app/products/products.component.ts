import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  constructor( public catalogueService : CatalogueService, public route: ActivatedRoute, public router : Router) { }
  ngOnInit(): void {
    this.router.events.subscribe( value => {
      if(value instanceof NavigationEnd){
        let url = value.url; 
        console.log(url);
        console.log(p1)
 
      }
    });
    let p1=this.route.snapshot.params['p1'];
    let p2=this.route.snapshot.params['p2'];

    if(p1==1){
      this.getProducts(  '/products');
    }
    if(p1==2){
      this.getProducts('/categories/'+p2+'/products');
    } 
  }

  private getProducts(url : string){
    console.log(url)
    this.catalogueService.getResource(url)
    .subscribe(data => {
      this.products = data;
    }, error => console.log(error))
}
}
