const normalizeId = (obj) => {
  const toReturn = obj;
  Object.keys(obj).forEach(key => {
    if (key === '_id') {
      toReturn.id = obj._id.toString();
      delete toReturn._id;
    }
    if (obj[key] && obj[key] instanceof Object && obj[key]._id) {
      toReturn[key].id = obj[key]._id.toString();
      delete toReturn[key]._id;
    }
    if (Array.isArray(obj[key]) && obj[key][0] instanceof Object && !obj[key][0]._bsontype) {
      toReturn[key] = obj[key].map(item => normalize(item));
    }
  });
  return toReturn;
};

module.exports = { normalizeId }