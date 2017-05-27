'use strict';

module.exports = function(Registered) {

    /**
   * Set authorId after every creation
   *
   */
    Registered.afterRemote('create', function(ctx, modelInstance, next){
        if(ctx.result){
            //send confirmation mail
            //console.log(modelInstance.eventsId);
            Registered.app.models.Events.sendEmail(modelInstance.eventsId,'registrationOK',modelInstance.email,function (err, cb){
                if(err) next(err);
            });
        }
        next();
    });

};
