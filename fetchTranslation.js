import axios from 'axios';

// API endpoint for translation
const API_URL = 'https://bhashiniproject.up.railway.app/translate';

/**
 * Fetches translation from the API.
 * @param {string} source - The source language code.
 * @param {string} content - The content to be translated.
 * @param {string} target - The target language code.
 * @returns {Promise<string>} - A promise that resolves to the translated content.
 */
const fetchTranslate = async (source, content, target) => {
	const req = { source, content, target }; // Create a request object with source, content, and target languages.

	try {
		const response = await axios.post(`${API_URL}`, req); // Send a POST request to the translation API.

		// Return the translated content received from the API response.
		return response.data;
	} catch (error) {
		console.error(error); // Log any errors that occur during the request.
	}
};

export { fetchTranslate };
