var scroll_btn = document.getElementById('intro_scroll');
var window_height = 1200;
var scrolled_section = window_height * 0.8;

scroll_btn.addEventListener('click', () => {
		window_height = window.innerHeight;
		scrolled_section = window_height * 0.76;
		setTimeout(() => window.scrollTo(0, scrolled_section), 80)
})
