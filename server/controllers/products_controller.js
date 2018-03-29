module.exports = {
  create: (req, res, next) => {
    const { name, description, price, imageurl } = req.body;
    req.app
      .get("db")
      .create_product([name, description, price, imageurl])
      .then(product => res.status(200).json(product))
      .catch(err => res.status(500).send(err));
  },
  getOne: (req, res, next) => {
    const { id } = req.params;
    req.app
      .get("db")
      .read_product([id])
      .then(product => res.status(200).json(product))
      .catch(err => res.status(500).send(err));
  },
  getAll: (req, res, next) => {
    req.app
      .get("db")
      .read_products()
      .then(products => res.status(200).json(products))
      .catch(err => res.status(500).send(err));
  },
  update: (req, res, next) => {
    const { id } = req.params;
    const { desc } = req.query;
    req.app
      .get("db")
      .update_product([id, desc])
      .then(product => res.status(200).json(product))
      .catch(err => res.status(500).send(err));
  },
  delete: (req, res, next) => {
    const { id } = req.params;
    req.app
      .get("db")
      .delete_product([id])
      .then(product => res.status(200).json(product))
      .catch(err => res.status(500).send(err));
  }
};
