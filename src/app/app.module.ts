import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { WordEntryComponent } from './word-entry/word-entry.component'
import { HttpService } from './shared/http.service'
import { WordViewComponent } from './word-view/word-view.component'
import { ListViewComponent } from './list-view/list-view.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    WordEntryComponent,
    WordViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
