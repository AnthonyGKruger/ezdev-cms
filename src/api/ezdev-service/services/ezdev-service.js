'use strict';

/**
 * ezdev-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ezdev-service.ezdev-service');
