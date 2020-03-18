This utility will check a given object recursively to substitute all _id fields by id and will stringify them.
It won't affect other fields in the document.

Usage:

```yarn add normalize-mongo-id```.

ES-6:
```js
import normalizeId from 'normalize-mongo-id';

// A document returned by mongoDB
const doc = {
  _id: ObjectId('000000000000000000000000'),
  subdoc: {
    _id: ObjectId('000000000000000000000000')
  },
  array: [
    {
      _id: ObjectId('000000000000000000000000')
    },
    {
      _id: ObjectId('000000000000000000000001')
    },
    {
      _id: ObjectId('000000000000000000000002')
    }
  ]
};

const normalizedDoc = normalizeId(doc);

console.log(JSON.stringify(normalizedDoc, null, 2));

/* Output: 
{
  id: '000000000000000000000000',
  subdoc: {
    id: '000000000000000000000000'
  },
  array: [
    {
      id: '000000000000000000000000'
    },
    {
      id: '000000000000000000000001'
    },
    {
      id: '000000000000000000000002'
    }
  ]
}
*/