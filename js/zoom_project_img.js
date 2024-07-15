var projects = document.querySelectorAll('.project_img');
var modal = document.getElementById('project-modal');
var close_btn = document.getElementById('close_btn');

var project_img = undefined;
var prjct_img_title = document.querySelectorAll('.gui');
var modal_img = document.getElementById('modal_img');
var modal_img_title = document.getElementById('modal_img_title');


console.log();
for(let i = 0, len = projects.length; i < len; i++) {
	projects[i].addEventListener('click', () => {
			project_img = projects[i].getAttribute('src');
			modal_img.setAttribute('src', project_img);
			modal_img_title.innerText = prjct_img_title[i].innerText;
			modal.style.display = 'block';
	});
}

/* 
	erro
		Ordem da lista de títulos das imagens
		projetos sem UI
*/

close_btn.addEventListener('click', () => {
	modal.style.display = 'none';
});
