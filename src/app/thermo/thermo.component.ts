import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermo',
  templateUrl: './thermo.component.html',
  styleUrls: ['./thermo.component.scss']
})
export class ThermoComponent implements OnInit {
  @Input() height: number;
  @Input() value: number;
  @Input() max: number;
  @Input() steps: number;
  percent: number;
  intervals: any;
  valstr: string;
  constructor() {
  }

  ngOnInit() {
    this.height = this.height || 100;
    this.value = this.value || 100;
    this.max = this.max || 1000;
    this.steps = this.steps || 4;

    this.percent = this.value / this.max * 100;
    this.valstr = '$' + this.value;

    console.log(this.steps);
    const rng = Array.apply(null, {length: this.steps}).map(Function.call, Number);
    console.log(rng);
    this.intervals = Array.apply(null, {length: this.steps}).map(Function.call, Number)
      .map(step => {
        const val = (this.max / this.steps) * step;
        const percent = (val / this.max) * 100;
        return { percent: percent, label: '$' + val };
      });
    console.log('hi');
    console.log(this.intervals);
  }
}
