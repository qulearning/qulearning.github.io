if (location.hostname !== 'qulearning.github.io') {
    window.location.replace(
        'https://qulearning.github.io' +
        location.pathname +
        location.search +
        location.hash
    );
}