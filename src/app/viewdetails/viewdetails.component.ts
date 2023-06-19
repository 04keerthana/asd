import { Component } from '@angular/core';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { News } from '../news';
import { NewsOperationService } from '../news-operation.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent {
  __newsService:NewsOperationService; 
  router:Router;
  activeRoute:ActivatedRoute;
   n:News = new News('','','','');
    constructor(newsService:NewsOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCategory= this.activeRoute.snapshot.params['category']; 
    console.log(searchCategory);
    this.n= this.__newsService.getNewsByCategories(searchCategory); 
    console.log(this.n);
  }


}
