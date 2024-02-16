import { 
  ChangeDetectorRef, 
  Component, 
  ElementRef, 
  EventEmitter, 
  Input, 
  Output, 
  ViewChild, 
  inject } from '@angular/core';

//Interfaces
import { IListItems } from '../../interface/IListItems.interface';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Input({ required: true }) public inputListItems : IListItems[] = [];
  @Output() public outputListItem = new EventEmitter<IListItems>();

  public focusAndAddItem (value:string) {
    if (value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';


      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID ${timestamp}`

      this.outputListItem.emit({
        id,
        checked: false,
        value
      });
      return this.inputText.nativeElement.focus();
    }
  }
}


