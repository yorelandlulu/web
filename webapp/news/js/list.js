var categoryid = $.cookie('categoryid');
var cobj;
loadMe(categoryid);
function loadFromTop(cid, text){
    loadLeftMenu(cid, text);
    $.ajax({
        url:'newscategory/listByPid.do',
        dataType : 'json',
        data : {pid :cid },
        type : 'POST',
        success: function (data){
            if (data.rows.length>0){
                if(data.rows[0].viewarticle == 1) {
                    gotoview(data.rows[0].articleid);
                }
                LoadRightContent(data.rows[0].id, data.rows[0].name, 1);
            }
            else{
                if(cobj.viewarticle == 1) {
                    gotoview(cobj.articleid);
                }
                LoadRightContent(cid, text, 1);
            }
        }
    });
}
function loadMe(){
    $.ajax({
        url: 'newscategory/view.do',
        data: {cid: categoryid},
        dataType: 'json',
        type: 'POST',
        success: function (d) {
            cobj = d;
            if(d.parentid==0)
                loadFromTop(categoryid, d.name);
            else{
                loadLeftMenuWithoutName(d.parentid);
                LoadRightContent(categoryid, d.name, 1);
            }
        }
    });
}
function loadLeftMenuWithoutName(cid){
    $.ajax({
        url:'newscategory/view.do',
        data: {cid: cid},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            loadLeftMenu(cid, d.name);
        }
    });
}
function loadLeftMenu(cid, text){
    $("#ctitle").html(text);
    $(".menu a").removeClass("select");
    $("#li"+cid).addClass("select");
    $.ajax({
        url:'newscategory/listTree.do',
        data: {cid: cid},
        dataType : 'json',
        type : 'POST',
        success: function (d) {
            $("#tc").empty();
            for (var obj in d) {
                if (d[obj].viewarticle != 1) {
                    $("#tc").append(" <li onclick='javascript:toggleLeft(" + obj + ")' id='menuli" + obj + "'><a href=javascript:LoadRightContent(" + d[obj].id + ",'" + d[obj].text + "',1)>" + d[obj].text + "</a></li>");
                }
                else {
                    $("#tc").append(" <li onclick='javascript:toggleLeft(" + obj + ")' id='menuli" + obj + "'><a href=javascript:gotoview(" + d[obj].articleid + ")>" + d[obj].text + "</a></li>");
                }
                if (d[obj].children) {
                    $("#menuli" + obj).append("<ul id='ul" + obj + "'></ul>");
                }
                for (var sub in d[obj].children) {
                    if (d[obj].children[sub].viewarticle != 1) {
                        $("#ul" + obj).append("<li class='hidden'><a href=javascript:LoadRightContent(" + d[obj].children[sub].id + ",'" + d[obj].children[sub].text + "',1)>" + d[obj].children[sub].text + "</a></li>");
                    }
                    else {
                        $("#ul" + obj).append("<li class='hidden'><a href=javascript:gotoview(" + d[obj].children[sub].articleid + ")>" + d[obj].children[sub].text + "</a></li>");
                    }
                }
            }
        }
    });
}

function LoadRightContent(cid, text, pageno){
    $("#subTitle").html(text);
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: cid, page: pageno, rows: 10},
        type : 'POST',
        success: function (data){
            $(".news_list ul").empty();
            for(var i in data.rows){
                $(".news_list ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+data.rows[i].title+"</a><span>"+data.rows[i].posttime+"</span></li>");
            }
            $(".pages span").empty();
			if(pageno>1)
				$(".btn_prev").attr("href","javascript:LoadRightContent("+cid+",'"+text+"',"+(pageno-1)+")");
			if(pageno<=(data.total/10-1))
				$(".btn_next").attr("href","javascript:LoadRightContent("+cid+",'"+text+"',"+(pageno+1)+")");
            for(var i=0; i <data.total/10; i++ ){
                if(i==pageno-1){
                    $(".pages span").append("<a class='on' href=javascript:LoadRightContent("+cid+",'"+text+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
                else{
                    $(".pages span").append("<a href=javascript:LoadRightContent("+cid+",'"+text+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
            }
        }
    });
}

function gotoview(id){
    recordCookie('newsid',id);
    window.location.href = "viewArticle.html";
}

function toggleLeft(id){
    $("#container .center_contect .left_news .left_menu .center ul li ul li").addClass("hidden");
    $("#menuli"+id).children("ul").children("li").removeClass("hidden");
}

function gotosearch(id){
    recordCookie('search',id);
    window.location.href = "searchList.html";
}