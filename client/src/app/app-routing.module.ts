import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {DrawingComponent} from './drawing/drawing.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'drawing',
        component: DrawingComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}