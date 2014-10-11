var newsid = $.cookie('newsid');
var expid = 0;
var caid;
function credirect(rid){
    recordCookie("isRedirectByView",1);
    redirect(rid);
    recordCookie("isRedirectByView",0);
}
function goback(){
    var oldnewsid = $.cookie('oldnewsid');
    if(oldnewsid!=null&&oldnewsid!="null"){
        recordCookie("newsid",oldnewsid);
        recordCookie("oldnewsid",newsid);
        window.location.reload();
    }
    else
        window.history.go(-1);
}
function loadArticle(newsid){
    $.ajax({
        url:'news/view.do',
        data: {nid: newsid},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $(".news h1").html(d.title);
            $("#posttime").html(d.posttime);
            $("#audit").html(d.auditname);
            $("#author").html(d.author);
            if(d.editname!=null&&d.editname!=""){
                $("#editbox").show();
                $("#edit").html(d.editname);
            }
            else{
                $("#editbox").hide();
            }
            $("#news_content").html(d.content);
            caid = d.categoryid;
            loadMenus(d.categoryid);
        }
    });
}
function gotoNode(i){
    $.ajax({
        url:'newscategory/view.do',
        data: {cid: i},
        dataType : 'json',
        async: false,
        type : 'POST',
        success: function (d){
            $("#ctitle").html(d.name);
        }
    });
    $(".menu a").removeClass("select");
    $("#li"+i).addClass("select");


    $.ajax({
        url:'newscategory/listTree.do',
        data: {cid: i},
        dataType : 'json',
        async: false,
        type : 'POST',
        success: function (d){
            $("#tc").empty();
            for(var obj in d){
                if (d[obj].viewarticle != 1) {
                    $("#tc").append(" <li onclick='javascript:toggleLeft(" + obj + ")' id='menuli" + obj + "'><a href=javascript:gotolist("+d[obj].id+",'"+d[obj].text+"',1)>"+ d[obj].text+"</a></li>");
                }
                else {
                    $("#tc").append(" <li onclick='javascript:toggleLeft(" + obj + ")' id='menuli" + obj + "'><a href=javascript:gotoview(" + d[obj].articleid + ")>" + d[obj].text + "</a></li>");
                }
                if(d[obj].children){
                    $("#menuli"+obj).append("<ul id='ul"+obj+"'></ul>");
                    $("#menuli"+obj+" a").attr("href","javascript:void(0)");
                    for(var sub in d[obj].children){
                        if(d[obj].children[sub].id == caid){
                            expid = obj;
                        }
                        if (d[obj].children[sub].viewarticle != 1) {
                            $("#ul" + obj).append("<li class='hidden'><a href=javascript:gotolist("+d[obj].children[sub].id+")>"+ d[obj].children[sub].text+"</a></li>");
                        }
                        else {
                            $("#ul" + obj).append("<li class='hidden'><a href=javascript:gotoview(" + d[obj].children[sub].articleid + ")>" + d[obj].children[sub].text + "</a></li>");
                        }
                    }
                }
            }
        }
    });
}
function loadMenus(cid){
    $.ajax({
        url:'newscategory/view.do',
        data: {cid: cid},
        async: false,
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $(".news_title p.icon").html(d.name);
            if(d.parentid!=0)
                loadsubMenus(d.parentid);
            else
                gotoNode(d.id);
        }
    });
    expendMenu(expid);
}
function expendMenu(cid){
    $("#menuli"+cid).children("ul").children("li").removeClass("hidden");
}
function loadsubMenus(cid){
    $.ajax({
        url:'newscategory/view.do',
        data: {cid: cid},
        async: false,
        dataType : 'json',
        type : 'POST',
        success: function (d){
            if(d.parentid!=0)
                gotoNode(d.parentid);
            else
                gotoNode(d.id);
        }
    });
}
loadArticle(newsid);

function gotolist(cid){
    recordCookie('categoryid',cid);
    window.location.href = "viewList.html";
}

function toggleLeft(id){
    $("#container .center_contect .left_news .left_menu .center ul li ul li").addClass("hidden");
    $("#menuli"+id).children("ul").children("li").removeClass("hidden");
}