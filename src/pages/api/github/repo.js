export default async function handler(req, res) {
  const username = "ferryops";

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error mengambil data repositori GitHub:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data repositori" });
  }
}
