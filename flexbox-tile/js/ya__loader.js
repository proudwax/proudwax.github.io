modules.define('loader', function(provide) {

    var xhr = new XMLHttpRequest();

    console.log(this);

    // xhr.open("GET", '/submit?', true);
    //
    // xhr.onreadystatechange = function() {
    //   if (this.readyState != 4) return;
    //
    //   console.log( this.responseText );
    // }
    //
    // xhr.send();


    provide(xhr);
});
