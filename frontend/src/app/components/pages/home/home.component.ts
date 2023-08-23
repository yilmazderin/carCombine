import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public searchTerm='';

  constructor(activatedRoute: ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm
    });
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/' + term);
  }

}
