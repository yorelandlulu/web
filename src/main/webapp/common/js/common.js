/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 9/1/14
 * Time: 2:01 PM
 * To change this template use File | Settings | File Templates.
 */
//var domain_name = "www.sdx3fx.sh.cn";
var domain_name = window.location.host;
function recordCookie(key, value){
    $.cookie(key, value, {expires:7, path:'/',domain:domain_name,secure:false});
}
function redirect(cid){
    recordCookie('pageno',1);
    $.ajax({
        url: 'newscategory/redirect.do',
        data: {cid: cid},
        dataType: 'json',
        async: false,
        type: 'POST',
        success: function (d) {
            if (d.viewarticle == 1){
                var isRedirectByView = $.cookie('isRedirectByView');
                if(isRedirectByView!=null && isRedirectByView==1){
                    recordCookie('oldnewsid', $.cookie('newsid'));
                }else{
                    recordCookie('oldnewsid', null);
                }
                recordCookie('newsid', d.articleid);
                window.location.href = "viewArticle.html";
            }
            else {
                recordCookie('oldnewsid', null);
                recordCookie('categoryid', d.id);
                window.location.href = "viewList.html";
            }
        }
    });
}
function getContentTitle(cobj){
    var str = "<a href='home.html' style='color:white' >首页</a> ->"
    if(cobj.parentid!=0)
    {
        $.ajax({
            url:'newscategory/view.do',
            data: {cid: cobj.parentid},
            async: false,
            dataType : 'json',
            type : 'POST',
            success: function (d){
                str = str+"<a href='javascript:redirect(" + d.id + ")' style='color:white'>" + d.name + "</a> ->";
                var str1 = "<a href='javascript:redirect(" + d.id + ")' style='color:white'>" + d.name + "</a> ->";
                if(d.parentid!=0)
                {
                    $.ajax({
                        url:'newscategory/view.do',
                        data: {cid: d.parentid},
                        async: false,
                        dataType : 'json',
                        type : 'POST',
                        success: function (d1){
                            str = "<a href='home.html' style='color:white'>首页</a> ->"+"<a href='javascript:redirect(" + d1.id + ")' style='color:white'>" + d1.name + "</a> ->"+str1;
                        }
                    });
                }
            }
        });
    }
    return str + cobj.name;
}