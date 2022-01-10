import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import { FullLandmarkArticleComponent } from "./pages/full-landmark-article/full-landmark-article.component";
import { MainContentComponent } from "./pages/main-content/main-content.component";

const routes: Routes = [{
    path: '', component: MainContentComponent
},
{ 
    path: 'full-landmark-article/:id', component: FullLandmarkArticleComponent
}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}