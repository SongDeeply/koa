console.log('index.js loading.');

$('#regbtn').click(function () {
    console.log('regbtn click');
    var dat = {
        name: $('#regname').val(),
        pw: $('#regpw').val()
    };

    $.post('/api/reg', dat, function (res) {
        console.log('>>>>>>REG', res);
        alert('reg ok!');
    });
});

$('#loginbtn').click(function () {
    var dat = {
        name: $('#loginname').val(),
        pw: $('#loginpw').val()
    };

    $.post('/api/login', dat, function (res) {
        console.log('>>>>>>LOGIN', res);
        if (res.code == 1) {
            alert('登陆成功')
        } else {
            alert('登陆失败')
        }
    });
});

//$.post('http://m.xmgc360.com/start/api/getMyInfo',undefined, function (res) {
//    console.log('>>>>>get XMGCM account',res);
//},'jsonp');
