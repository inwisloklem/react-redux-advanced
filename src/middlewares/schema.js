export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.schema.json',
  type: 'object',
  properties: {
    auth: {
      type: 'boolean'
    },
    comments: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
}
