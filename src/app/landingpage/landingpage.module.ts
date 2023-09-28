import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { ContainerComponent } from './container/container.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ResumeComponent } from './resume/resume.component';
import { SeekerStepsComponent } from './seeker-steps/seeker-steps.component';
import { RecruiterStepsComponent } from './recruiter-steps/recruiter-steps.component';
import { JobsCategoryComponent } from './jobs-category/jobs-category.component';
import { PopularJobsComponent } from './popular-jobs/popular-jobs.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    ContainerComponent,
    LandingpageComponent,
    HeaderComponent,
    HeadComponent,
    HeroComponent,
    ResumeComponent,
    SeekerStepsComponent,
    RecruiterStepsComponent,
    JobsCategoryComponent,
    PopularJobsComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
