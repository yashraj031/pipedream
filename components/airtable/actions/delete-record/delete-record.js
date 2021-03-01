const airtable=require('../../airtable.app.js')
const axios = require('axios')

module.exports = {
  key: "airtable-delete-record",
  name: "Delete Record by ID",
  description: "Delete a record from a table by `record_id`.",
  version: "0.0.4",
  type: "action",
  props: {
    airtable,
    baseId: {type: "$.airtable.baseId", appProp: 'airtable'},
    tableId: { type: '$.airtable.tableId', baseIdProp: 'baseId' },
    recordId: { propDefinition: [airtable, "recordId"] },
  },
  async run() { 
    const Airtable = require('airtable');
    const base = new Airtable({apiKey: this.airtable.$auth.api_key}).base(this.baseId);
    return await base(this.tableId).destroy(this.recordId)
  },
}