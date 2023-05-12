#playground test before adding to master code
import json

with open("get.json", "r") as read_it:
     data = json.load(read_it)

print(data['ip'])