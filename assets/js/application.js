$(function() {
    $(".gallery").justifiedGallery({
        rowHeight : 200,
        lastRow : 'nojustify',
        margins : 5,
        rel : 'gallery1',
    })
}).on('jg.complete', function () {
    $(this).find('a').colorbox({
        maxWidth : '80%',
        maxHeight : '80%',
        transition : 'elastic',
        current : ''
    })
})
