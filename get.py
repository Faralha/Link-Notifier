import json
import ngrok_info

ngrok_info.get_notext()

var = {
    "ip" :  ngrok_info.adress,
    "port" : ngrok_info.port
}

with open("get.json", "w") as p:
    json.dump(var, p)