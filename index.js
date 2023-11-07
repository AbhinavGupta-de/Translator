import { fetchTranslate } from './fetchTranslation.js';

/**
 * Translates the given value based on the type.
 *
 * @param {string} type - The type of value to translate. Can be 'text' or 'file'.
 * @param {string} value - The value to translate. Can be a string or a file path.
 * @param {string} sourceLanguage - The language of the value to translate.
 * @param {string} tragetLaungauge - The target language to translate the value to.
 */
const translate = (type, value, sourceLanguage, tragetLaungauge) => {
	switch (type) {
		case 'text':
			translateText(value, sourceLanguage, tragetLaungauge);
			break;
		case 'file':
			translateFile(value, sourceLanguage, tragetLaungauge);
			break;
		case 'dom':
			translateDOM(value, sourceLanguage, tragetLaungauge);
		default:
			console.log('Invalid type');
			break;
	}
};

const translateText = (text, sourceLanguage, tragetLaungauge) => {
	fetchTranslate(sourceLanguage, text, tragetLaungauge).then((data) => {
		console.log(data);
	});
};

const translateDOM = (element, sourceLanguage, tragetLaungauge) => {
	if (element instanceof Element) {
		//Function of task1
		//task1(element, sourceLanguage, tragetLaungauge);
	} else {
		return "Not a DOM element";
	}
}

translate('text', 'This is my name', 1, 2);
