import axios from 'axios';

// const LANG = {
//  English: 1,
//  Hindi: 2,
//  Bengali: 3,
//  Gujarati: 4,
//  Kannada: 5,
//  Malayalam: 6,
//  Marathi: 7,
//  Odia: 8,
//  Punjabi: 9,
//  Tamil: 10,
//  Telugu: 11,
//  Assamese: 12,
// };

const API_URL = 'https://bhashiniproject.up.railway.app/translate';

/**
 * Fetches translation from API
 * @param {string} source - The source language code
 * @param {string} content - The content to be translated
 * @param {string} target - The target language code
 * @returns {Promise<string>} - The translated content
 */
const fetchTranslate = async (source, content, target) => {
	const req = { source, content, target };

	try {
		const response = await axios.post(`${API_URL}`, req);
		// console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export { fetchTranslate };
