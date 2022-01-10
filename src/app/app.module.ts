import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FullLandmarkArticleComponent } from './pages/full-landmark-article/full-landmark-article.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { UpdatePostModalComponent } from './modals/update-post-modal/update-post-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PostComponentComponent } from './components/post-component/post-component.component';
import { FullImageModalComponent } from './modals/full-image-modal/full-image-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    FullLandmarkArticleComponent,
    HeaderComponent,
    MainContentComponent,
    UpdatePostModalComponent,
    LoginModalComponent,
    FooterComponent,
    PostComponentComponent,
    FullImageModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
