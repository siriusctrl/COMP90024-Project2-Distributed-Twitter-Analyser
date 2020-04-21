import gzip
import json
import io

with gzip.open("./hydrated/coronavirus-tweet-id-2020-01-27-22.jsonl.gz", "rb") as f:
    with io.BufferedReader(f) as r:
        for line in r:
            print(json.loads(line)['place'])
            exit(1)
