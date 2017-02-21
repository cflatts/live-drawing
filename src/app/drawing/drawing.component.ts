import {Component, OnInit} from '@angular/core'
import {DrawingService} from './drawing.service'
import {Dot} from './dot'

@Component({
    moduleId: module.id,
    selector: 'my-drawing',
    templateUrl: './drawing.component.html',
    styleUrls: ['./drawing.component.css']
})

export class DrawingComponent {

    constructor(private service: DrawingService) { }
}



