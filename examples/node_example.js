// Run eventbrite-events-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "locations": [
    "ny--new-york"
  ],
  "categories": [
    "business"
  ],
  "maxItemsPerSearch": 20,
  "maxItems": 20
};
const run = await client.actor('kamerozkan/eventbrite-events-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
