const Mongoose = require('mongoose');
const chai = require('chai');
const normalizeId = require('../normalizeId');

const expect = chai.expect;

describe('Test normalize-mongo-id package', () => {
  it('Check _id for id deep level substitution', () => {
    const doc = {
      _id: Mongoose.Types.ObjectId('000000000000000000000000'),
      name: 'Example doc',
      subdoc: {
        _id: Mongoose.Types.ObjectId('000000000000000000000000')
      },
      array: [
        {
          _id: Mongoose.Types.ObjectId('000000000000000000000000'),
          name: 'Item 0'
        },
        {
          _id: Mongoose.Types.ObjectId('000000000000000000000001'),
          name: 'Item 1'
        }
      ]
    };

    const expectedDoc = {
      id: '000000000000000000000000',
      name: 'Example doc',
      subdoc: {
        id: '000000000000000000000000'
      },
      array: [
        {
          id: '000000000000000000000000',
          name: 'Item 0'
        },
        {
          id: '000000000000000000000001',
          name: 'Item 1'
        }
      ]
    };

    const normalizedDoc = normalizeId(doc);
    expect(normalizedDoc).to.deep.equal(expectedDoc);
  })
})