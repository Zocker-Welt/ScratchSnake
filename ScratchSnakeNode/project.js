const axios = require('axios');

async function request(url, err) {
  try {
    const response = await axios.get(
      url,
    );
    return response.data;
  }
  catch (error) {
    console.error(
      err,
    );
    return null;
  }
}

class Project {
  constructor(id) {
    this.id = id;
  }

  async update() {
    this.data = await request(
      `https://api.scratch.mit.edu/projects/${this.id}`,
      `ERROR: couldn't fetch https://api.scratch.mit.edu/projects/${this.id}.`
    )
    try {
      this.raw_json = this.data;
      this.title = this.data["title"];
      this.instructions = this.data["instructions"];
      this.notes = this.data["description"];
      this.comments = this.data["comments_allowed"];
      this.author = this.data["author"]["username"];
      this.logo = this.data["image"];
      this.created = this.data["history"]["created"];
      this.modified = this.data["history"]["modified"];
      this.shared = this.data["history"]["shared"];
      this.views = this.data["stats"]["views"];
      this.loves = this.data["stats"]["loves"];
      this.favs = this.data["stats"]["favorites"];
      this.remixes = this.data["stats"]["remixes"];
      this.token = this.data["project_token"];
    }
    catch (error) {
      this.raw_json = null;
      this.title = null;
      this.instructions = null;
      this.notes = null;
      this.comments = null;
      this.author = null;
      this.logo = null;
      this.created = null;
      this.modified = null;
      this.shared = null;
      this.views = null;
      this.loves = null;
      this.favs = null;
      this.remixes = null;
      this.token = null;
    }
  }
}

module.exports = { Project };
