import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermo',
  templateUrl: './thermo.component.html',
  styleUrls: ['./thermo.component.scss']
})
export class ThermoComponent implements OnInit {
  @Input() height: number;
  @Input() max: number;
  @Input() value: number;
  @Input() steps: number;
  intervals: Array<number>;

  constructor() {
    console.log('height ' + this.height)
    this.intervals=[];
  }
  ngOnInit() {
    console.log('height ' + this.height)
    this.height = this.height || 200;
    this.max = this.max || 100;
    this.steps = this.steps || 4;

    this.valstr = $interpolate(scope.format)({ val: scope.value} );
    scope.percent = scope.value / scope.max * 100;

    for (var step = 0; step <= scope.steps; step++) {
      var val = (scope.max / scope.steps) * step;
      var percent = (val / scope.max)*100;
      var interval = { percent: percent, label: $interpolate(scope.format)({ val: val })};
      intervals.push(interval);
    }
    scope.intervals = intervals;

  }

}

/*
var app = angular.module('thermo',[]).directive('thermo', ['$window', "$interpolate", function($window, $interpolate) {

	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'vendor/thermometer-directive-angular/js/tg-thermometer-vertical.html',
		link: function(scope, elem, attrs) {

			scope.max=attrs.max || 100;
			scope.steps = attrs.steps || 4;
			scope.format = (attrs.format || "{{val}}%").replace(/\[/g,'{').replace(/\]/g,'}');
            scope.size = attrs.size;
            scope.height = attrs.height;
            scope.value = attrs.value || 0;

            var intervals=[];

            scope.valstr = $interpolate(scope.format)({ val: scope.value} );
            scope.percent = scope.value / scope.max * 100;

            for (var step = 0; step <= scope.steps; step++) {
            	var val = (scope.max / scope.steps) * step;
            	var percent = (val / scope.max)*100;
            	var interval = { percent: percent, label: $interpolate(scope.format)({ val: val })};
				intervals.push(interval);
            }
            scope.intervals = intervals;
		}
	};

}]);
*/
