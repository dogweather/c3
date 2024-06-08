$(function() {
    $(".gallery").justifiedGallery({
        rowHeight : 175,
        border: 1,
        lastRow : 'nojustify',
        margins : 5,
        rel : 'gallery',
        captions: true
    })
}).on('jg.complete', function () {
    $(this).find('.gallery a').colorbox({
        maxWidth : '95%',
        maxHeight : '95%',
        opacity : 0.8,
        transition : 'elastic',
        current : ''
    })
})
