import { fetchTranslate } from './fetchTranslation.js';
import { fetchHtmlBody } from './fetchHtmlBody.js';

/**
 * Translates the given input based on the type of input.
 * @param {string} type - The type of input. Can be 'url', 'text', 'file', or 'dom'.
 * @param {string} value - The input to be translated.
 * @param {string} sourceLanguage - The language of the input.
 * @param {string} targetLanguage - The language to translate the input to.
 */
const translate = (type, value, sourceLanguage, targetLangauge) => {
	switch (type) {
		case 'url':
			getHtmlBody(value, sourceLanguage, targetLangauge);
			//translate('text',fetchBody(value), sourceLanguage, tragetLaungauge);
			break;
		case 'text':
			translateText(value, sourceLanguage, targetLangauge);
			break;
		case 'file':
			translateFile(value, sourceLanguage, targetLangauge);
			break;
		case 'dom':
			translateDOM(value, sourceLanguage, targetLangauge);
		default:
			console.log('Invalid type');
			break;
	}
};

async function getHtmlBody(url, sourceLanguage, targetLangauge) {
	fetchHtmlBody(url).then((body) => {
		translate('text', body.trim(), sourceLanguage, targetLangauge);
	});
}

const translateText = (text, sourceLanguage, targetLangauge) => {
	fetchTranslate(sourceLanguage, text, targetLangauge).then((data) => {
		console.log(data);
	});
};

const translateDOM = (element, sourceLanguage, targetLangauge) => {
	if (element instanceof Element) {
		//Function of task1
		//task1(element, sourceLanguage, targetLangauge);
	} else {
		return 'Not a DOM element';
	}
};
