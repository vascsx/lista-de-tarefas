import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true);

  #setListItesms = signal<IListItems[]>([this.#parseItems()]);
  getListItems = this.#setListItesms.asReadonly();

  #parseItems (){
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }
  public getInputAndAddItem (value : IListItems) {
    localStorage.setItem(
      '@mylist', JSON.stringify([value]));
  }
}
