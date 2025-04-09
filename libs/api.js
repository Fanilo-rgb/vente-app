export const getDistributors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/distributors", {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch distributors.");
    }

    return res.json();
  } catch (e) {
    console.error("Error loading distributors", e);
  }
}
