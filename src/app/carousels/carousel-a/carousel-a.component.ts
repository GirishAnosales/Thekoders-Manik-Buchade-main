import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-carousel-a',
	templateUrl: './carousel-a.component.html',
	styleUrls: ['./carousel-a.component.scss']
})
export class CarouselAComponent {

	protected images = [
		{ path: '../../../assets/images/pages/home/newsketchesforhome/1.jpg' },
		{ path: '../../../assets/images/pages/home/newsketchesforhome/2.jpg' },
		{ path: '../../../assets/images/pages/home/newsketchesforhome/3.jpg' },
		{ path: '../../../assets/images/pages/home/newsketchesforhome/4.jpg' },
		{ path: '../../../assets/images/pages/home/newsketchesforhome/5.jpg' },
		{ path: '../../../assets/images/pages/home/newsketchesforhome/6.jpg' },
	]

	// protected images = [
	// 	{ path: '../../../assets/images/pages/home/sketchesforhomepage/Brand Agency Portfolio Website in White Black Sleek Monochrome Style.png' },
	// 	{ path: '../../../assets/images/pages/home/sketchesforhomepage/pencilsketchadjusted-2896602.jpeg' },
	// 	{ path: '../../../assets/images/pages/home/sketchesforhomepage/pencilsketchadjusted-6624551 (1).jpg' },
	// 	{ path: '../../../assets/images/pages/home/sketchesforhomepage/pencilsketchadjusted-6723547.jpg' },
	// 	{ path: '../../../assets/images/pages/home/sketchesforhomepage/pencilsketchadjusted-6890324.jpg' },
	// 	{ path: '../../../assets/images/pages/home/sketchesforhomepage/pencilsketchadjusted-8419422.jpg' },
	// ]
	

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		navSpeed: 100,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
		},
		nav: false
	}
}
