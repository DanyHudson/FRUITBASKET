import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  imports: [],
  templateUrl: './singlefruit.html',
  styleUrl: './singlefruit.scss'
})
export class Singlefruit {
  @Input("testNumber")fruitnumber = 0;

}
