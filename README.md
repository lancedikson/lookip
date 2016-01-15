# LookIP

IP lookup package. Will use different configurable ip-lookup services in future.

## Usage

```
var LookIP = require('../lib');
var lookip = new LookIP();
lookip.lookup('8.8.8.8');

/*
{ range: [ 134744064, 134744319 ],
  country: 'US',
  region: 'CA',
  city: 'Mountain View',
  ll: [ 37.386, -122.0838 ],
  metro: 807 }
*/
```

## Idea

There are many ip lookup packages used different services. Some day I've tried Rails geocoder gem, that has convinient API and use different services (and other gems) for lookup.

Now we at Videoly need that npm package and have started to write it. If you are interested to extend the package, you are welcome, send me PR please.

## Now

Now package supports only `geoip-lite` integration.

## Roadmap

I want to add `Promise`s support for make async queries to the IP DB soon. In future I plan add support for another ip-lookup services and make auto download and update MaxMind DB for the package.