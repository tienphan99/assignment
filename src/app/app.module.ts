import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { CountdownModule } from 'ngx-countdown';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/Authentication/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { VerifyComponent } from './verify/verify.component';
import { DangkiComponent } from './dangki/dangki.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResultComponent } from './result/result.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    DangnhapComponent,
    LienheComponent,
    MonhocComponent,
    TracnghiemComponent,
    GioithieuComponent,
    FooterComponent,
    LogoutComponent,
    VerifyComponent,
    DangkiComponent,
    ForgotComponent,
    ResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CountdownModule,
    ChartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
