"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DrawingComponent = (function () {
    function DrawingComponent() {
    }
    DrawingComponent.prototype.draw = function (event) {
        var myCanvas = document.getElementById('myCanvas');
        var ctx = myCanvas.getContext('2d');
        var canvasLocation = myCanvas.getBoundingClientRect();
        var x = event.clientX - canvasLocation.left;
        var y = event.clientY - canvasLocation.top;
        ctx.fillRect(x, y, 5, 5);
    };
    return DrawingComponent;
}());
DrawingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-drawing',
        templateUrl: './drawing.component.html',
        styleUrls: ['./drawing.component.css']
    })
], DrawingComponent);
exports.DrawingComponent = DrawingComponent;
//# sourceMappingURL=drawing.component.js.map