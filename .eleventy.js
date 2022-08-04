module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ './src/_css': '/css' });
	eleventyConfig.addPassthroughCopy({ './src/_fonts': '/fonts' });

	return {
		dir: {
			data: '_data',
			input: 'src',
			includes: '_includes',
			layouts: '_layouts',
		},
	};
};
