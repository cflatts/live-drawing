// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

var platformBrowserDynamic = require('@angular')
var AppModule = require('./app/app.module')

// import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
