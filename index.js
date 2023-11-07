import { fetchTranslate } from './fetchTranslation.js';
import { fetchHtmlBody } from './fetchHtmlBody.js';

/**
 * Translates the given value based on the type.
 *
 * @param {string} type - The type of value to translate. Can be 'text' or 'file'.
 * @param {string} value - The value to translate. Can be a string or a file path.
 * @param {string} sourceLanguage - The language of the value to translate.
 * @param {string} targetLaungauge - The target language to translate the value to.
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
			translateText(value, sourceLanguage, targetLaungauge);
			break;
		case 'file':
			translateFile(value, sourceLanguage, targetLaungauge);
			break;
		case 'dom':
			translateDOM(value, sourceLanguage, targetLaungauge);
		default:
			console.log('Invalid type');
			break;
	}
};

const translateText = (text, sourceLanguage, targetLaungauge) => {
	fetchTranslate(sourceLanguage, text, targetLaungauge).then((data) => {
		console.log(data);
	});
};

translate('url', 'https://gen-quo.vercel.app/gen/', 1, 2);

const translateDOM = (element, sourceLanguage, targetLaungauge) => {
	if (element instanceof Element) {
		//Function of task1
		//task1(element, sourceLanguage, targetLaungauge);
	} else {
		return "Not a DOM element";
	}
}

