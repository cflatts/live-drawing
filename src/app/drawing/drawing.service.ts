import {Injectable} from '@angular/core'

@Injectable()
export class DrawingService {

    draw(event: any): void {

        var myCanvas : any = document.getElementById('myCanvas')
        var ctx = myCanvas.getContext('2d')

        var canvasLocation = myCanvas.getBoundingClientRect()

        const x = event.clientX - canvasLocation.left
        const y = event.clientY - canvasLocation.top

        ctx.fillRect(x, y, 5, 5)
    }
}