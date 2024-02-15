import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientsAndTestimonialsComponent } from './pages/about/clients-and-testimonials/clients-and-testimonials.component';
import { VisionAndMissionComponent } from './pages/about/vision-and-mission/vision-and-mission.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MediaComponent } from './pages/media/media.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SubProjectsComponent } from './pages/projects/sub-projects/sub-projects.component';
import { HousingComponent } from './pages/projects/housing/housing.component';
import { CommercialComponent } from './pages/projects/commercial/commercial.component';
import { InstitutionalComponent } from './pages/projects/institutional/institutional.component';
import { LandscapeComponent } from './pages/projects/landscape/landscape.component';
import { BungalowComponent } from './pages/projects/bungalow/bungalow.component';
import { InteriorComponent } from './pages/projects/interior/interior.component';
import { CommonPhotoGalleryComponent } from './pages/projects/common-photo-gallery/common-photo-gallery.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'clients-and-testimonials', component: ClientsAndTestimonialsComponent },
	{ path: 'vision-and-mission', component: VisionAndMissionComponent },
	{ path: 'projects', component: ProjectsComponent, },
	{ path: 'projects/housing', component: HousingComponent },
	{ path: 'projects/commercial', component: CommercialComponent },
	{ path: 'projects/institutional', component: InstitutionalComponent },
	{ path: 'projects/landscape', component: LandscapeComponent },
	{ path: 'projects/bungalow', component: BungalowComponent },
	{ path: 'projects/interior', component: InteriorComponent },
	// { path: 'projects/:sub-project', component: SubProjectsComponent },
	{ path: 'media', component: MediaComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'careers', component: CareersComponent },
	{ path:'common', component: CommonPhotoGalleryComponent },

	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
