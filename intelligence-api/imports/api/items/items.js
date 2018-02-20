// Definition of the items collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
export const Items = new Mongo.Collection('items');

Items.schema = new SimpleSchema({
  name: {type: String}
});
