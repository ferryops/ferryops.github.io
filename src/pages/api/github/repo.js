export default async function handler(req, res) {
  const username = "ferryops";

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();

    const repos = data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
    }));

    res.status(200).json(repos);
  } catch (error) {
    console.error("Error mengambil data repositori GitHub:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data repositori" });
  }
}
