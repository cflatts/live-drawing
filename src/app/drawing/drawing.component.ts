import {Component, OnInit} from '@angular/core'
// import {DrawingService} from './drawing.service'

@Component({
    moduleId: module.id,
    selector: 'my-drawing',
    templateUrl: './drawing.component.html',
    styleUrls: ['./drawing.component.css']
})

export class DrawingComponent implements OnInit {

    selectColor(name): void {
        var colorNode = document.getElementsByName(name)
        return colorNode[0].attributes.name.nodeValue
    }
}