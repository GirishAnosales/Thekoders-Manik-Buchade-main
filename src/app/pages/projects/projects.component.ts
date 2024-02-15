import { Component } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
	protected projects = [
		{
			no: 1,
			image: '../../../assets/images/pages/projects/INSTITUTIONAL1.jpg',
			routerLink: 'institutional',
			name: 'Institutional',
		},
		{
			no: 2,
			image: '../../../assets/images/pages/projects/HOUSING1.jpg',
			routerLink: 'housing',
			name: 'Housing',
		},
		{
			no: 3,
			image: '../../../assets/images/pages/projects/COMMERCIAL1.jpeg',
			routerLink: 'commercial',
			name: 'Commercial',
		},
		{
			no: 4,
			image: '../../../assets/images/pages/projects/BUNGALOW1.jpg',
			routerLink: 'bungalow',
			name: 'Bungalow',
		},
		{
			no: 5,
			image: '../../../assets/images/pages/projects/interior1.jpeg',
			routerLink: 'interior',
			name: 'Interior',
		},
		{
			no: 6,
			image: '../../../assets/images/pages/projects/LANDSCAPE1.jpeg',
			routerLink: 'landscape',
			name: 'Landscape',
		},
	]
}
