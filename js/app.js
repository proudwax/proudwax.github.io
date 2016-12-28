modules.define('app', ['loader'], function(provide, Loader) {
    Loader('js/yz__throttle.js');
    Loader('js/yz__dropdown-box.js', function(){ modules.require('dropdown-box', function(provide) {}); });
});

modules.require('app', function(provide) {

});
