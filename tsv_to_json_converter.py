#Scipt for converting TSV to our format

import pandas as pd
import json
import sys

#file_location = raw_input("Enter file name or location in TSV format (Resources.tsv):")
# if file_location == "":
#     file_location = "Resources.tsv"

if len(sys.argv) > 1:
    file_location = sys.argv[1]
else:
    file_location = "Resources.tsv"

resources_data = pd.read_table(file_location)
resources_data = resources_data.fillna("")
temp = resources_data
categories = set()
for i in range(resources_data.shape[0]):
    temp_tag = temp.Tags[i]
    temp_tags = temp_tag.split(",")
    temp.set_value(i, 'Tags', temp_tags)
    if temp.Category[i] == "":
        categories.add("Other")
        temp.set_value(i, "Category", "Other")
    else:
        categories.add(temp.Category[i])

print "var categories = " + json.dumps(list(categories)) + ";"

services_dict = temp.to_dict(orient="records")
print "var services = " + json.dumps(services_dict, indent=4, separators=(',', ': ')) + ";"
