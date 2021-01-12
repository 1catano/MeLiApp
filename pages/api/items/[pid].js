const { getItem } = require('../../../repository/items.repository');

export default async (req, res) => {
  res.statusCode = 200
  res.json(await getItem(req.query?.pid || ""));
}
