import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SlideInAnimationService } from './animations/slide-in-animation.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [SlideInAnimationService.slideOutToTop],
})
export class AppComponent {
	title = 'Manik Buchade';
	isHomePage: boolean = false;
	isClassActive = false;

	url = '../assets/video/Video.mp4';

	constructor(
		private router: Router,
		private elementRef: ElementRef
	) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.isHomePage = event.url === '/home';
			}
		});
	}

	scrollToSidenav(sectionId: string): void {
		const section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
		section.scrollIntoView({ behavior: 'smooth' });
	}

	toggleClass(){
		this.isClassActive = !this.isClassActive;
	}

	
}
