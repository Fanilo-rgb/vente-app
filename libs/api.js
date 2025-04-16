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

export const getSortTickets = async () => {
  const isSameDay = (date1, date2) => {
    return date1.toDateString() === date2.toDateString();
  };

  const isYesterday = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return isSameDay(date, yesterday);
  };

  const isLast7Days = (date) => {
    const now = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 7);
    return date > sevenDaysAgo && !isSameDay(date, now) && !isYesterday(date);
  };

  const isLast3Months = (date) => {
    const now = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(now.getMonth() - 3);
    return date > threeMonthsAgo && !isSameDay(date, now) && !isYesterday(date) && !isLast7Days(date);
  };

  try {
    const { tickets } = await getTickets();
    const today = [];
    const yesterday = [];
    const last7days = [];
    const last3months = [];

    const data = [
      { title: "Aujourd'hui", list: today },
      { title: "Hier", list: yesterday },
      { title: "7 derniers jours", list: last7days },
      { title: "3 derniers mois", list: last3months },
    ];

    tickets.forEach(ticket => {
      const date = new Date(ticket.createdAt);

      if (isSameDay(date, new Date())) {
        today.push(ticket);
      } else if (isYesterday(date)) {
        yesterday.push(ticket);
      } else if (isLast7Days(date)) {
        last7days.push(ticket);
      } else if (isLast3Months(date)) {
        last3months.push(ticket);
      }
    });

    return data;
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
