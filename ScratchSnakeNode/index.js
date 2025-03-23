const { Project } = require("./project.js");
const { User } = require("./user.js");

async function main() {
  /*
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
  */
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