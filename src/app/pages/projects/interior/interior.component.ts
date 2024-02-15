import { Component } from '@angular/core';

@Component({
	selector: 'app-interior',
	templateUrl: './interior.component.html',
	styleUrls: ['./interior.component.scss']
})
export class InteriorComponent {

	protected ashok_chandgude = [
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/landscape/Landscape 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 9.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 10.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 11.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 12.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 13.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 14.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 15.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 16.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 17.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 18.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok chandgude/portrait/Portrait 19.jpg',
	];

	protected ashok_salke = [
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 12.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 14.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/landscape/Landscape 18.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/portrait/Portrait 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/portrait/Portrait 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/portrait/Portrait 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/ashok salke/portrait/Portrait 4.jpg',
	]

	protected backyard_palms = [
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 9.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 10.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 11.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 12.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 13.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 14.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/landscape/Landscape 15.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/portrait/Portrait 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/portrait/Portrait 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/portrait/Portrait 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/portrait/Portrait 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/portrait/Portrait 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/backyard palms/portrait/Portrait 6.jpg',
	]

	protected bhodle = [
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 9.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/landscape/Landscape 10.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 9.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 10.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 11.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 12.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 13.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 14.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 15.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 16.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 17.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 18.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 19.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 20.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 21.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 22.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 23.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 24.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 25.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 26.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 27.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 28.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 29.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 30.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 31.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 32.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/bhodle/portrait/Portrait 33.jpg',
	]

	protected deore = [
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/landscape/Landscape 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/landscape/Landscape 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/landscape/Landscape 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 5.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/deore/portrait/Portrait 8.jpg',
	]

	// protected kimaya_group = [
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Lasdscape 01.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Landscape 02.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Landscape 03.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Landscape 04.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Landscape 05.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Landscape 06.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/landscape/Landscape 07.jpg',
	// 	'../../../assets/images/pages/projects/interior/kimaya group/portrait/Portrait 01.jpg',
	// ]

	protected mandar_sawant = [
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 1.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 2.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 3.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 4.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 6.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 7.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 8.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 9.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 10.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/landscape/Landscape 11.jpg',
		'../../../assets/images/pages/projects/NEW_INTERIOR/mandar sawant/portrait/Portrait 1.jpg',
	]

	protected name = [
		"ashok chandgude",
		"ashok salke",
		"backyard palms",
		"bhodle",
		"deore",
		//"kimaya group",
		"mandar sawant",
	]
}
