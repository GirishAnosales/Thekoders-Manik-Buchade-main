import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectImagesService } from '../project-images.service';

@Component({
	selector: 'app-sub-projects',
	templateUrl: './sub-projects.component.html',
	styleUrls: ['./sub-projects.component.scss']
})
export class SubProjectsComponent implements OnInit {
	selectedProject!: string;
	projectImages: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private projectImagesService: ProjectImagesService
	) { }

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.selectedProject = params['sub-project'];
			// this.projectImages = this.projectImagesService.getImagesForProject(this.selectedProject);
		});
	}
}
