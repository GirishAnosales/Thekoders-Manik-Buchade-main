import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-carousel-clients',
	templateUrl: './carousel-clients.component.html',
	styleUrls: ['./carousel-clients.component.scss']
})
export class CarouselClientsComponent {

	protected images1 = [
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/builder.png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (1).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (10).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (2).jpeg' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (2).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (3).jpeg' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (3).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (4).png' },
	];

	protected images2 = [
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (5).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (7).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (8).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download (9).png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download.jpeg' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/download.png' },
		{ path: '../../../assets/images/pages/about/clients-testimonials/logos md arch/swoatya3.jpg' },
	];

	carousel1: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 2000,
		navSpeed: 100,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			425: {
				items: 3
			},
			768: {
				items: 5
			},
			1280: {
				items: 7
			},
		},
		nav: false
	}

	carousel2: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		rtl: true,
		autoplay: true,
		autoplayTimeout: 2000,
		navSpeed: 100,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			425: {
				items: 3
			},
			768: {
				items: 5
			},
			1280: {
				items: 7
			},
		},
		nav: false
	}
}
