import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'contactMe', component: ContactMeComponent},
  {path: 'newsLetter', component: NewsLetterComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'learn', loadChildren:()=>import('./learn/learn.module').then(mod=>mod.LearnModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
