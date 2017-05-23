'use strict';

module.exports = function(Events) {

    /**
   * Search by eventCode and return unique record
   *
   * @param {String} code
   * @callback {Function} callback
   */
    Events.findByCode = function(code, cb){
        //console.log(code);
        Events.find({where: {eventCode: code}}, function(err,record){
            if (err) cb(err);
            if (!err) cb(null, record[0]);
        });
    };

    Events.remoteMethod(
        'findByCode',
        {
            http: {path: '/findByCode/:code', verb: 'get'},
            accepts: {arg: 'code', type: 'string', required: true, http: { source: 'path' }},
            returns: {root: true, type: 'object'},
            description: 'Get an event from event code'
        }
    );

     /**
   * Search by eventCode and return all contacts
   *
   * @param {String} code
   * @callback {Function} callback
   */
    Events.contactsByCode = function(code, cb){
        //console.log(code);
        Events.find({include: 'contacts', where: {eventCode: code}}, function(err,record){
            if (err) cb(err);
            if (!err) cb(null, record[0]);
        });
    };

    Events.remoteMethod(
        'contactsByCode',
        {
            http: {path: '/contactsByCode/:code', verb: 'get'},
            accepts: {arg: 'code', type: 'string', required: true, http: { source: 'path' }},
            returns: {root: true, type: 'object'},
            description: 'Get list of contacts from event code'
        }
    );

     /**
   * Search by eventCode and return all contacts
   *
   * @param {String} code
   * @callback {Function} callback
   */
    Events.registeredByCode = function(code, cb){
        //console.log(code);
        Events.find({include: 'registered', where: {eventCode: code}}, function(err,record){
            if (err) cb(err);
            if (!err) cb(null, record[0]);
        });
    };

    Events.remoteMethod(
        'registeredByCode',
        {
            http: {path: '/registeredByCode/:code', verb: 'get'},
            accepts: {arg: 'code', type: 'string', required: true, http: { source: 'path' }},
            returns: {root: true, type: 'object'},
            description: 'Get list of registered from event code'
        }
    );

};
