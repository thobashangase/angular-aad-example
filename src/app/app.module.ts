import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalInterceptor, MsalModule, MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: '62b80d34-155e-4d31-9ac4-bc6d5689d7e3',
        authority: 'https://login.microsoftonline.com/85644a9f-0a28-4444-aea9-1010c3692a43',
        redirectUri: 'http://localhost:4200', // Change this to redirect to the page that initiated the login process
        navigateToLoginRequestUrl: true
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
    }),
    {
      // MSAL Guard Configuration
      interactionType: InteractionType.Redirect,
      authRequest: {
          scopes: ['user.read']
      }
    },
    {
      interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      protectedResourceMap: new Map([ 
          ['https://graph.microsoft.com/v1.0/me', ['user.read']],
          ['https://graph.microsoft.com/v1.0/users', ['user.readbasic.all']]
      ])
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
