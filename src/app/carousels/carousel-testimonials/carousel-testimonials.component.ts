import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-testimonials',
  templateUrl: './carousel-testimonials.component.html',
  styleUrls: ['./carousel-testimonials.component.scss']
})
export class CarouselTestimonialsComponent {

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		autoplay: false,
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
				items: 3
			},
			1280: {
				items: 3
			},
		},
		nav: false
	}
}
