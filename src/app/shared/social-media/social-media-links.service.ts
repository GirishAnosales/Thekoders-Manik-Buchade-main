import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SocialMediaLinksService {

	private social_media_links = {
		facebook: "https://facebook.com/profile.php?id=100094549921436&mibextid=LQQJ4d",
		instagram: "https://www.instagram.com/manikbuchade_architects?igsh=MWp1MjlmcmI5dGNhag==",
		linkedin: "",
		//pinterest: "",
		youtube: "",
	}

	constructor() { }

	getSocialMediaLinksService(){
		return this.social_media_links;
	}
}
