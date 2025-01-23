import axios from 'axios';

function init() {
	const donateForm = document.getElementById('donate');
	console.log(donateForm);

	donateForm.addEventListener('submit', (evt) => {
		evt.preventDefault();
	});
}

init();
