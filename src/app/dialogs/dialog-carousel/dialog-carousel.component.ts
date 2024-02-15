import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-dialog-carousel',
	templateUrl: './dialog-carousel.component.html',
	styleUrls: ['./dialog-carousel.component.scss']
})
export class DialogCarouselComponent implements OnInit {
	images!: string[];
	name!: string[];

	constructor(@Inject(DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		this.name = this.data.name;
		this.images = this.data.images;

		console.log(this.name);
		console.log(this.images);
	}

	carousel: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		autoplay: false,
		autoplayTimeout: 2000,
		navSpeed: 100,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
		},
		nav: false,
	}
}
