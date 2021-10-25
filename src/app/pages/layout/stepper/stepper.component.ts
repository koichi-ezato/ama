import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PageTitleService} from "../../../@core/utils";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  private pageTitle = 'Stepper';

  isLinear = false;

  firstCtrl = new FormControl('', [Validators.required]);
  secondCtrl = new FormControl('', [Validators.required]);

  firstFormGroup: FormGroup = new FormGroup({
    firstCtrl: this.firstCtrl,
  });
  secondFormGroup: FormGroup = new FormGroup({
    secondCtrl: this.secondCtrl,
  });

  constructor(
    private pageTitleService: PageTitleService,
  ) { }

  ngOnInit() {
    this.pageTitleService.onNotifySharedPageTitleChanged(this.pageTitle);
  }
}
