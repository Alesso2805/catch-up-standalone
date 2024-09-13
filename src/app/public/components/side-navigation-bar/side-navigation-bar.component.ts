import {Component, inject} from '@angular/core';
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {NewsApiService} from "../../../news/services/news-api.service";
import {Source} from "../../../news/model/source.entity";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {Article} from "../../../news/model/article.entity";
import {SourceListComponent} from "../../../news/components/source-list/source-list.component";
import {ArticleListComponent} from "../../../news/components/article-list/article-list.component";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    MatSidenav,
    MatNavList,
    MatListItem,
    NgOptimizedImage,
    MatIcon,
    FooterContentComponent,
    NgForOf,
    LanguageSwitcherComponent,
    SourceListComponent,
    ArticleListComponent,
    MatIconButton
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {
  sources: Array<Source> = [];
  articles: Array<Article> = [];

  private newsApi = inject(NewsApiService);
  private logoApi = inject(LogoApiService);

  ngOnInit(): void {
    this.newsApi.getSources().subscribe(
      (data: any)=> {
        this.sources = data['sources'];
        this.sources.forEach((source:{ urlToLogo: string;}) =>
          source.urlToLogo = this.logoApi.getUrlToLogo(source));
        // console.log(this.sources);
        this.searchArticlesForSource(this.sources[0]);
        // console.log(this.articles);
      }
    )
  }

  searchArticlesForSource(source: any){
    this.newsApi.getArticlesBySourceId(source.id).subscribe(
      (data: any)=> {
        this.articles = data['articles'];
        this.articles.forEach( (article: { source: {urlToLogo: any; url: any;};}) =>
        {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log(this.articles);
      }
    );
  }

  onSourceSelected(source: Source){
    console.log(source.name);
    this.searchArticlesForSource(source);
  }


}

