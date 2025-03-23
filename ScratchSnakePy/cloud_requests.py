# I am sorry for writting such a horrible code

import importlib
from cloud import Cloud
import encoder

class Requests():
    def newObject(self, user, session, project):
        global cloud
        cloud = Cloud()
        cloud.newObject(user, session, project)
        self.last_request = "None"

    def run(self, file):
        module = importlib.import_module(file)
        while True:
            self.request = cloud.get_var("REQUEST")
            if self.request != self.last_request and self.request != None:
                print("got request")
                self.last_request = self.request

                self.request = encoder.decode(self.request)
                self.request_parts = self.request.split("@")
                self.id = self.request_parts[0]
                self.name = self.request_parts[1]
                self.args = list(self.request_parts[2:])
                exec(f"self.function_response = module.{self.name}({self.args})")
                self.response = f"{self.id}@{str(self.function_response).split('@')[-1]}"
                print(self.response)
                cloud.set_var("RESPONSE", encoder.encode(str(self.response)))