import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"vygo-test-assignment-ertan","appId":"1:314977826606:web:041cf7320f4bb8aafc2cbf","storageBucket":"vygo-test-assignment-ertan.appspot.com","apiKey":"AIzaSyBMQw_V9ThDvr8ZHUdj9I7MMVyg7f14t9s","authDomain":"vygo-test-assignment-ertan.firebaseapp.com","messagingSenderId":"314977826606"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
