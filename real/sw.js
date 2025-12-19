const CACHE_NAME = 'universal-cache-v1';

async function cacheFiles(files) {
    const cache = await caches.open(CACHE_NAME);
    for (const url of files) {
        try {
            await cache.add(new Request(url, { mode: 'no-cors' }));
            console.log('Cached:', url);
        } catch (e) {
            console.error('Failed to cache', url, e);
        }
    }
}

self.addEventListener('message', e => {
    if (e.data?.type === 'CACHE_FILES' && Array.isArray(e.data.files)) {
        cacheFiles(e.data.files);
    }
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});