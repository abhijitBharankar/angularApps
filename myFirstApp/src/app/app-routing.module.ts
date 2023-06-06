import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : '', component : HomeComponent}, //to load home screen we use empty path
  {path : 'home', component : HomeComponent},
  {path : 'admin', loadChildren: ()=> import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path : 'student', loadChildren: ()=> import('./student/student.module').then(mod=>mod.StudentModule)},
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
