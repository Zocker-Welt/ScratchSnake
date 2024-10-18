import requests as req
import websocket
import json

scratch_cloud = "wss://clouddata.scratch.mit.edu"

class Cloud:
    def newObject(self, user, session, project):
        self.user = user
        self.session = session
        self.project = project
        self.headers = {
            "Cookie": f"scratchsessionsid={self.session};",
            "Origin": "https://scratch.mit.edu",
            "User-Agent": "Mozilla/5.0"
        }
    
    def set_var(self, name, val):
        try:
            garbage = int(val)
        except ValueError:
            print("ERROR: Cloud variable could not be set.")
            return 1

        if len(val) > 256:
            print("ERROR: Cloud variable could not be set.")
            return 1
        
        def on_open(ws):
            message = json.dumps({
                "method": "set",
                "name": f"☁ {name}",
                "value": str(val),
                "user": self.user,
                "project_id": str(self.project)
            })
            ws.send(message)
            ws.close()
    
        ws = websocket.WebSocketApp(scratch_cloud, header = self.headers, on_open = on_open)
        ws.run_forever()
    
    def get_var(self, name, limit: str = "1000"): 
        try:
            resp = req.get("https://clouddata.scratch.mit.edu/logs?projectid=" + str(self.project) + "&limit=" + str(limit) + "&offset=0").json()
            for i in resp:
                x = i['name']
                if x == (f"☁ {name}"):
                    return i['value']
        except Exception:
            print("ERROR: Cloud variable could not be read.")