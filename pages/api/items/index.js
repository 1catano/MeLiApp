const { getSearch } = require('../../../repository/items.repository');

export default async (req, res) => {
  res.statusCode = 200
  res.json(await getSearch(req.query.q || ""));
}
