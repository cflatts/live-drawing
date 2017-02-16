import {Component, OnInit} from '@angular/core'
import {DrawingService} from './drawing.service'

@Component({
    moduleId: module.id,
    selector: 'my-drawing',
    templateUrl: './drawing.component.html',
    styleUrls: ['./drawing.component.css']
})

export class DrawingComponent {

    draw(event: any): void {

        var myCanvas : any = document.getElementById('myCanvas')
        var ctx = myCanvas.getContext('2d')

        var canvasLocation = myCanvas.getBoundingClientRect()

        const x = event.clientX - canvasLocation.left
        const y = event.clientY - canvasLocation.top

        ctx.fillRect(x, y, 5, 5)
    }
}



