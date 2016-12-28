modules.define('console-log', ['loader'], function(provide, Loader) {
    var b = console.log('re');

    Loader('js/yz__dropdown-box.js');

    provide(b);
});

modules.define('loader', function(provide) {
    provide(
        function(url){
            var xhr = new XMLHttpRequest();

            xhr.open('GET', url, true);
            xhr.send();

            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                console.log(xhr.responseText);
            }
        }
    );
});


modules.require('console-log', function(provide) {

});
