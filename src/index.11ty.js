exports.data = {
	layout: 'base.html',
	title: 'Javascript and more',
	metaDescription: 'I love learning new things, helping people and what I do.',
};

exports.render = function () {
	return /* html */ `
		<section class="home">
			<div class="homeAbout">
				<div>
					<h1 class="homeAbout__title">Bruno Rodrigues</h1>
					<h2 class="homeAbout__subtitle">Software Engineer</h2>
					<p class="homeAbout__miniBio">
						I'm a
						<a 
							href="https://github.com/brunordgs" 
							target="_blank" 
							rel="nofollow noreferrer">
						software engineer</a>
						and a good burger taster.
						I love learning new things, helping people and what I do.
					</p>
				</div>
			</div>
		</section>
	`;
};
