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

class User {
  constructor(username) {
    this.username = username;
  }

  async update() {
    this.data = await request(
      `https://api.scratch.mit.edu/users/${this.username}`,
      `ERROR: couldn't fetch https://api.scratch.mit.edu/users/${this.username}.\njson, id, scratchteam, join_date, logo, wiwo, bio, country - won't work`
    )
    try {
      this.raw_json = this.data;
      this.id = this.data["id"];
      this.scratchteam = this.data["scratchteam"];
      this.join_date = this.data["history"]["joined"];
      this.logo = this.data["profile"]["images"]["90x90"];
      this.wiwo = this.data["profile"]["status"];
      this.bio = this.data["profile"]["bio"];
      this.country = this.data["profile"]["country"];
    }
    catch (error) {
      this.raw_json = null;
      this.id = null;
      this.scratchteam = null;
      this.join_date = null;
      this.logo = null;
      this.wiwo = null;
      this.bio = null;
      this.country = null;
    }
  }

  async messages() {
    return (
      await request(
        `https://api.scratch.mit.edu/users/${this.username}/messages/count`,
        `ERROR: couldn't fetch https://api.scratch.mit.edu/users/${this.username}`
      )
    )["count"];
  }

  async featured_json() {
    return (
      await request(
        `https://scratch.mit.edu/site-api/users/all/${this.username}`,
        `ERROR: couldn't fetch https://scratch.mit.edu/site-api/users/all/${this.username}`
      )
    );
  }

  async new_scratcher() {
    try {
      const response = await axios.get(`https://scratch.mit.edu/users/${this.username}/`);
      const group = response.data.substring(response.data.lastIndexOf('<span class="group">'), response.data.lastIndexOf('<span class="group">') + 70);
      return group.toLowerCase().includes("new scratcher");
    }
    catch (error) {
      console.error(`ERROR: couldn't fetch https://scratch.mit.edu/users/${this.username}/`);
      return null;
    }
  }

  async ocular() {
    return request(
      `https://my-ocular.jeffalo.net/api/user/${this.username}`,
      `ERROR: couldn't fetch https://my-ocular.jeffalo.net/api/user/${this.username}`
    );
  }

  async follower_count() {
    try {
      const response = await axios.get(`https://scratch.mit.edu/users/${this.username}/followers`);
      const match = response.data.match(/Followers \(([0-9]+)\)/i);
      return match ? parseInt(match[1]) : 0;
    }
    catch (error) {
      console.error(`ERROR: couldn't fetch https://scratch.mit.edu/users/${this.username}/followers`);
    }
  }

  async following_count() {
    try {
      const response = await axios.get(`https://scratch.mit.edu/users/${this.username}/following/`);
      const match = response.data.match(/Following \(([0-9]+)\)/i);
      return match ? parseInt(match[1]) : 0;
    }
    catch (error) {
      console.error(`ERROR: couldn't fetch https://scratch.mit.edu/users/${this.username}/following/`);
    }
  }
}

module.exports = { User };
