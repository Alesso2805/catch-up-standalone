import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    MatIconButton,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;

}
