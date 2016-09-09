$('#btn1').click(function () {
    var dat = {
        clubName:$('#clubName').val(),
        clubType:$('#clubType').val(),
        clubIntroduction:$('#clubIntroduction').val(),
        clubCreator:$('#clubCreator').val(),
        clubCreatTime:$('#clubCreatTime').val()
        };
    $.get('/api/test12',dat, function (res) {

    });
});
$('#btn2').click(function () {
    $.post('/api/test1', function (ctx) {
        $('#clubName').val(ctx[0].clubName);
        //console.log(ctx[0].clubName)
        $('#clubType').val(ctx[0].clubType);
        $('#clubIntroduction').val(ctx[0].clubIntroduction);
        $('#clubCreator').val(ctx[0].clubCreator);
        $('#clubCreatTime').val(ctx[0].clubCreatTime);
    });
});