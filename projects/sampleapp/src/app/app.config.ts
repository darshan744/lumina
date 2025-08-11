import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes) ]
>>>>>>> 2aed19c (initial commit)
};
