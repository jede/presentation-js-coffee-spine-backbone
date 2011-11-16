$(function() {
    $.deck('.slide');
    $.deck.defaults.codemirror.lineNumbers = false;
    $(document).bind('deck.change', function(event, from, to) {
       console.log('Moving from slide ' + from + ' to ' + to);
});
});

