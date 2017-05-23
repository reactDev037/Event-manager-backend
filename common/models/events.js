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
            if (!err) cb(null, record);
        });
    };

    Events.remoteMethod(
        'findByCode',
        {
            http: {path: '/findByCode/:code', verb: 'get'},
            accepts: {arg: 'code', type: 'string', required: true, http: { source: 'path' }},
            returns: {root: true, type: 'object'},
            description: 'Get an event from code'
        }
    );

};
