"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {DrawingService} from './drawing.service'
var DrawingComponent = (function () {
    function DrawingComponent() {
    }
    DrawingComponent.prototype.selectColor = function (name) {
        var colorNode = document.getElementsByName(name);
        return colorNode[0].attributes.name.nodeValue;
    };
    DrawingComponent.prototype.selectShape = function (name) {
        var shapeNode = document.getElementsByName(name);
        return shapeNode[0].attributes.name.nodeValue;
    };
    DrawingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-drawing',
            templateUrl: './drawing.component.html',
            styleUrls: ['./drawing.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DrawingComponent);
    return DrawingComponent;
}());
exports.DrawingComponent = DrawingComponent;
//# sourceMappingURL=drawing.component.js.map