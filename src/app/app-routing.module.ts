import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LayoutComponent } from './layout/layout.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LogoutComponent } from './logout/logout.component';
import { VerifyComponent } from './verify/verify.component'
import { DangkiComponent } from './dangki/dangki.component'
import { ForgotComponent } from './forgot/forgot.component'

import { AuthGuard } from './share/guard/auth.guard'
import { SecureInnerPages } from './share/guard/secure-inner-pages.guard.ts.guard'

const routes: Routes = [
  {path:"",component:LayoutComponent},
  {path:"dangnhap",component:DangnhapComponent,canActivate : [SecureInnerPages]},
  {path:"dangki",component:DangkiComponent,canActivate : [SecureInnerPages]},
  {path:"lienhe",component:LienheComponent},
  {path:"monhoc/:id",component :TracnghiemComponent,canActivate : [AuthGuard]},
  {path:"monhoc",component:MonhocComponent,canActivate : [AuthGuard]},
  {path:"gioithieu",component:GioithieuComponent},
  {path:'user',component:LogoutComponent,canActivate : [AuthGuard]},
  {path:'quenmk',component:ForgotComponent,canActivate : [SecureInnerPages]},
  {path:'verify',component:VerifyComponent,canActivate : [SecureInnerPages]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
