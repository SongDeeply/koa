console.log('hello word!');

//$.get('/api/test2', function (res) {
//    //console.log('>>>>RES',res);
//    $('#xingming').html(res.name);
//    $('#nicheng').html(res.nick);
//});
var dat = {
    name:'SongDeeply',
    psw:'12345'
}

$.post('/api/test2',dat, function (res) {
   console.log('>>>>>POST',res);
});

/*
$.ajax('/api/test2',{
    type:'POST',
    data:dat,
    success: function (res) {
        console.log('>>>>>POST',res);
    },
    error: function () {
        console.log('/api/test2 post出错了');
    }
});
    */