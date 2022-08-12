exports.data = {
	layout: 'base.html',
	title: 'About me',
};

exports.render = function () {
	return /* html */ `
    <section class="container">
			<div class="aboutContent">
					<h1 class="aboutContent__title">love <span class="colorHighlight">what I do</span></h1>
			</div>
		</section>
  `;
};
