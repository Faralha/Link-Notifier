import json
import ngrok_info

#serialize ngrok_info as variables
ngrok_info.get_notext()

#automaticly allign tcp address and port to one single line
var = {
    "ip" :  ngrok_info.adress + ":" + ngrok_info.port
}

#write var to .json file for further access
with open("get.json", "w") as p:
    json.dump(var, p)