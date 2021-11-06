import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import blockContent from './blockContent';
import documentary from './documentary';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([documentary, blockContent]),
});
