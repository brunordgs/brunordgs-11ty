module.exports = function (eleventyConfig) {
	return {
		dir: {
			data: '_data',
			input: 'src',
			output: '_site',
			includes: '_includes',
			layouts: '_layouts',
		},
	};
};
