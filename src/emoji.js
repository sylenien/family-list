//import React from 'react';
import emoji from 'react-easy-emoji';

const smoji = (input) => {
	return emoji(input, {
		baseUrl: '//twemoji.maxcdn.com/2/svg',
    ext: '.svg',
    protocol: 'https:',
    size: "",
	})
}

export default smoji;