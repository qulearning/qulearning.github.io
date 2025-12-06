(function () {
    const cleanURL = "https://qulearning.github.io";

    if (location.href !== cleanURL) {
        history.replaceState({}, "", cleanURL);
    }
})();