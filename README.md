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

# Links - ScratchSnake is in Python and NodeJs
- [All Forum](https://scratch.mit.edu/discuss/topic/786441/?page=1#post-8204810)
- [All Get your session id](https://github.com/Zocker-Welt/ScratchSnake/wiki/Get-your-session-id)

- [Python Documentation](https://github.com/Zocker-Welt/ScratchSnake/wiki/Python-Documentation)
- [Python Cloud requests 1.0](https://github.com/Zocker-Welt/ScratchSnake/wiki/Python-Cloud-Requests-1.0)
- [Python Cloud requests 2.0](https://github.com/Zocker-Welt/ScratchSnake/wiki/Python-Cloud-Requests-2.0)

- [NodeJs Documentation](https://github.com/Zocker-Welt/ScratchSnake/wiki/NodeJs-Documentation)

# Example usage (NodeJs)
```js
// Print out all the information about Lama Loop and Zocker_Welt

const { Project } = require("./project.js");
const { User } = require("./user.js");

async function main() {
  let project = new Project("1001304833");
  await project.update();
  console.log(
    project.raw_json,
    project.title,
    project.instructions,
    project.notes,
    project.comments,
    project.author,
    project.logo,
    project.created,
    project.modified,
    project.shared,
    project.views,
    project.loves,
    project.favs,
    project.remixes,
    project.token
  );
  
  let user = new User("Zocker_Welt");
  await user.update();
  console.log(
    user.raw_json,
    user.id,
    user.scratchteam,
    user.join_date,
    user.logo,
    user.wiwo,
    user.bio,
    user.country,
    await user.messages(),
    await user.featured_json(),
    await user.new_scratcher(),
    await user.ocular(),
    await user.follower_count(),
    await user.following_count()
  );
}

main();
```

# Example usage (Python)
```python
"""
Live project love counter
Link to sb3: https://scratch.mit.edu/projects/1082219614/
"""
from cloud import Cloud
cloud = Cloud()
from project import Project
project = Project()

cloud.newObject("Zocker_Welt", "Don't share your session_id!!!", "1082219614") # Cloud connection

while True:
    project.get("1082219614") # Update stats
    l = project.loves()
    # The printing is for debugging
    print(l)
    cloud.set_var("loves", l)
    print(cloud.get_var("loves"))
    print()
```

# Getting started (Python)
**Log in and connect to your project**
```python
from cloud import Cloud
cloud = Cloud()

cloud.newObject("username", "session_id", "project_id") # Cloud connection
```
**Cloud variables:**
```python
from cloud import Cloud
cloud = Cloud()

cloud.newObject("username", "session_id", "project_id") # Cloud connection

# variable_name doesn't need to have the ☁ char, value is int
cloud_value = cloud.get_var("variable_name")
cloud.set_var("variable_name", "value")
```
See all the features in the [Documentation](https://github.com/Zocker-Welt/ScratchSnake/wiki/Documentation)
