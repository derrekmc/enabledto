/**
 * Appointment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    
    title: {
      type: 'string',
      columnType: 'datetime',
      required: true
    },
    
    startTime: {
      type: 'string',
      columnType: 'datetime',
      required: false
    },
    
    endTime: {
      type: 'string',
      columnType: 'datetime',
      required: false
    },
    
    startDate: {
      type: 'string',
      columnType: 'date',
      required: false
    },
    
    endDate: {
      type: 'string',
      columnType: 'date',
      required: false
    },
    
    holidayOnly: {
      type: 'boolean',
      required: false
    }
    
  }
  
};
