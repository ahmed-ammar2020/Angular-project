import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  onClick() {
    this.close.emit();
  }

  constructor(
    private el: ElementRef
  ) {

   }

   // this method is called automatically after recieving data from parent
   // from here you can access data from parent NOT from the constructor
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  // when leaving the modal, remove it
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

}
