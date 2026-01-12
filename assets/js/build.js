const footer = '<footer class="main-footer sticky footer-type-1"> \
                <div class="footer-inner"> \
                    <!-- Add your copyright text here -->                   \
					<div class="footer-text"> \
                        ❤️友情链接：&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ihezu.run/vwZMvu/?ref=https://juzyz.com" target="_blank"><strong>奈飞小铺</strong></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \
                    </div> \
					<br /> \
					<br /> \
					<div class="footer-text"> \
                          &copy; 2020-2022 <a href="https://juzyz.com">聚资源</a> 版权所有 \
                        <a href="./about.html"><strong>关于聚资源</strong></a>  由 <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank"><strong>Webstack</strong></a> 驱动 design by <a href="http://viggoz.com/?ref=https://juzyz.com" target="_blank"><strong>Viggo</strong></a> 空间由<a href="https://www.alwaysdata.com/?ref=https://juzyz.com"><strong>alwaysdata</strong></a>免费提供 \
						</div> \
						<br /> \
						<br /> \
						<div class="footer-text">					\
					<span id="jinrishici-sentence">正在加载今日诗词....</span> \
                    <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script> \
					</div>&nbsp;&nbsp;&nbsp;&nbsp; \
					\
						<div class="footer-text"> \
						站点已稳定运行：<SPAN id=span_dt_dt style="color: #2F889A;"></SPAN> \
<script language=javascript>function show_date_time(){ \
					                    window.setTimeout("show_date_time()", 1000); \
					                    BirthDay=new Date("1/1/2020 00:00:00 "); \
					                    today=new Date(); \
					                    timeold=(today.getTime()-BirthDay.getTime()); \
					                    sectimeold=timeold/1000 \
					                    secondsold=Math.floor(sectimeold); \
					                    msPerDay=24*60*60*1000 \
					                    e_daysold=timeold/msPerDay \
					                    daysold=Math.floor(e_daysold); \
					                    e_hrsold=(e_daysold-daysold)*24; \
					                    hrsold=Math.floor(e_hrsold); \
					                    e_minsold=(e_hrsold-hrsold)*60; \
					                    minsold=Math.floor((e_hrsold-hrsold)*60); \
					                    seconds=Math.floor((e_minsold-minsold)*60); \
					                    span_dt_dt.innerHTML="<font style=color:#C40000>"+daysold+"</font> 天 <font style=color:#C40000>"+hrsold+"</font> 时 <font style=color:#C40000>"+minsold+"</font> 分 <font style=color:#C40000>"+seconds+"</font> 秒"; \
					                    }show_date_time();</script> \
					   \
                        <!--  - Purchase for only <strong>23$</strong> --> \
                    </div> \
					<SCRIPT language=JavaScript> \
<!-- \
\
var caution = false \
\
function setCookie(name, value, expires, path, domain, secure) { \
\
var curCookie = name + "=" + escape(value) + \
\
((expires) ? "; expires=" + expires.toGMTString() : "") + \
\
((path) ? "; path=" + path : "") + \
\
((domain) ? "; domain=" + domain : "") + \
\
((secure) ? "; secure" : "") \
\
if (!caution || (name + "=" + escape(value)).length <= 4000) \
\
document.cookie = curCookie \
\
else \
\
if (confirm("Cookie exceeds 4KB and will be cut!")) \
\
document.cookie = curCookie \
\
} \
\
function getCookie(name) { \
\
var prefix = name + "=" \
\
var cookieStartIndex = document.cookie.indexOf(prefix) \
\
if (cookieStartIndex == -1) \
\
return null \
\
var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length) \
\
if (cookieEndIndex == -1) \
\
cookieEndIndex = document.cookie.length \
\
return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex)) \
\
} \
\
function deleteCookie(name, path, domain) { \
\
if (getCookie(name)) { \
\
document.cookie = name + "=" + \
\
((path) ? "; path=" + path : "") + \
\
((domain) ? "; domain=" + domain : "") + \
\
"; expires=Thu, 01-Jan-70 00:00:01 GMT" \
\
} \
\
} \
\
function fixDate(date) { \
\
var base = new Date(0) \
\
var skew = base.getTime() \
\
if (skew > 0) \
\
date.setTime(date.getTime() - skew) \
\
} \
\
var now = new Date() \
\
fixDate(now) \
\
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000) \
\
var visits = getCookie("counter") \
\
if (!visits) \
\
visits = 1 \
\
else \
\
visits = parseInt(visits) + 1 \
\
setCookie("counter", visits, now) \
\
document.write("欢迎光临本站，您是第" + visits + "位访问者！") \
\
// --> \
\
</SCRIPT> \
\
\
\
\                  
            </footer>';});


$(document).ready(function(){
  var main_content = $(".main-content");

  //添加目录和内容
  build_data(itemlist);

  //添加footer
  main_content.append(footer);
  
});

function build_data(itemlist){
    itemlist.forEach(element => {
    //     console.log("所有元素↓");
    //    console.log(element);
       if(element.hasOwnProperty('web')){
        add_web_menu(element.name,element.icon);
        add_main_content_html(element);
       }
       else if(element.hasOwnProperty('children')){
        add_children_menu(element.name,element.icon,element.children);
       }
       
    });
}

//没有childr的菜单
function add_web_menu(menu_name,icon){
    var html = `<li>\
    <a href="#${menu_name}" class="smooth">\
        <i class="${icon}"></i>\
        <span class="title">${menu_name}</span>\
    </a>\
</li>`
    const main_menu=$("#main-menu");
    main_menu.append(html);
}


//有children的菜单
function add_children_menu(parent_name,parent_icon,children){
    var html = document.createElement("li");
    //添加父菜单
    var parent = `<a>
    <i class="${parent_icon}"></i>
    <span class="title">${parent_name}</span>
</a>`;
    html.appendChild(parseElement(parent));

    //处理children
    var ul = document.createElement("ul");
    children.forEach(element => {
        // console.log("看看children↓");
        // console.log(element);
        var children = `<li>
        <a href="#${element.name}" class="smooth">
            <span class="title">${element.name}</span>
        </a>
    </li>`
        ul.appendChild(parseElement(children));
        add_main_content_html(element);
    });
    
    //添加到主菜单
    html.appendChild(ul);
    $("#main-menu").append(html);
    // console.log(html);
}

function parseElement(htmlString) {
	return new DOMParser().parseFromString(htmlString,'text/html').body.childNodes[0];
}


function add_main_content_html(item){
    var main_content = $(".main-content");

    //标题
    var h4_title=`<h2 class="text-gray"><i class="linecons-tag" style="margin-right: 7px;" id="${item.name}"></i>${item.name}</h2>`;
    main_content.append(h4_title);


    //创建row行和内部元素
    var row = document.createElement("div");
    row.className ="row";
    item.web.forEach(element => {
        // console.log(element);
        var nav_itme = `<div class="col-sm-3">
        <div class="xe-widget xe-conversations box2 label-info" onclick="window.open('${element.url}', '_blank')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="${element.url}">
            <div class="xe-comment-entry">
                <a class="xe-user-img">
                    <img data-src="${element.logo}" class="lozad img-circle" width="40">
                </a>
                <div class="xe-comment">
                    <a href="#" class="xe-user-name overflowClip_1">
                        <strong>${element.title}</strong>
                    </a>
                    <p class="overflowClip_2">${element.desc}</p>
                </div>
            </div>
        </div>
    </div>`
        
        row.appendChild(parseElement(nav_itme));
        
    });
    main_content.append(row);
    main_content.append(document.createElement("br"))


}