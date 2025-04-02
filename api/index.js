export default async function handler(req, res) {
  try {
    console.log("Starting fetch...");

    const response = await fetch("https://script.google.com/macros/s/AKfycbwwABcxE7zqSWO2QnTjRT1YV7ivZK3S0zb5QM8-rnVGlnE8nd8VdjH10MI1HsbbIxbX/exec");

    console.log("Fetch complete with status:", response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();

    console.log("Parsed data:", data);

    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ error: err.message || "Unknown error" });
  }
}
