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

# Users
**Import the module:**
```python
from user import User
```

**Get a user:**
```python
User.get(User, "username")
```

**Function:**
```python
User.json(User) # Returns the raw json data
User.id(User) # Returns user ID
User.scratchteam(User) # Returns True if user is scratchteam
User.join_date(User) # Returns user's join date
User.logo(User) # Returns a link to user's logo (90x90)
User.wiwo(User) # Returns user's "What I'm working on" page
User.bio(User) # Returns user's "About me" page
User.country(User) # Returns user's country

User.messages(User) # Returns user's message count
User.featured_json(User) # Returns raw json of user's featured project
User.new_scratcher(User) # Returns True if user is a new scratcher
User.coular(User) # Returns user status json
```
