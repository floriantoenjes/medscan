import {Component, Input, OnInit} from '@angular/core';
import {Medication} from "../shared/models/medication";

@Component({
  selector: 'app-time-section',
  templateUrl: './time-section.component.html',
  styleUrls: ['./time-section.component.css']
})
export class TimeSectionComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  medications!: Medication[];

  constructor() { }

  ngOnInit(): void {
  }

}
