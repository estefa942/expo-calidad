import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items: Item[] = [];
  public item: string = '';
  constructor() { }

  ngOnInit() {

  }

  addItem(item){
    this.items.push({name: this.item , status:false});
    this.item = '';
  }

}
