var newsid = $.cookie('newsid');
function loadArticle(newsid){
    $.ajax({
        url:'news/view.do',
        data: {nid: newsid},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $(".news h1").html(d.title);
            $("#posttime").html(d.posttime);
            $("#author").html(d.author);
            $("#audit").html(d.audit);
            $("#news_content").html(d.content);
            loadMenus(d.categoryid);
        }
    });
}
function gotoNode(i){
    $.ajax({
        url:'newscategory/view.do',
        data: {cid: i},
        dataType : 'json',
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
        type : 'POST',
        success: function (d){
            $("#tc").empty();
            for(var obj in d){
                $("#tc").append(" <li id='menuli"+obj+"'><a href=javascript:gotolist("+d[obj].id+")>"+ d[obj].text+"</a></li>");
                if(d[obj].children){
                    $("#menuli"+obj).append("<ul id='ul"+obj+"'></ul>");
                    for(var sub in d[obj].children){
                        $("#ul"+obj).append("<li><a href=javascript:gotolist("+d[obj].children[sub].id+")>"+ d[obj].children[sub].text+"</a></li>");
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
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $(".news_title p.icon").html(d.name);
            if(d.parentid!=0)
                gotoNode(d.parentid);
            else
                gotoNode(d.id);

        }
    });
}
loadArticle(newsid);

function gotolist(cid){
    $.cookie('categoryid',cid, {expires:7, path:'/',domain:'web.shanghai3fx.com',secure:false});
    window.location.href = "viewList.html";
}