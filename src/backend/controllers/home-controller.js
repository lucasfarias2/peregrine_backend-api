const HomeController = (req, res) => {
  res.json({
    selected_address: {
      title: 'Select address',
    },
    exhibitor: {
      items: [
        {
          id: 1,
          title: 'Request a service now',
        },
        {
          id: 2,
          title: 'Book for later',
        },
      ],
    },
    search: {
      title: 'Search for a professional',
    },
    categories: {
      title: 'Search by category',
      items: [
        {
          id: 1,
          title: 'Home',
        },
        {
          id: 2,
          title: 'Vehicles',
        },
        {
          id: 3,
          title: 'Education',
        },
        {
          id: 4,
          title: 'Pets',
        },
      ],
    },
    orders: {
      title: 'Your orders',
    },
  });
};

module.exports = HomeController;
