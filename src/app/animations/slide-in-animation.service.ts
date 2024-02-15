import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SlideInAnimationService {

	static slideInFromTop = trigger('slideInFromTop', [
		transition(':enter', [
			animate('0.7s ease-out', keyframes([
				style({ transform: 'translateY(-100%)' }),
				style({ transform: 'translateY(0)' })
			]))
		]),
		transition(':leave', [
			animate('0.5s ease-in', keyframes([
				style({ transform: 'translateY(0)' }),
				style({ transform: 'translateY(-100%)' })
			]))
		]),
		transition('void => *', [
			animate('0s') // No animation for initial state (void to any state)
		])
	]);

	static slideOutToTop = trigger('slideOutToTop', [
		transition(':leave', [
			animate('1s ease-in-out', style({ transform: 'translateY(-100%)' }))
		])
	]);

}
