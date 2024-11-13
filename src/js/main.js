import '../scss/styles.scss'

// import * as bootstrap from 'bootstrap'

const uptimeMethods = [
	{
		search: '1. Metodologia de Resultado',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '2. Inglês por Neurolinguística e Mnemónica',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '3. Professores 100% NATIVOS',
		uponline: 'SIM',
		apps: 'SIM',
		conventionalSchools: 'SIM',
	},
	{
		search: '4. Mutliplataforma - COMPUTADOR, TABLET E SMARTPHONE',
		uponline: 'SIM',
		apps: 'SIM',
		conventionalSchools: 'SIM',
	},
	{
		search: '5. Plataforma de REALIDADE VIRTUAL E AUMENTADA',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '6. Tempo de Curso - DEFINIDO',
		uponline: 'SIM - 18 meses',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '7. Valor Completo do Curso',
		uponline: 'SIM - BOLSA',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '8. Plano de Estudo - DEFINIDO e INDIVIDUAL',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '9. Material Complementar | E-BOOKS | PDF',
		uponline: 'SIM',
		apps: 'SIM',
		conventionalSchools: 'SIM',
	},
	{
		search: '10. Video-Aulas IMERSIVAS',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '11. 100% CONVERSAÇÃO',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '12. Curso de Inglês COMPLETO | FALAR, LER, ESCREVER, OUVIR',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'SIM - 05/07 ANOS',
	},
	{
		search: '13. Certificação - FLUÊNCIA B1/B2',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'SIM',
	},
	{
		search: '14. KIT Exclusivo - AVR+ UPTIME',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'NÃO',
	},
	{
		search: '15. INÍCIO EM QUALQUER DIA DO ANO',
		uponline: 'SIM',
		apps: 'SIM',
		conventionalSchools: 'NÃO',
	},
	{
		search: '16. Do ZERO à Fluência - Não sabe NADA de Inglês',
		uponline: 'SIM',
		apps: 'NÃO',
		conventionalSchools: 'SIM - 05/07 ANOS',
	},
]

/**
* Função que gera o HTML para cada linha de dados.
* @param {Object} item - O item contendo os dados.
* @returns {string} - HTML do bloco flex.
*/
function generateFlexRowHTML(item) {
	return `
			<div class="mt-2 content-row">
					<span class="w-50">${item.search}</span>
					<span class="w-25">${item.uponline}</span>
					<span class="w-25">${item.apps}</span>
					<span class="w-25">${item.conventionalSchools}</span>
			</div>
	`;
}

/**
* Função para renderizar os blocos de dados.
*/
function renderFlexRows() {
	const container = document.getElementById('table-content');

	const rowsHTML = uptimeMethods
		.map(item => generateFlexRowHTML(item))
		.join('');

	container.innerHTML = rowsHTML;
}

document.addEventListener('DOMContentLoaded', renderFlexRows);

const mainVideo = document.getElementById('mainVideo');
const secondaryVideos = document.querySelectorAll('.secondary-video');

secondaryVideos.forEach(video => {
	video.addEventListener('click', function () {
		const clickedVideoSrc = video.querySelector('source').src;
		const posterAssetSecondaryVideo = video.getAttribute('poster');
		const mainVideoSrc = mainVideo.querySelector('source').src;
		const posterMainVideo = mainVideo.getAttribute('poster');

		video.querySelector('source').src = mainVideoSrc;
		video.setAttribute('poster', posterMainVideo);
		mainVideo.querySelector('source').src = clickedVideoSrc;
		mainVideo.setAttribute('poster', posterAssetSecondaryVideo);

		video.load();
		mainVideo.load();
		mainVideo.play();
	});
});

import posterOne from '../assets/thumb-chapters-one.png';
import posterTwo from '../assets/thumb-chapters-two.png';
import posterThree from '../assets/thumb-chapters-three.png';
import posterFour from '../assets/thumb-chapters-four.png';
import posterFive from '../assets/thumb-chapters-five.png';
import posterSix from '../assets/thumb-chapters-six.png';
import posterSeven from '../assets/thumb-chapters-seven.png';

const videoUrls = [
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%201%20-.mp4?alt=media&token=f3605c53-ba08-4281-a9bc-15ab9b79caa9',
		poster: posterOne
	},
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%202-.mp4?alt=media&token=65cb6153-376c-400e-add4-f84571add5b0',
		poster: posterTwo
	},
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%203%20-.mp4?alt=media&token=e3ee9c26-5f4e-4774-a6c7-46bf5145f0fa',
		poster: posterThree
	},
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%204%20-.mp4?alt=media&token=007ddf98-2779-448c-9f2b-df209ac6e208',
		poster: posterFour
	},
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%205%20.mp4?alt=media&token=89dcd5a9-de42-4a5f-b0d3-eef1b968abf1',
		poster: posterFive
	},
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%206%20-.mp4?alt=media&token=77e9f429-2c80-4193-af92-e288eb917645',
		poster: posterSix
	},
	{
		src: 'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%207%20-.mp4?alt=media&token=8752e83d-bc58-4cd1-a334-cd69319d7e64',
		poster: posterSeven
	},
];

let currentIndex = 0;

const mainChapter = document.getElementById('mainChapter');
const leftChapter = document.getElementById('leftChapter');
const rightChapter = document.getElementById('rightChapter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateVideos() {
	mainChapter.src = videoUrls[currentIndex].src;
	mainChapter.poster = videoUrls[currentIndex].poster;
	leftChapter.src = videoUrls[(currentIndex - 1 + videoUrls.length) % videoUrls.length].src;
	leftChapter.poster = videoUrls[(currentIndex - 1 + videoUrls.length) % videoUrls.length].poster;
	rightChapter.src = videoUrls[(currentIndex + 1) % videoUrls.length].src;
	rightChapter.poster = videoUrls[(currentIndex + 1) % videoUrls.length].poster;
}

updateVideos();

nextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % videoUrls.length;
	updateVideos();
});

prevBtn.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
	updateVideos();
});
