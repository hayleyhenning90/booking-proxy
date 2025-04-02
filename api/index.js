export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwwABcxE7zqSWO2QnTjRT1YV7ivZK3S0zb5QM8-rnVGlnE8nd8VdjH10MI1HsbbIxbX/exec");

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Unknown error" });
  }
}
