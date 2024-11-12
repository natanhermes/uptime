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
