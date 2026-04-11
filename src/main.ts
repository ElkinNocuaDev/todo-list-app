import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { firebaseConfig } from './app/firebase.config';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular({
      mode: 'ios' // 👈 AQUÍ
    }),

    provideRouter(routes),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideRemoteConfig(() => getRemoteConfig())
  ],
});