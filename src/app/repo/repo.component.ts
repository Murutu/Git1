import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-searchservice.service'
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  username:string;
  repo: Repo;
  constructor(private GitSearchService:GitSearchService) {
  }

ngOnInit() {
}

}