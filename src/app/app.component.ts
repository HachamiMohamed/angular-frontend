import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories : any;
  currentCategory : any;


  constructor(public catalogueService : CatalogueService,
              public router : Router){}

  
  ngOnInit(): void {
      this.getCategories();
  }

  private getCategories(){
      this.catalogueService.getResource("/categories")
      .subscribe(data => this.categories = data,
      error => {
        console.log(error);
      })
      
  }

  

    
  }

  



