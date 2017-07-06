$(document).ready(function () {
    $(window).scroll(function () {
        let top = $(document).scrollTop(),
            tabOption = $('#list').find('li'),
            items = $('.prod');
        /*product*/
        let currentId = '';
        items.each(function () {
            let m = $(this), itemTop = m.offset().top;
            if (top > itemTop - 500) {
                currentId = '#' + m.attr('id');
            } else {
                return false;
            }
        });
        let currentLink = tabOption.find('.cur');
        if (currentId && currentLink.attr('href') != currentId) {
            currentLink.removeClass('cur');
            tabOption.find("[href='" + currentId + "']").addClass('cur')
        }
        tabOption.find("[href='" + currentId + "']").addClass("cur");
        /*aboutUs*/
        let tabOption1 = $('#aboutUs').find('li'),
            ones = $('.one');
        let currentId1 = '';
        ones.each(function () {
            let m = $(this), itemTop1 = m.offset().top;
            if (top > itemTop1 - 500) {
                currentId1 = '#' + m.attr('id');
            } else {
                return false;
            }
        });
        let currentLink1 = tabOption1.find('.cur');
        if (currentId1 && currentLink1.attr('href') != currentId1) {
            currentLink1.removeClass('cur');
            tabOption1.find("[href='" + currentId1 + "']").addClass('cur')
        }
        tabOption1.find("[href='" + currentId1 + "']").addClass("cur");
    });

    //alertPic
    let resultData = null, alertHtML = ``;
    $.ajax({
        url: 'json/alertpic.json',
        method: 'get',
        async: false,
        dataType: 'json',
        success: function (result) {
            resultData = result;
        }
    });
    $.each(resultData, function (index, item) {
        alertHtML += ` <div class="alertPic">
        <span id="close">&times;</span>
        <div class="case_cont ">
            <div class="header clearFixed">
                <div class="logo">
                    <img src="images/alert/arrow_1ac.png"/>
                </div>
            </div>
            <h1>${item.title1}</h1>
            <div class="info">
                <h2>${item.h2}</h2>
                <div class="pics"><img src="${item.pic1}"/></div>
                <div class="pics ${item.pic2.length==''?'none':''}" style="height:${item.id==11?750:280}px"><img src="${item.pic2}"/></div>
                <div class="pics ${item.pic3.length==''?'none':''}" ><img src="${item.pic3}"/></div><div class="pics ${item.pic4.length==''?'none':''}" ><img src="${item.pic4}"/></div><div class="pics ${item.pic5.length==''?'none':''}" ><img src="${item.pic5}"/></div>
                <h2>${item.list1}</h2>
                <ul class="list ${item.li1.length==''?'none':''}">
                    <li>${item.li1}</li>
                    <li>${item.li2}</li>
                    <li>${item.li3}</li>
                    <li>${item.li4}</li>
                    <li>${item.li5}</li>
                    <li>${item.li6}</li>
                    <li>${item.li7}</li>
                    <li>${item.li8}</li>
                    <li>${item.li9}</li>
                </ul>
            </div>
            <div class="info ${item.title2===''?'none':''}">
                <h2>${item.title2}</h2>
                <ul class="list">
                    <li>${item.list2}</li>
                    <li>${item.li01}</li>
                    <li>${item.li02}</li>
                    <li>${item.li03}</li>
                    <li>${item.li04}</li>
                    <li>${item.li05}</li>
                    <li>${item.li06}</li>
                    <li>${item.li07}</li>
                    <li>${item.li08}</li>
                    <li>${item.li09}</li>
                    <li>${item.li10}</li>
                    <li>${item.li11}</li>
                    <li>${item.li12}</li>
                </ul>
            </div>      
            <div class="box">
                <img src="images/aboutus/03.png" alt="">
            </div>
        </div>
    </div>`;
    });
    $('.alert').html(alertHtML);
    let $content = $('.content'), $products = $content.find('.products'), $info = $products.find('.info');
    $info.each(function (index, item) {
        $(item).on('click', function () {
            $('.alert').css({
                zIndex: 1,
                display: 'block',
            });
            $('.alertPic').eq(index).css({
                display: 'block',
            });
            $('.mask').css({
                zIndex: 0,
                display: 'block',
            });
            $('span#close').click(function () {
                $('.alert').css({
                    zIndex: -1,
                    display: 'none',
                });
                $('.alertPic').eq(index).css({
                    display: 'none',
                });
                $('.mask').css({display: 'none'});
            });
        });
    });
});

