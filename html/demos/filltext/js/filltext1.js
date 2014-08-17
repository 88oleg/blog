/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

$(function () {
    var image = new Image(),
        $canvas = $('#canvas'),
        $img = $('#img'),
        canvas = $canvas[0],
        context = canvas.getContext('2d'),
        $inputs = $('input'),
        $button = $('#create');

    function main() {
        image.onload = fillText;
        image.src = 'images/bg1.jpg';
        $button.click(changeText);
    }

    function fillText() {
        var ys = [183, 378, 590, 788],
            texts = location.search.substring(1).split('&');

        if (texts.length !== 4) {
            texts = [
                '我想着华工挺好吧，至少在广东省比较出名',
                '跟亲戚朋友说出来会很有面子',
                '可是那些叔叔阿姨居然说没听过',
                '还问这是三本吗？(＞﹏＜)'
            ];
        }

        context.drawImage(image, 0, 0);
        context.fillStyle = '#ffffff';
        context.font = 'bold 12px 微软雅黑';
        $.each(texts, function (i, text) {
            text = decodeURIComponent(text);
            $inputs.eq(i).attr('placeholder', text);
            context.fillText(text, (canvas.width - text.length * 12) / 2, ys[i], canvas.width);
        });
        $img.attr('src', canvas.toDataURL());
    }

    function changeText() {
        var texts = [];
        $inputs.each(function (i) {
            texts.push(encodeURIComponent($.trim($(this).val()) || $(this).attr('placeholder')));
        });
        location.href = 'index1.html?' + texts.join('&');
    }

    main();
});
