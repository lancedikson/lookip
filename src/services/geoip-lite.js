import ServiceBase from './base';
import geoip from 'geoip-lite';

class GeoIPLiteService extends ServiceBase {
  lookup(ip) {
    return geoip.lookup(ip);
  }
}

export default GeoIPLiteService;
