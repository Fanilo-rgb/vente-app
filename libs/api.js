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

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch products.");
    }
    return res.json();
  } catch (e) {
    console.error("Error loading products", e);
  }
}

export const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch tickets.");
    }
    return res.json();
  } catch (e) {
    console.error("Error loading tickets", e);
  }
}
