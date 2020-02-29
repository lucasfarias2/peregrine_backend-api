const { Address } = require('../middleware/db');

exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({});
    res.json(addresses);
  } catch (e) {
    res.status(404).json(e);
  }
};

exports.getAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.addressId);
    res.json(address);
  } catch (e) {
    res.status(404).json(e);
  }
};
