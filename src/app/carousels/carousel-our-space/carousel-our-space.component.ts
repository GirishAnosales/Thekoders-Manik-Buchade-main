import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-our-space',
  templateUrl: './carousel-our-space.component.html',
  styleUrls: ['./carousel-our-space.component.scss']
})
export class CarouselOurSpaceComponent {

  protected images1 = [
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/1.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/2.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/3.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/4.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/5.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/6.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/7.jpg' },
		// { path: '../../../assets/images/pages/about/vision-mission/our-space/8.jpg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/9.jpg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/10.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/11.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/12.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/13.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/14.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/15.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/16.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/17.jpeg' },
    // { path: '../../../assets/images/pages/about/vision-mission/our-space/18.jpeg' },

    { path: '../../../assets/images/pages/about/vision-mission/our-space/1.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/10.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/2.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/11.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/3.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/12.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/4.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/13.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/5.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/14.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/6.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/15.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/7.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/16.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/8.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/17.jpeg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/9.jpg' },
    { path: '../../../assets/images/pages/about/vision-mission/our-space/18.jpeg' },
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
				items: 2
			},
			768: {
				items: 3
			},
			1280: {
				items: 4
			},
		},		
    nav: false
	}

}
