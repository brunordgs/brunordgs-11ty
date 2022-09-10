exports.data = {
	layout: 'base.html',
	title: 'Bruno Rodrigues',
	metaDescription:
		'I help developers develop in tech, learn through communities and build products that make people\'s lives easier.',
};

exports.render = function () {
	return /* html */ `
		<section class="container home">
			<div class="homeAbout">
				<div>
					<h1 class="homeAbout__title">
						<span>Bruno</span> <span>Rodrigues</span>
					</h1>
					<h2 class="homeAbout__subtitle">Software Engineer</h2>
					<p class="homeAbout__miniBio">
						I'm a
						<a href="https://github.com/brunordgs" class="colorHighlight" target="_blank" rel="nofollow noreferrer">
							software engineer</a>
						and a lover of new technologies. I help developers develop in tech, learn through
						communities and build products that make people's lives easier.
					</p>
				</div>

				<div>
					<div class="home__item">
						<h3 class="home__itemTitle">
							know <span class="colorHighlight">who I am</span>
						</h3>

						<div class="homeCard">
							<h4 class="homeCard__title">A little more about me</h4>
							<p>
								Build some stuff, improving every day is a way to make me grow up and one day I'll be there. You should do the same.
							</p>
							<div class="homeCard__actions">
								<a
									href="https://github.com/brunordgs"
									class="homeCard__button"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										aria-label="Github logo"
										height="24"
										width="24"
										viewBox="0 0 496 512"
									>
										<path
											fill="currentColor"
											d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
										/>
									</svg>
									Check Github
								</a>

								<a href="/about" class="homeCard__seeAllCta">
									See all about who I am
									<span class="colorHighlight" aria-hidden="true">
										→
									</span>
								</a>
							</div>
						</div>
					</div>

					<!-- <div class="home__item">
						<h3 class="home__itemTitle">
							check <span class="colorHighlight">my stuff</span>
						</h3>

						<div class="homeCard">
							<h4 class="homeCard__title">Maybe I can help you</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab maiores iste magni adipisci. Vero ea ab neque, sunt voluptates, laboriosam corrupti repellat.
							</p>
							<div class="homeCard__actions">
								<a href="/projects" class="homeCard__button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
									</svg>
									Learn more
								</a>

								<a href="/projects" class="homeCard__seeAllCta">
									See all projects
									<span class="colorHighlight" aria-hidden="true">
										→
									</span>
								</a>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</section>
	`;
};
