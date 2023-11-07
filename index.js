import { fetchTranslate } from './fetchTranslation.js';

/**
 * Translates the given value based on the type.
 *
 * @param {string} type - The type of value to translate. Can be 'text' or 'file'.
 * @param {string} value - The value to translate. Can be a string or a file path.
 * @param {string} sourceLanguage - The language of the value to translate.
 * @param {string} targetLaungauge - The target language to translate the value to.
 */
const translate = (type, value, sourceLanguage, targetLaungauge) => {
	switch (type) {
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

const translateDOM = (element, sourceLanguage, targetLaungauge) => {
	if (element instanceof Element) {
		//Function of task1
		//task1(element, sourceLanguage, targetLaungauge);
	} else {
		return "Not a DOM element";
	}
}

translate('text', 'This is my name', 1, 2);
