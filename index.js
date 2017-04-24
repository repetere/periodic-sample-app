'use strict';
const periodic = require('periodicjs');

periodic.init()
  .then((status) => {
    periodic.logger.silly({ status, periodic, });
  })
  .catch(e => {
    try {
      periodic.logger.error(e);
    } catch (err) {
      console.error(e, err);
    }
  });