import {Injectable} from '@angular/core'

@Injectable()
export class DrawingService {
    logs: string[] = []

    log(message: string) {
        this.logs.psuh(message)
        onsole.log(message)
    }
}