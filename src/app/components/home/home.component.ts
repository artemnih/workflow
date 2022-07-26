import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowNewComponent } from '../workflow-new/workflow-new.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private modalService: NgbModal) {}

  displayNewWfModal() {
    const modalRef = this.modalService.open(WorkflowNewComponent, {size: 'lg'});
    modalRef.componentInstance.modalReference = modalRef;
  }

  ngOnDestroy() {
    this.modalService.dismissAll();
  }
}