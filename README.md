```
 __ __ __     __ __ __   __ __ __    __ _     __ __ __   __ __ __   __   __
/  __ __/    /   _ __/  /  __ __/   /    \   /__   __/  /   _ __/  / /__/ /     
\__ __  \   /   /__ _  /   __  \   /  /\  \    /  /    /   /__ _  /  __  /    
/__ __ _/  /__ __ __/ /__ /  \__\ /_ /  \_ \  /__/    /__ __ __/ /_/  /_/

         __ __ __     __   __    __ _     __  __      __ __ __
        /  __ __/    /  \ /  /  /    \   |  |/ /    /   __ __/
        \__ __  \   /  / \  /  /  /\  \  |     \   /   __ __/
        /__ __ _/  /__/ \__/  /__/  \__\ |__|\__\ /__ __ __/
```

You need to have the language Python installed. Download it here: https://www.python.org/downloads/

# Installation
1. Save the folder "scratch" to your computer
2. In the folder create main.py
3. Write you code there

# Requierments
**requests**

**re**

**websocket-client**

**json**


# Cloud
**Import the module:**
```python
from cloud import Cloud
cloud = Cloud()
```

**Connect to cloud:**
```python
cloud.newObject("username", "session_id", "project_id")
```

**Change cloud variables:**
```python
cloud.set_var("variable_name", "value") # variable_name doesn't need to have the ☁ char, value is int
```

**Get cloud variables:**
```python
cloud.get_var("variable_name") # variable_name doesn't need to have the ☁ char
```

# User
**Import the module:**
```python
from user import User
user = User()
```

**Get a user:**
```python
user.get("username")
```

**Function:**
```python
user.json() # Returns the raw json data
user.id() # Returns user ID
user.scratchteam() # Returns True if user is scratchteam
user.join_date() # Returns user's join date
user.logo() # Returns a link to user's logo (90x90)
user.wiwo() # Returns user's "What I'm working on" page
user.bio() # Returns user's "About me" page
user.country() # Returns user's country

user.messages() # Returns user's message count
user.featured_json() # Returns raw json of user's featured project
user.new_scratcher() # Returns True if user is a new scratcher
user.coular() # Returns user status json
user.follower_count() # Returns user's follower count
user.following_count() # Return user's following count
```

# Project
**Import the module:**
```python
from project import Project
project = Project()
```

**Get a user:**
```python
project.get("project_id")
```

**Function:**
```python
project.json() # Returns the raw json data
project.title() # Returns project's name
project.instructions() # Return's project's instructions
project.notes() # Return's project's notes and credits
project.comments() # Returns True if commenting is allowed
project.author() # Returns creator of the project
project.logo() # Returns a link to project's thumbnail
project.created() # Returns project's creation date
project.modified() # Returns project's modification date
project.shared() # Returns project's share date
project.views() # Returns project's view count
project.loves() # Returns project's love count
project.favs() # Returns project's favourite/star count
project.remixes() # Returns project's remix count
project.token() # Returns project's token
```
