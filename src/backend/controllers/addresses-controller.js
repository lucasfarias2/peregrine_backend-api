const AddressesController = (req, res) => {
  res.json({
    title: 'Your addresses',
    current_location_title: 'Select current location',
    items: [
      {
        id: 1,
        address: 'Market St. 1234',
        is_default: true,
      },
      {
        id: 2,
        address: 'Powell St. 4567',
        is_default: false,
      },
      {
        id: 3,
        address: 'Mission St. 7890',
        is_default: false,
      },
    ],
    action: {
      label: 'Add new address',
    },
  });
};

module.exports = AddressesController;
