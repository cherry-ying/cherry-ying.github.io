/**
 * Created by warner on 2017/4/8.
 */
window.onload = function () {
    var _o_out = document.getElementById( 'out' );
    var _a_li = _o_out.getElementsByTagName( 'li' );

    for ( var i = 0; i < _a_li.length; i++ ) {
        _a_li[i].onmouseover = function () {
            index = this.firstChild.firstChild.getAttribute('src');
            var _set_src_value = this.firstChild.firstChild.getAttribute('src').replace( /\.png$/, '.hover.png' );
            this.firstChild.firstChild.setAttribute('src', _set_src_value );
        };

        _a_li[i].onmouseout = function () {
            this.firstChild.firstChild.setAttribute('src', index );
        };
    }
};



