#Scipt for converting TSV to our format

import pandas as pd
import json

file_location = raw_input("Enter file name or location(in TSV format):: ")
resources_data = pd.read_table(file_location)
resources_data = resources_data.fillna("")
temp = resources_data
for i in range(resources_data.shape[0]):
    temp_tag = temp.tags[i]
    temp_tags = temp_tag.split(",")
    temp.set_value(i, 'tags', temp_tags)

print test.to_json(orient="records")
