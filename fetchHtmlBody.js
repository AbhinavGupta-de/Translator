import axios from 'axios'; // Import the Axios library for making HTTP requests.
import cheerio from 'cheerio'; // Import the Cheerio library for parsing HTML.

// Async function to fetch the HTML body content of a web page.
async function fetchHtmlBody(url) {
	try {
		const response = await axios.get(url); // Send an HTTP GET request to the specified URL.

		if (response.status === 200) {
			// Check if the response status is 200 (OK).
			// Load the HTML content into Cheerio for easier parsing.
			const $ = cheerio.load(response.data);

			// Find and return the HTML content of the 'body' element of the HTML document.
			const body = $('body').html();
			return body;
		} else {
			// If the response status is not 200, log an error message.
			console.error(
				`Failed to retrieve the webpage. Status code: ${response.status}`
			);
			return null;
		}
	} catch (error) {
		// Handle any errors that occur during the HTTP request or parsing.
		console.error(`An error occurred: ${error.message}`);
		return null;
	}
}

// Example usage: Specify the URL of the web page you want to fetch.
const url = 'https://gen-quo.vercel.app/gen/';

export { fetchHtmlBody }; // Export the fetchHtmlBody function for use in other parts of your code.
