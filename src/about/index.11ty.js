exports.data = {
	layout: 'base.html',
	title: 'About me | Bruno Rodrigues',
};

exports.render = function () {
	return /* html */ `
    <section class="container">
			<main class="about">
				<h1 class="about__title">know <span class="colorHighlight">who I am</span></h1>
			
				<div class="about__bio">
					<img class="about__mePhoto" src="https://github.com/brunordgs.png" alt="Bruno Rodrigues" />

					<div>
						<h2>Hey there, I'm Bruno.</h2>

						<h3>I help developers develop in technology, learn through communities and love what they do.</h3>
						<p>I'm a Software Engineer who loves helping people through coding.</p>
					</div>
				</div>
			</main>
		</section>
  `;
};
