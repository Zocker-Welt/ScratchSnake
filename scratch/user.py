import requests as req

class User:
    def get(self, user):
        self.username = user
        try:
            self.user_data = req.get(f"https://api.scratch.mit.edu/users/{self.username}").json()
        except Exception:
            print(f"ERROR: couldn't fetch https://api.scratch.mit.edu/users/{self.username}.\njson, id, scratchteam, join_date, logo, wiwo, bio, country - won't work")

    def json(self):
        return self.user_data

    def id(self):
        return self.user_data["id"]
    
    def scratchteam(self):
        return self.user_data["scratchteam"]
    
    def join_date(self):
        return self.user_data["history"]["joined"]
    
    def logo(self):
        return self.user_data["profile"]["images"]["90x90"]
    
    def wiwo(self):
        return self.user_data["profile"]["status"]
    
    def bio(self):
        return self.user_data["profile"]["bio"]
    
    def country(self):
        return self.user_data["profile"]["country"]
    
    # Other link

    def messages(self):
        try:
            response = req.get(f"https://api.scratch.mit.edu/users/{self.username}/messages/count").json()
        except Exception:
            return None
        return response["count"]
    
    def featured_json(self):
        try:
            response = req.get(f"https://scratch.mit.edu/site-api/users/all/{self.username}").json()
        except Exception:
            return None
        return response
    
    def new_scratcher(self):
        try:
            response = req.get(f"https://scratch.mit.edu/users/{self.username}/").text
            group = response[response.rindex('<span class="group">'):][:70]
            return "new scratcher" in group.lower()
        except Exception:
            return None
    
    def ocular(self):
        try:
            response = req.get(f"https://my-ocular.jeffalo.net/api/user/{self.username}").json()
            return response
        except Exception:
            return None