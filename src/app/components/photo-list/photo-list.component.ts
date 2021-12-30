import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Photo } from './../../shared/photo-board/interfaces/photo';
import { PhotoBoardService } from './../../shared/photo-board/services/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$: Observable<Photo[]>;
  public fa = { faCircleNotch };

  constructor(private service: PhotoBoardService) {}

  public ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
