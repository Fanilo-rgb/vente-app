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

export const getTodaySales = async () => {
  try {
    const { products } = await getProducts();
    const { tickets } = await getTickets();

    const list = products.map(p => ({ ...p, quantity: 0 }));
    const today = new Date();

    const todayTickets = tickets.filter(ticket => {
      const createdAt = new Date(ticket.createdAt);
      return (
        createdAt.getDate() === today.getDate() &&
        createdAt.getMonth() === today.getMonth() &&
        createdAt.getFullYear() === today.getFullYear()
      );
    });

    todayTickets.forEach(ticket => {
      ticket.items.forEach(productSold => {
        const productIndex = list.findIndex(p => p.name === productSold.name);
        if (productIndex !== -1) {
          list[productIndex].quantity += productSold.quantity;
        }
      });
    });
    return list;
  } catch (e) {
    console.error("Error loading todaysSales", e);
  }
}
