import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
	selector: 'app-careers-form',
	templateUrl: './careers-form.component.html',
	styleUrls: ['./careers-form.component.scss']
})
export class CareersFormComponent {
	form!: FormGroup
	formattedValue: string = '';

	FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@mbarchitects.co.in";
	TESTING_URL = "https://formsubmit.co/ajax/anosales207@gmail.com";

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private matDialog: MatDialog,
	) {
		this.form = this.fb.group({
			fullName: ['', Validators.required],
			phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
			email: ['', [Validators.required, Validators.email]],
			message: [''],
			resume: [''],
			work: [''],
		});
	}

	onInputChange(event: Event, controlName: string): void {
		const inputElement = event.target as HTMLInputElement;
		let inputValue = inputElement.value;

		// Remove non-numeric characters and hyphens
		inputValue = inputValue.replace(/[^\d-]/g, '');

		// Ensure the format is valid (e.g., "1-2-3-4")
		if (/^(\d+-?)+\d+$/.test(inputValue)) {
			this.formattedValue = inputValue;
		} else {
			// You can display an error message or take other actions for invalid input.
			// For example, you can clear the input field or show an error message.
			this.formattedValue = '';
		}
	}

	onFileChange(event: any, controlName: string) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.form.get(controlName)?.setValue(file);
		}
	}

	//onSubmit()
	onSubmit() {
		const formData = new FormData();
		formData.append('Full Name: ', this.form.get('fullName')!.value);
		formData.append('Phone Number: ', this.form.get('phone')!.value);
		formData.append('Email: ', this.form.get('email')!.value);
		formData.append('Message: ', this.form.get('message')!.value);

		fetch(this.TESTING_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				// this.matDialog.open(FormSubmitSuccessfullyComponent);
				this.openSuccessSnackBar();
			})
			.catch(error => {
				this.openFailureSnackBar();
			});
	}

	//Successful Snackbar addDoNotSellMyInfoUser() event
	openSuccessSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message sent!', 'Close', config);
	}

	//Failure Snackbar addDoNotSellMyInfoUser() event
	openFailureSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message not sent!', 'Close', config);
	}
}
