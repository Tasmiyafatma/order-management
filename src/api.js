let saleOrders = [
  {
    id: 1,
    customerName: "John Doe",
    price: 100,
    lastModified: "2024-05-24T12:46:41.995873Z",
    status: "active",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    price: 200,
    lastModified: "2024-05-20T10:30:00.995873Z",
    status: "completed",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    price: 150,
    lastModified: "2024-05-22T14:20:00.995873Z",
    status: "active",
  },
  {
    id: 4,
    customerName: "Bob Brown",
    price: 180,
    lastModified: "2024-05-21T09:15:00.995873Z",
    status: "completed",
  },
  {
    id: 5,
    customerName: "Carol White",
    price: 120,
    lastModified: "2024-05-23T11:00:00.995873Z",
    status: "active",
  },
  {
    id: 6,
    customerName: "David Black",
    price: 170,
    lastModified: "2024-05-19T08:25:00.995873Z",
    status: "completed",
  },
  {
    id: 7,
    customerName: "Emma Green",
    price: 130,
    lastModified: "2024-05-18T15:35:00.995873Z",
    status: "active",
  },
  {
    id: 8,
    customerName: "Frank Blue",
    price: 140,
    lastModified: "2024-05-17T10:45:00.995873Z",
    status: "completed",
  },
  {
    id: 9,
    customerName: "Grace Yellow",
    price: 160,
    lastModified: "2024-05-16T13:50:00.995873Z",
    status: "active",
  },
  {
    id: 10,
    customerName: "Hank Red",
    price: 110,
    lastModified: "2024-05-15T12:55:00.995873Z",
    status: "completed",
  },
];

export const fetchAllOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(saleOrders);
    }, 1000);
  });
};

export const fetchActiveOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activeOrders = saleOrders.filter(
        (order) => order.status === "active"
      );
      resolve(activeOrders);
    }, 1000);
  });
};

export const fetchCompletedOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const completedOrders = saleOrders.filter(
        (order) => order.status === "completed"
      );
      resolve(completedOrders);
    }, 1000);
  });
};

export const createSaleOrder = async (newOrder) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newId = Math.max(...saleOrders.map((order) => order.id)) + 1;
      const newSaleOrder = {
        id: newId,
        ...newOrder,
        lastModified: new Date().toISOString(),
      };
      saleOrders.push(newSaleOrder);
      resolve(newSaleOrder);
    }, 1000);
  });
};

export const updateSaleOrder = async (updatedOrder) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = saleOrders.findIndex(
        (order) => order.id === updatedOrder.id
      );
      if (index !== -1) {
        saleOrders[index] = { ...saleOrders[index], ...updatedOrder };
        saleOrders[index].lastModified = new Date().toISOString();
      }
      resolve(saleOrders[index]);
    }, 1000);
  });
};
