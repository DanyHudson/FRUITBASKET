import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Singlefruit } from './singlefruit/singlefruit';
import { Fruitlistdataservice } from '../fruitlistdataservice';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, Singlefruit],
  templateUrl: './fruitlist.html',
  styleUrl: './fruitlist.scss'
})
export class Fruitlist {

  fruitlistdataservice = inject(Fruitlistdataservice);

  fontColorGood = 'lightgreen';
  fontColorBad = 'lightcoral';


  addComment(comment: string, index: number) {
    this.fruitlistdataservice.addCommentToFruit(comment, index);

  };


}
