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

# Cloud
**Import the module:**
```python
from cloud import Cloud
project = Cloud()
```

**Connect to cloud:**
```python
project.newObject("username", "session_id", "project_id")
```

**Change cloud variables:**
```python
project.set_var("variable_name", "value") # variable_name doesn't need to have the ☁ char, value is int
```

**Get cloud variables:**
```python
project.get_var("variable_name") # variable_name doesn't need to have the ☁ char
```

# User
**Import the module:**
```python
from user import User
username = User()
```

**Get a user:**
```python
username.get("username")
```

**Function:**
```python
username.json() # Returns the raw json data
username.id() # Returns user ID
username.scratchteam() # Returns True if user is scratchteam
username.join_date() # Returns user's join date
username.logo() # Returns a link to user's logo (90x90)
username.wiwo() # Returns user's "What I'm working on" page
username.bio() # Returns user's "About me" page
username.country() # Returns user's country

username.messages() # Returns user's message count
username.featured_json() # Returns raw json of user's featured project
username.new_scratcher() # Returns True if user is a new scratcher
username.coular() # Returns user status json
```
