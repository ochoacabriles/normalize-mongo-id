const normalizeId = (obj) => {
  const toReturn = obj;
  Object.keys(obj).forEach(key => {
    if (key === '_id') {
      toReturn.id = obj._id.toString();
      delete toReturn._id;
    }
    if (obj[key] && obj[key] instanceof Object) {
      toReturn[key] = normalizeId(obj[key]);
    }
    if (Array.isArray(obj[key]) && obj[key][0] instanceof Object && !obj[key][0]._bsontype) {
      toReturn[key] = obj[key].map(item => normalizeId(item));
    }
  });
  return toReturn;
};

module.exports = normalizeId