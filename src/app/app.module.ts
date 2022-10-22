import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route,RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustListComponent } from './components/cust-list/cust-list.component';
import { WelcomComponentComponent } from './components/welcom-component/welcom-component.component';
import { CustFormComponent } from './components/cust-form/cust-form.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
const routes:Routes=[{path:'',component:WelcomComponentComponent},{path:'customers',component:CustListComponent},{path:'custform',component:CustFormComponent},{path : 'updatecust/:id',component:CustFormComponent},{path : 'search/:cname',component:CustListComponent}]
@NgModule({
  declarations: [
    AppComponent,
    CustListComponent,
    WelcomComponentComponent,
    CustFormComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
