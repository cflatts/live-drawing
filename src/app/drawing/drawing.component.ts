import {Component, OnInit} from '@angular/core'
import {DrawingService} from './drawing.service'

@Component({
    moduleId: module.id,
    selector: 'my-drawing',
    templateUrl: './drawing.component.html',
    styleUrls: ['./drawing.component.css']
})

export class DrawingComponent implements OnInit {

    selectColor(name): string {
        var colorNode = document.getElementsByName(name)
        console.log(colorNode)
        return colorNode[0].attributes.name.nodeValue
    }

    selectShape(name): string {
        var shapeNode = document.getElementsByName(name)
        console.log(shapeNode)
        return shapeNode[0].attributes.name.nodeValue
    }

    draw(event: click): void {

        var myCanvas = document.getElementById('groupCanvas')
        var ctx = myCanvas.getContext('2d')

        var canvasLocation = myCanvas.getBoundingClientRect()

        const x = event.clientX - canvasLocation.left
        const y = event.clientY - canvasLocation.top

        ctx.fillRect(x, y, 5, 5)
    }
}



