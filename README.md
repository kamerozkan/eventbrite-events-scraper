# Eventbrite Scraper - Events, Organizers & Ticket Prices

Eventbrite scraper for events by city, category or search URL: title, dates, venue and address, organizer, ticket price range, free or paid, online flag and URL. For event marketers, sponsorship and B2B sales teams and local event apps. New events alert across runs.

**[Run it on Apify Store](https://apify.com/kamerozkan/eventbrite-events-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/eventbrite-events-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/eventbrite-events-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/eventbrite-events-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "locations": [
    "ny--new-york"
  ],
  "categories": [
    "business"
  ],
  "maxItemsPerSearch": 20,
  "maxItems": 20
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "eventId": "1996462300484",
    "name": "London Card Show: 30th October -1st November 2026",
    "url": "https://www.eventbrite.co.uk/e/london-card-show-30th-october-1st-november-2026-tickets-1996462300484",
    "startLocal": "2026-10-30T14:00",
    "endLocal": "2026-11-01T16:00",
    "timezone": "Europe/London",
    "isOnline": false,
    "isCancelled": false,
    "summary": "Europe's Biggest Card Show is back and going to be bigger than ever for our 22nd Show.\n30th-1st November 2026 at Sandown Racecourse.",
    "category": "Hobbies & Special Interest",
    "subcategory": "Anime/Comics",
    "format": "Tradeshow, Consumer Show, or Expo",
    "tags": [
      "Football",
      "Pokemon",
      "Cards",
      "London",
      "Collectibles",
      "Tcg",
      "Sportscards",
      "Tradingcards",
      "cardshow",
      "londoncardshow"
    ],
    "venueName": "Sandown Park Racecourse",
    "address": "Portsmouth Road, Esher, KT10 9AJ",
    "city": "Esher",
    "region": "England",
    "postalCode": "KT10 9AJ",
    "country": "GB",
    "latitude": 51.3733267,
    "longitude": -0.3617921,
    "organizerId": "56165011123",
    "organizerUrl": "https://www.eventbrite.co.uk/o/london-card-show-56165011123",
    "imageUrl": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F696043389%2F1250146664283%2F1%2Foriginal.20240213-123503?auto=format%2Ccompress&q=75&sharp=10&s=2df5b6d33b76e5fdce301ea37a726ec4",
    "ticketsUrl": "https://www.eventbrite.com/checkout-external?eid=1996462300484",
    "publishedAt": "2026-08-03T15:39:09Z",
    "search": "all in united-kingdom--london",
    "searchTitle": "Things to Do in London, United Kingdom This Month - Events & Activities",
    "page": 1,
    "position": 1,
    "totalResults": 10000,
    "searchUrl": "https://www.eventbrite.com/d/united-kingdom--london/all-events--this-month/?page=1",
    "organizerName": "London Card Show",
    "startDate": "2026-10-30",
    "endDate": "2026-11-01",
    "eventStatus": "EventScheduled",
    "currency": "GBP",
    "availability": "InStock",
    "minPrice": 0,
    "maxPrice": 116,
    "isFree": false,
    "salesStatus": "on_sale",
    "ageRestriction": null,
    "durationMinutes": 3000,
    "scrapedAt": "2026-10-16T08:34:49Z",
    "isNew": true,
    "firstSeenAt": "2026-10-16T08:34:26Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/eventbrite-events-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
