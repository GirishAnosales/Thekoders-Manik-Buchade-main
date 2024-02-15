import { Component } from '@angular/core';
import { ProjectImagesService } from '../project-images.service';

@Component({
	selector: 'app-housing',
	templateUrl: './housing.component.html',
	styleUrls: ['./housing.component.scss']
})
export class HousingComponent {

	protected n_s_g_royal_one_pimple_nilakh = [
		"../../../assets/images/pages/projects/NEW_HOUSING/1 N.S.G.ROYAL ONE (PIMPLE NILAKH)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/1 N.S.G.ROYAL ONE (PIMPLE NILAKH)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/1 N.S.G.ROYAL ONE (PIMPLE NILAKH)/3.jpg",
	]

	// protected jigar_vyas_skylish_bliss_punawale_s_no_21 = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/1A. JIGAR VYAS-SKYLISH BLISS, PUNAWALE S.NO.21/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/1A. JIGAR VYAS-SKYLISH BLISS, PUNAWALE S.NO.21/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/1A. JIGAR VYAS-SKYLISH BLISS, PUNAWALE S.NO.21/3.jpg",
	// ]

	protected sai_tirupati_wadmukhwadi = [
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/2   SAI TIRUPATI (WADMUKHWADI)/7.jpg",
	] 

	// protected kate_nitin_heramb_deve = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/2A. KATE NITIN (HERAMB DEVE.)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/2A. KATE NITIN (HERAMB DEVE.)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/2A. KATE NITIN (HERAMB DEVE.)/3.jpg",
	// ]

	protected n_s_g_royal_miraj = [
		"../../../assets/images/pages/projects/NEW_HOUSING/3 N.S.G. ROYAL MIRAJ (WAKAD)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/3 N.S.G. ROYAL MIRAJ (WAKAD)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/3 N.S.G. ROYAL MIRAJ (WAKAD)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/3 N.S.G. ROYAL MIRAJ (WAKAD)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/3 N.S.G. ROYAL MIRAJ (WAKAD)/5.jpg",
	]

	// protected arekar_vilas_wakad = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/5.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/6.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/3A. AREKAR VILAS WAKAD/7.jpg",
	// ]

	protected skylark_kiwale = [
		"../../../assets/images/pages/projects/NEW_HOUSING/4  SKYLARK (KIWALE)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/4  SKYLARK (KIWALE)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/4  SKYLARK (KIWALE)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/4  SKYLARK (KIWALE)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/4  SKYLARK (KIWALE)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/4  SKYLARK (KIWALE)/6.jpg",
	]

	// protected agrawal_akash_etasha = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/4A. AGRAWAL AKASH - ETASHA/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/4A. AGRAWAL AKASH - ETASHA/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/4A. AGRAWAL AKASH - ETASHA/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/4A. AGRAWAL AKASH - ETASHA/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/4A. AGRAWAL AKASH - ETASHA/5.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/4A. AGRAWAL AKASH - ETASHA/6.jpg",
	// ]

	protected goyal_ganga_asmi_wakad = [
		"../../../assets/images/pages/projects/NEW_HOUSING/5 GOYAL GANGA ASMI (WAKAD)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/5 GOYAL GANGA ASMI (WAKAD)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/5 GOYAL GANGA ASMI (WAKAD)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/5 GOYAL GANGA ASMI (WAKAD)/4.jpg",
	]

	// protected abhishek_pandhre = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/5.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/6.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/5A. ABHISHEK PANDHRE/7.jpg",
	// ]

	protected grand_west_thergaon = [
		"../../../assets/images/pages/projects/NEW_HOUSING/6 GRAND WEST (THERGAON)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/6 GRAND WEST (THERGAON)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/6 GRAND WEST (THERGAON)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/6 GRAND WEST (THERGAON)/4.jpg",
	]

	// protected kate_satyawan_dapodi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/6A. KATE SATYAWAN,DAPODI/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/6A. KATE SATYAWAN,DAPODI/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/6A. KATE SATYAWAN,DAPODI/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/6A. KATE SATYAWAN,DAPODI/4.jpg",
	// ]

	protected nakoda_shine_city_chikhali = [
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/8.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/7  NAKODA (SHINE CITY) (CHIKHALI)/9.jpg",
	]

	// protected sarthak_buildtech_moshi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/7A. SARTHAK BUILDTECH MOSHI/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/7A. SARTHAK BUILDTECH MOSHI/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/7A. SARTHAK BUILDTECH MOSHI/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/7A. SARTHAK BUILDTECH MOSHI/4.jpg",
	// ]

	protected abhiman_vishwa_chikhali = [
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/8.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/9.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/10.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/11.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/12.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/8 ABHIMAN VISHWA (CHIKHALI)/13.jpg",
	]

	// protected chaudhary_ramlal_rahatni = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/8A. Chaudhary Ramlal, Rahatni/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/8A. Chaudhary Ramlal, Rahatni/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/8A. Chaudhary Ramlal, Rahatni/3.jpg",
	// ]

	protected ravikiran_phase_2_wadmukhwadi = [
		"../../../assets/images/pages/projects/NEW_HOUSING/9 RAVIKIRAN PHASE - 2 (WADMUKHWADI)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/9 RAVIKIRAN PHASE - 2 (WADMUKHWADI)/2.jpg",
	]

	// protected bansal_chikhali = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/9A. BANSAL CHIKHALI/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/9A. BANSAL CHIKHALI/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/9A. BANSAL CHIKHALI/3.jpg",
	// ]

	protected global_lotus = [
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/8.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/10  GLOBAL LOTUS/9.jpg",
	]

	// protected gk_associates = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/10A. GK Associates/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/10A. GK Associates/2.jpg",
	// ]

	protected samrajya_pimple_gurav = [
		"../../../assets/images/pages/projects/NEW_HOUSING/11 SAMRAJYA (PIMPLE GURAV)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/11 SAMRAJYA (PIMPLE GURAV)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/11 SAMRAJYA (PIMPLE GURAV)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/11 SAMRAJYA (PIMPLE GURAV)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/11 SAMRAJYA (PIMPLE GURAV)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/11 SAMRAJYA (PIMPLE GURAV)/6.jpg",
	]

	protected kolosus_greens_city = [
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/8.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/9.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/12 KOLOSUS GREENS CITY/10.jpg",
	]

	protected rajlakshmi_greens_shrikant_bhondve = [
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/13 RAJLAKSHMI GREENS SHRIKANT BHONDVE/8.jpg",
	]

	protected sumit_tayal = [
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/8.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/9.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/10.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/11.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/14  SUMIT TAYAL/12.jpg",
	]

	protected banthiya_m_n_landmark_tathawade = [
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/15  BANTHIYA M.N. LANDMARK (TATHAWADE)/7.jpg",
	]

	// protected banthiya_tathawade_hostel = [
	// 	"../../../assets/images/pages/projects/housing/banthiya-tathawade-hostel/1.jpg",
	// ]

	protected manav_group_wakad = [
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/1.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/2.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/3.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/4.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/5.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/6.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/7.jpeg",
		"../../../assets/images/pages/projects/NEW_HOUSING/16 MANAV GROUP (WAKAD)/8.jpeg",
	]

	protected amora = [
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/17 AMORA/7.jpg",
	] 

	protected estado_property_kiwale = [
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/7.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/8.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/9.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/10.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/11.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/12.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/18 ESTADO PROPERTY (KIWALE)/13.jpg",
	]

	protected shrirang_barne_royal_court = [
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/6.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/19 SHRIRANG BARNE (ROYAL COURT)/7.jpg",
	]

	protected goodwill_palette = [
		"../../../assets/images/pages/projects/NEW_HOUSING/20 GOODWILL PALETTE/1.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/20 GOODWILL PALETTE/2.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/20 GOODWILL PALETTE/3.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/20 GOODWILL PALETTE/4.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/20 GOODWILL PALETTE/5.jpg",
		"../../../assets/images/pages/projects/NEW_HOUSING/20 GOODWILL PALETTE/6.jpg",
	]

	// protected manas_valley = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/5.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/6.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/7.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/21 MANAS VALLEY/8.jpg",
	// ]

	// protected shri_residency_chikhali = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/5.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/6.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/7.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/8.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/22 SHRI RESIDENCY (CHIKHALI)/9.jpg",
	// ]

	// protected shubharambh_greens_ravet = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/23 SHUBHARAMBH GREENS (RAVET)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/23 SHUBHARAMBH GREENS (RAVET)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/23 SHUBHARAMBH GREENS (RAVET)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/23 SHUBHARAMBH GREENS (RAVET)/4.jpg",
	// ]

	// protected alpine_aura_borhadewadi_moshi =[
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/24  ALPINE AURA  (BORHADEWADI , MOSHI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/24  ALPINE AURA  (BORHADEWADI , MOSHI)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/24  ALPINE AURA  (BORHADEWADI , MOSHI)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/24  ALPINE AURA  (BORHADEWADI , MOSHI)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/24  ALPINE AURA  (BORHADEWADI , MOSHI)/5.jpg",
	// ]

	// protected patel_greens_sangwade = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/25 PETAL GREENS (SANGWADE)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/25 PETAL GREENS (SANGWADE)/2.jpg",
	// ]

	// protected sonesta_wakad = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/26 SONESTA (WAKAD)/1.jpg",
	// ]

	// protected nova_residency_tathawade = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/27  NOVA RESIDENCY (TATHAWADE)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/27  NOVA RESIDENCY (TATHAWADE)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/27  NOVA RESIDENCY (TATHAWADE)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/27  NOVA RESIDENCY (TATHAWADE)/4.jpg",
	// ]

	// protected mithila_heights_chikhali = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/28  MITHILA HEIGHTS (CHIKHALI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/28  MITHILA HEIGHTS (CHIKHALI)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/28  MITHILA HEIGHTS (CHIKHALI)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/28  MITHILA HEIGHTS (CHIKHALI)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/28  MITHILA HEIGHTS (CHIKHALI)/5.jpg",
	// ]

	// protected sankalp_vastu_chovisawadi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/29  SANKALP VASTU (CHOVISAWADI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/29  SANKALP VASTU (CHOVISAWADI)/2.jpg",
	// ]

	// protected sonigara_nilay = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/30 SONIGARA NILAY/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/30 SONIGARA NILAY/2.jpg",
	// ]

	// protected neelkanth_residency_chikhali = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/31  NEELKANTH RESIDENCY (CHIKHALI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/31  NEELKANTH RESIDENCY (CHIKHALI)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/31  NEELKANTH RESIDENCY (CHIKHALI)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/31  NEELKANTH RESIDENCY (CHIKHALI)/4.jpg",
	// ]

	// protected star_wood_tathawade = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/32 STAR WOOD (TATHAWADE)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/32 STAR WOOD (TATHAWADE)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/32 STAR WOOD (TATHAWADE)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/32 STAR WOOD (TATHAWADE)/4.jpg",
	// ]

	// protected ravi_kiran_phase_1_wadmukhwadi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/33 RAVI KIRAN PHASE - 1 ( WADMUKHWADI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/33 RAVI KIRAN PHASE - 1 ( WADMUKHWADI)/2.jpg",
	// ]

	// protected royal_group_kiwale = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/5.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/6.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/7.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/8.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/34  ROYAL GROUP (KIWALE)/9.jpg",
	// ]

	// protected kesar_valley_chikhali = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/35 KESAR VALLEY , ( CHIKHALI)/1.jpeg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/35 KESAR VALLEY , ( CHIKHALI)/2.jpeg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/35 KESAR VALLEY , ( CHIKHALI)/3.jpeg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/35 KESAR VALLEY , ( CHIKHALI)/4.jpeg",
	// ]

	// protected pushpak_dudulgaon = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/36 PUSHPAK (DUDALGAON)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/36 PUSHPAK (DUDALGAON)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/36 PUSHPAK (DUDALGAON)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/36 PUSHPAK (DUDALGAON)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/36 PUSHPAK (DUDALGAON)/5.jpg",
	// ]

	// protected soham_developers_kasarwadi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/37  SOHAM DEVELOPERS (KASARWADI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/37  SOHAM DEVELOPERS (KASARWADI)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/37  SOHAM DEVELOPERS (KASARWADI)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/37  SOHAM DEVELOPERS (KASARWADI)/4.jpg",
	// ]

	// protected kesar_kingston_moshi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/38  KESAR KINGSTON (MOSHI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/38  KESAR KINGSTON (MOSHI)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/38  KESAR KINGSTON (MOSHI)/3.jpg",
	// ]

	// protected devrai_dudulgaon = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/39  DEVRAI (DUDULGAON)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/39  DEVRAI (DUDULGAON)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/39  DEVRAI (DUDULGAON)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/39  DEVRAI (DUDULGAON)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/39  DEVRAI (DUDULGAON)/5.jpg",
	// ]

	// protected ravitej_dudulgaon = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/40  RAVITEJ (DUDULGAON)/1.jpg",
	// ]

	// protected raviuday_moshi = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/41 RAVIUDAY (MOSHI)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/41 RAVIUDAY (MOSHI)/2.jpg",
	// ]

	// protected sahil_vignesh_residency_wakad = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/42 SAHIL VIGNESH RESIDENCY (WAKAD)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/42 SAHIL VIGNESH RESIDENCY (WAKAD)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/42 SAHIL VIGNESH RESIDENCY (WAKAD)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/42 SAHIL VIGNESH RESIDENCY (WAKAD)/4.jpg",
	// ]

	// protected bansal_vista_ravet = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/43 BANSAL VISTA (RAVET)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/43 BANSAL VISTA (RAVET)/2.jpg",
	// ]

	// protected avenues_wakad = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/44  9 AVENUES (WAKAD)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/44  9 AVENUES (WAKAD)/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/44  9 AVENUES (WAKAD)/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/44  9 AVENUES (WAKAD)/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/44  9 AVENUES (WAKAD)/5.jpg",
	// ]

	// protected stellar_rhythm_wakad = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/45 STELLAR RHYTHM (WAKAD)/1.jpeg",
	// ]

	// protected lotus_vrundawan_kiwale = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/46  LOTUS VRUNDAWAN (KIWALE)/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/46  LOTUS VRUNDAWAN (KIWALE)/2.jpg",
	// ]

	// protected indraprabha_kiwale = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/47 INDRAPRABHA (KIWALE)/1.jpg",
	// ]

	// protected lotus_sanskruti = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/48 LOTUS SANSKRUTI/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/48 LOTUS SANSKRUTI/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/48 LOTUS SANSKRUTI/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/48 LOTUS SANSKRUTI/4.jpg",
	// ]

	// protected swapnapurti = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/49  SWAPNAPURTI/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/49  SWAPNAPURTI/2.jpg",
	// ]

	// protected amorahomes_wakad = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/50  AMORAHOMES (WAKAD)/1.jpg",
	// ]
	
	// protected k_county = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/51 11K COUNTY/1.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/51 11K COUNTY/2.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/51 11K COUNTY/3.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/51 11K COUNTY/4.jpg",
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/51 11K COUNTY/5.jpg",
	// ]

	// protected muktangan_shylam_ravet = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/52  MUKTANGAN SHYLAM (RAVET)/1.jpg",
	// ]

	// protected soniara_pearl_kiwale = [
	// 	"../../../assets/images/pages/projects/NEW_HOUSING/53 SONIGARA PEARL (S.NO. 42 , KIWALE)/1.jpg",
	// ]

	protected name = [
		"N.S.G.Royal One (Pimple Nilakh)",
		//"Jigar Vyas Skylish Bliss Punawale s no 21",
		"Sai Tirupati (Wadmukhwadi)",
		//"Kate Nitin (Heramb Deve.)",
		"N.S.G. Royal Miraj (Wakad)",
		//"Arekar Vilas Wakad",
		"Skylark (Kiwale)",
		//"Agrawal Akash Etasha",
		"Goyal Ganga Asmi (Wakad)",
		//"Abhishek Pandhre",
		"Grand West (Thergaon)",
		//"Kate Satyawan Dapodi",
		"Nakoda (Shine City) (Chikhali)",
		//"Sarthak Buildtech Moshi",
		"Abhiman Vishwa (Chikhali)",
		//"Chaudhary Ramlal Rahatni",
		"Ravikiran Phase-2 (Wadmukhwadi)",
		//"Bansal Chikhali",
		"Global Lotus",
		//"Gk Associates",
		"Samrajya (Pimple Gurav)",
		"kolosus Greens City",
		"Rajlakshmi Greens Shrikant Bhondve",
		"Sumit Tayal",
		"Banthiya M.N. Landmark (Tathawade)",
		"Manav Group (Wakad)",
		"Amora",
		"Estado Property (Kiwale)",
		"Shrirang Barne (Royal Court)",
		"Goodwill Palette",
		// "Manas Valley",
		// "Shri Residency (Chikhali)",
		// "Shubharambh Greens (Ravet)",
		// "Alpine Aura  (Borhadewadi , Moshi)",
		// "Petal Greens (Sangwade)",
		// "Sonesta (Wakad)",
		// "Nova Residency (Tathawade)",
		// "Mithila Heights (Chikhali)",
		// "Sankalp Vastu (Chovisawadi)",
		// "Sonigara Nilay",
		// "Neelkanth Residency (Chikhali)",
		// "Star Wood (Tathawade)",
		// "Ravi Kiran Phase - 1 ( Wadmukhwadi)",
		// "Royal Group (Kiwale)",
		// "Kesar Valley , ( Chikhali)",
		// "Pushpak (Dudalgaon)",
		// "Soham Developers (Kasarwadi)",
		// "Kesar Kingston (Moshi)",
		// "Devrai (Dudulgaon)",
		// "Ravitej (Dudulgaon)",
		// "Raviuday (Moshi)",
		// "Sahil Vignesh Residency (Wakad)",
		// "Bansal Vista (Ravet)",
		// "9 Avenues (Wakad)",
		// "Stellar Rhythm (Wakad)",
		// "Lotus Vrundawan (Kiwale)",
		// "Indraprabha (Kiwale)",
		// "Lotus Sanskruti",
		// "Swapnapurti",
		// "Amorahomes (Wakad)",

		// "11K County",
		// "Muktangan Shylam (Ravet)",
		// "Soniara Pearl (S.No. 42, Kiwale)"
	]
}
