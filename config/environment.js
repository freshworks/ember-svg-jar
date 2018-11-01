/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    environment,
    storeConfigInMeta: false
  };

  return ENV;
};
