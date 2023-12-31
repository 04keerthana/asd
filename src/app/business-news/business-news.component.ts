import { Component } from '@angular/core';
import { News } from '../news';
import { NewsOperationService } from '../news-operation.service';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {

  __newsService:NewsOperationService;
  router:Router;
  allNews : Array<News> = [];
  constructor(newsService:NewsOperationService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('BusinessNews');
    this.router = router;
    console.log(this.allNews.length);
  }
  viewNewsDetails(category:string)
  {
    
    this.router.navigate(['newsDetail',category]);
  }


}
