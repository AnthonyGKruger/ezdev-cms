'use strict';

/**
 * dpts-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dpts-service.dpts-service');
