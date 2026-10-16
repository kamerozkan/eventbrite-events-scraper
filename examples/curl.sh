#!/usr/bin/env bash
# Run eventbrite-events-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~eventbrite-events-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"locations": ["ny--new-york"], "categories": ["business"], "maxItemsPerSearch": 20, "maxItems": 20}'
