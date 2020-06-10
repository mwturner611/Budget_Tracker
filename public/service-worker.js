

// everytime you change something in your service worker code, come back and change v3, v4, v5, etc. and it will remove last version from browser and add your new one
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install - when browser loads it installs this service worker


// activation

// fetching - this is the important part where we can grab stuff out of the cache.  