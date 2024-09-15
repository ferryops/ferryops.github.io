export default async function handler(req, res) {
  const username = "ferryops";

  try {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error mengambil data artikel Dev.to:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data artikel" });
  }
}
