import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { SidenavComponent } from './navigations/sidenav/sidenav.component';
import { ClientsAndTestimonialsComponent } from './pages/about/clients-and-testimonials/clients-and-testimonials.component';
import { VisionAndMissionComponent } from './pages/about/vision-and-mission/vision-and-mission.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MediaComponent } from './pages/media/media.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareersFormComponent } from './forms/careers-form/careers-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselAComponent } from './carousels/carousel-a/carousel-a.component';
import { CarouselClientsComponent } from './carousels/carousel-clients/carousel-clients.component';
import { CarouselTestimonialsComponent } from './carousels/carousel-testimonials/carousel-testimonials.component';
import { SubProjectsComponent } from './pages/projects/sub-projects/sub-projects.component';
import { CarouselSubProjectsComponent } from './carousels/carousel-sub-projects/carousel-sub-projects.component';
import { HousingComponent } from './pages/projects/housing/housing.component';
import { CommercialComponent } from './pages/projects/commercial/commercial.component';
import { InstitutionalComponent } from './pages/projects/institutional/institutional.component';
import { LandscapeComponent } from './pages/projects/landscape/landscape.component';
import { BungalowComponent } from './pages/projects/bungalow/bungalow.component';
import { DialogCarouselComponent } from './dialogs/dialog-carousel/dialog-carousel.component';
import { FooterComponent } from './navigations/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InteriorComponent } from './pages/projects/interior/interior.component';
import { CarouselOurSpaceComponent } from './carousels/carousel-our-space/carousel-our-space.component';
import { CommonPhotoGalleryComponent } from './pages/projects/common-photo-gallery/common-photo-gallery.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonPhotoGalleryService } from './pages/projects/common-photo-gallery/common-photo-gallery.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SidenavComponent,
		ClientsAndTestimonialsComponent,
		VisionAndMissionComponent,
		ProjectsComponent,
		MediaComponent,
		ContactComponent,
		CareersComponent,
		PageNotFoundComponent,
		ContactFormComponent,
		CareersFormComponent,
		CarouselAComponent,
		CarouselClientsComponent,
		CarouselTestimonialsComponent,
		SubProjectsComponent,
		CarouselSubProjectsComponent,
		HousingComponent,
		CommercialComponent,
		InstitutionalComponent,
		LandscapeComponent,
		BungalowComponent,
		DialogCarouselComponent,
		FooterComponent,
  InteriorComponent,
  CarouselOurSpaceComponent,
  CommonPhotoGalleryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		CarouselModule,
  		NgbModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
