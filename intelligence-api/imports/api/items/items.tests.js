// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Items } from './items.js';

if (Meteor.isServer) {
  describe('items collection', function () {
    it('insert correctly', function () {
      const itemsId = Items.insert({
        name: 'test'
      });
      const added = Items.find({ _id: itemsId });
      const collectionName = added._getCollectionName();
      const count = added.count();
      assert.equal(collectionName, 'items');
      assert.equal(count, 1);
    });
  });
}
