import requests as req

class Project:
    def get(self, project_id):
        self.project = project_id
        try:
            self.project_data = req.get(f"https://api.scratch.mit.edu/projects/{self.project}").json()
        except Exception:
            print(f"ERROR: couldn't fetch https://api.scratch.mit.edu/projects/{self.project}.")
    
    def json(self):
        return self.project_data
    
    def title(self):
        return self.project_data["title"]
    
    def instructions(self):
        return self.project_data["instructions"]
    
    def notes(self):
        return self.project_data["description"]
    
    def comments(self):
        return self.project_data["comments_allowed"]
    
    def author(self):
        return self.project_data["author"]["username"]
    
    def logo(self):
        return self.project_data["image"]
    
    def created(self):
        return self.project_data["history"]["created"]
    
    def modified(self):
        return self.project_data["history"]["modified"]
    
    def shared(self):
        return self.project_data["history"]["shared"]
    
    def views(self):
        return self.project_data["stats"]["views"]
    
    def loves(self):
        return self.project_data["stats"]["loves"]
    
    def favs(self):
        return self.project_data["stats"]["favorites"]
    
    def remixes(self):
        return self.project_data["stats"]["remixes"]
    
    def token(self):
        return self.project_data["project_token"]