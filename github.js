class Github {
  constructor() {
    this.client_id = "607af10c66370329af1b";
    this.client_secret = "9012780ef6950257d3e8cbc5394fbbfd60438033";
    this.repos_count = 8;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    // return profileData // let's return more than this. let's return an object
    return {
      profile, // profile: profile is same as profile
      repos, //repos: repos is same as repos
    };
  }
}
