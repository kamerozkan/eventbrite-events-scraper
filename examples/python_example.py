"""Run eventbrite-events-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'locations': ['ny--new-york'], 'categories': ['business'], 'maxItemsPerSearch': 20, 'maxItems': 20}
run = client.actor("kamerozkan/eventbrite-events-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
