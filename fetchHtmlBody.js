import axios from 'axios';
import cheerio from 'cheerio';

async function fetchHtmlBody(url) {
  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      // Load the HTML content into Cheerio
      const $ = cheerio.load(response.data);

      // Find and return the body of the HTML document
      const body = $('body').html();
      return body;
    } else {
      console.error(`Failed to retrieve the webpage. Status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    return null;
  }
}

// Example usage
const url = 'https://gen-quo.vercel.app/gen/';

export { fetchHtmlBody };