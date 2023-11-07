import { fetchTranslate } from './fetchTranslation.js';
import { fetchHtmlBody } from './fetchHtmlBody.js';

/**
 * Translates the given value based on the type.
 *
 * @param {string} type - The type of value to translate. Can be 'text' or 'file'.
 * @param {string} value - The value to translate. Can be a string or a file path.
 * @param {string} sourceLanguage - The language of the value to translate.
 * @param {string} targetLangauge - The target language to translate the value to.
 */

async function getHtmlBody (url,sourceLanguage,tragetLaungauge){
	fetchHtmlBody(url).then((body) => {
		translate('text',body.trim(), sourceLanguage, tragetLaungauge);
	})
}

const translate = (type, value, sourceLanguage, targetLaungauge) => {

	switch (type) {
		case 'url':
			getHtmlBody(value,sourceLanguage,tragetLaungauge);
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
		return "Not a DOM element";
	}
}

