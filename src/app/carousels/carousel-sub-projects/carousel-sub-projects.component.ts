import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DialogCarouselComponent } from 'src/app/dialogs/dialog-carousel/dialog-carousel.component';

@Component({
	selector: 'app-carousel-sub-projects',
	templateUrl: './carousel-sub-projects.component.html',
	styleUrls: ['./carousel-sub-projects.component.scss']
})
export class CarouselSubProjectsComponent {
	@Input() images!: string[];
	@Input() name!: string;

	private dialogTimer: any; // Timer reference
	private progressBarTimer: any;
	progress: number = 0; // Progress bar value

	constructor(private dialog: Dialog) { }

	protected projects = [
		{
			no: 1,
			image: '../../../assets/images/pages/projects/INSTITUTIONAL1.jpg',
			routerLink: 'institutional',
			name: 'Institutional',
		},
	]

	carousel: OwlOptions = {
		loop: false,
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

	// Start the progress bar on mouse enter
	startProgressBar(name: string): void {
		// Clear any previous timers
		clearTimeout(this.dialogTimer);
		clearTimeout(this.progressBarTimer);

		// Increase the progress value with a timer (e.g., every 10 milliseconds)
		this.progressBarTimer = setInterval(() => {
			this.progress += 1; // You can adjust the speed by changing this value
			if (this.progress >= 1) {
				this.progress = 1;
				this.openImageDialog(name);
				clearInterval(this.progressBarTimer);
			}
		}, 1); // Adjust the interval for the desired speed
	}

	// Reset the progress bar on mouse leave
	resetProgressBar(): void {
		clearTimeout(this.dialogTimer);
		clearTimeout(this.progressBarTimer);
		this.progress = 0;
	}

	openImageDialog(name: string): void {
		this.dialogTimer = setTimeout(() => {
			this.progress = 0; // Reset the progress after opening the dialog
			const dialogRef = this.dialog.open(DialogCarouselComponent, {
				width: '90%',	
				height: 'max-content',
				panelClass: 'panelClass',
				data: { images: this.images, name: name },
			});
		}, 700); // Adjust the delay for opening the dialog
	}

	closeImageDialog(): void {
		this.dialogTimer = setTimeout(() => {
			this.dialog.closeAll(); // Close the dialog after a delay
		}, 700); // Adjust the delay as needed (in milliseconds)
	}

}
