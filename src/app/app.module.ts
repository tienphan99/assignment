import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    DangnhapComponent,
    DangkiComponent,
    LienheComponent,
    MonhocComponent,
    TracnghiemComponent,
    GioithieuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
