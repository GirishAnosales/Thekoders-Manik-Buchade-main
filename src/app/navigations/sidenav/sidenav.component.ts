import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, map } from 'rxjs';
import { SlideInAnimationService } from 'src/app/animations/slide-in-animation.service';
import { BreakpointsService } from 'src/app/shared/breakpoints/breakpoints.service';
import { SocialMediaLinksService } from 'src/app/shared/social-media/social-media-links.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	animations: [SlideInAnimationService.slideOutToTop],
})
export class SidenavComponent implements OnInit, AfterViewInit {
	@ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
	socialMediaLinksServiceData!: any;
	isXSmall = this.breakpointsService.isXSmall$;
	isSmall = this.breakpointsService.isSmall$;
	isHandset = this.breakpointsService.isHandset$;
	isHomePage: boolean = false;
	slideOutToTop!: any;

	logo = {
		white: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Flogo%2FLogo%20WBG.jpg?alt=media&token=1fd84ad6-9918-417b-a266-f730a9da2c34&_gl=1*z51cnk*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTYzNzMuMzYuMC4w",
		colored: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Flogo%2FLogo%20CBG.jpg?alt=media&token=cde9aa86-daa4-42d4-acf3-9517066f3c58&_gl=1*2x9y9y*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTYzNjIuNDcuMC4w"
	}

	constructor(
		private breakpointObserver: BreakpointObserver,
		public dialog: MatDialog,
		private socialMediaLinksService: SocialMediaLinksService,
		private breakpointsService: BreakpointsService,
	) { }

	ngOnInit(): void {
		this.socialMediaLinksServiceData = this.socialMediaLinksService.getSocialMediaLinksService();
		console.log('ngOnInit');
	}

	ngAfterViewInit(): void {
		// if (this.menuTrigger) {
		// 	if (this.menuTrigger.menuOpen) {
		// 		console.log('Menu is already open');
		// 	} else {
		// 		this.menuTrigger.openMenu();
		// 		console.log('Menu opened');
		// 	}
		// }
		console.log('ngAfterViewInit');
		this.triggerButtonClick();
	}

	triggerButtonClick(): void {
		const industriesMenuButton = document.getElementById('curtain');
		if (industriesMenuButton) {
			industriesMenuButton.click();
			console.log('triggerButtonClick');
		}
	}
}
