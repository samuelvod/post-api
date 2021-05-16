import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { postReducer } from './reducer/posts.reducer';
// import { POST_STATE_NAME } from './selector/posts.selector';
import { PostEffect } from './effects/post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ "posts": postReducer }),
    EffectsModule.forRoot([PostEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
