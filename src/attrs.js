(function ($) {
    $.fn.attrs = function () {
        if( this.length ) {
            var arr = {};
            $(this).each(function() {
                $.each(this.attributes, function() {
                    if(this.specified) {
                    arr[this.name] = this.value;
                    }
                });
            });
            return arr;
        }
    };
})(jQuery);
