import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LayoutComponent } from './layout/layout.component';
import { DangkiComponent } from './dangki/dangki.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';

const routes: Routes = [
  {path:"",component:LayoutComponent},
  {path:"dangnhap",component:DangnhapComponent},
  {path:"dangki",component:DangkiComponent},
  {path:"lienhe",component:LienheComponent},
  {path:"monhoc/:id",component :TracnghiemComponent},
  {path:"monhoc",component:MonhocComponent},
  {path:"gioithieu",component:GioithieuComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
