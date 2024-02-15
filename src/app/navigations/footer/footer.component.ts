import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SocialMediaLinksService } from 'src/app/shared/social-media/social-media-links.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	isSmall!: Observable<boolean>
	isMediumLargeXLarge!: Observable<boolean>
	isXSmallScreen = false;
	hidden = false;
	socialMediaLinksServiceData!: any;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private socialMediaLinksService: SocialMediaLinksService,
		) { }

	ngOnInit(): void {
		this.socialMediaLinksServiceData = this.socialMediaLinksService.getSocialMediaLinksService();
		
		this.isSmall = this.breakpointObserver.observe([
			Breakpoints.XSmall
		])
			.pipe(
				map(res => res.matches)
			)

		this.isMediumLargeXLarge = this.breakpointObserver.observe([
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge,
		])
			.pipe(
				map(res => res.matches)
			)
	}

	toggleBadgeVisibility() {
		this.hidden = !this.hidden;
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}
