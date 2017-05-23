/* ... to be removed in production! */
module.exports = function (app) {
   app.dataSources.mysql.autoupdate();
   console.log("Performed autoupdate of all models.");
}

