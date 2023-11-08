// Import necessary functions for translation and HTML content retrieval.
import { fetchTranslate } from './fetchTranslation.js';
import { fetchHtmlBody } from './fetchHtmlBody.js';

/**
 * Translates the given input based on the type of input.
 * @param {string} type - The type of input. Can be 'url', 'text', 'file', or 'dom'.
 * @param {string} value - The input to be translated.
 * @param {string} sourceLanguage - The language of the input.
 * @param {string} targetLanguage - The language to translate the input to.
 */
const translate = (type, value, sourceLanguage, targetLanguage) => {
	switch (type) {
		case 'url':
			// If the input type is a URL, fetch the HTML body and translate it as DOM.
			getHtmlBody(value, sourceLanguage, targetLanguage);
			break;
		case 'text':
			// If the input type is text, directly translate the text.
			translateText(value, sourceLanguage, targetLanguage);
			break;
		case 'file':
			// If the input type is a file, translate the content of the file.
			translateFile(value, sourceLanguage, targetLanguage);
			break;
		case 'dom':
			// If the input type is a DOM element, perform DOM translation (Task 1).
			// You can call a function like task1(element, sourceLanguage, targetLanguage) here.
			break;
		default:
			console.log('Invalid type');
			break;
	}
};

// Function to fetch HTML body from a URL and trigger DOM translation.
async function getHtmlBody(url, sourceLanguage, targetLanguage) {
	fetchHtmlBody(url).then((body) => {
		// Translate the retrieved HTML body as DOM.
		translate('dom', body.trim(), sourceLanguage, targetLanguage);
	});
}

// Function to translate text directly.
const translateText = (text, sourceLanguage, targetLanguage) => {
	fetchTranslate(sourceLanguage, text, targetLanguage).then((data) => {
		console.log(data);
	});
};

// Function to translate a DOM element (Task 1).
const translateDOM = (element, sourceLanguage, targetLanguage) => {
	if (element instanceof Element) {
		// You can implement translation for DOM elements here.
		// For example, you can use the DOM API to traverse and modify the DOM.
	} else {
		return 'Not a DOM element';
	}
};
