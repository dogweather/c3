$(function() {
    $(".gallery").justifiedGallery({
        rowHeight : 120,
        lastRow : 'nojustify',
        margins : 3,
        rel : 'gallery',
    })
}).on('jg.complete', function () {
    $(this).find('.gallery a').colorbox({
        maxWidth : '80%',
        maxHeight : '80%',
        opacity : 0.8,
        transition : 'elastic',
        current : ''
    })
})
