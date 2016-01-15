import merge from 'object-merge';
import GeoIPLiteService from './services/geoip-lite';

class GeoIP {
  constructor(config = {}) {

    this.defaults = {
      service: 'geoip-lite'
    };

    this.services = {
      'geoip-lite': new GeoIPLiteService()
    };

    this.config = merge(this.defaults, config);

  };

  lookup(ip) {
    return this.services[this.config.service].lookup(ip);
  };
}

export default GeoIP;
