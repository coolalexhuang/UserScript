// ==UserScript==
// @name         CssInjector
// @namespace    http://tampermonkey.net/
// @version      0.2 
// @description  try to take over the world!
// @author       Alex Huang
// @match        https://www.moodys.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    includeCSSfile("https://raw.githubusercontent.com/coolalexhuang/bite-project/master/extension/styles/consoles.css");
        
    newItem('#LoginText123', 'Login', 'https://www.baidu.com', 1);
    newItem('#mdcMostViewedIssuersHead', 'Most Viwed Issuer Head', 'https://www.baidu.com', 1);
    newItem('#kw', 'Quick Search', 'https://www.baidu.com', 1);
    
    function newItem(locator, title, href, id) {
        var $ele=$(locator);
        if ($ele.length === 0) return;
        var t = $ele.offset().top;
        var l = $ele.offset().left;
        var w = $ele.outerWidth();
        var h = $ele.outerHeight();
        var $highlight = $('<div id="highlight" style="position: absolute; opacity: 0.4; z-index: 50000; background-color: red; left: ' + l + 'px; top: ' + t + 'px; width: ' + w + 'px; height: ' + h + 'px;"></div>');
        var $overlay = $('<div id="overlay" style="display: none; background-color: white; position: absolute; left: ' + l + 'px; top: ' + (t + h) + 'px; width: ' + w + 'px; "><div><a href="' + href +'" target="blank">' + title + '</a></div></div>');

        $highlight.hover(function(){
            $overlay.show();
        },function(){
            $overlay.hide();
        });
        
        $highlight.click(function(){
            $highlight.hide();
        });

        $overlay.hover(function(){
            $overlay.show();
        },function(){
            $overlay.hide();
        });

        $('body').append($highlight);
        $('body').append($overlay);
    }
    
    function includeCSSfile(href) {
        var head_node = document.getElementsByTagName('head')[0];
        var link_tag = document.createElement('link');
        link_tag.setAttribute('rel', 'stylesheet');
        link_tag.setAttribute('type', 'text/css');
        link_tag.setAttribute('href', href);
        head_node.appendChild(link_tag);
    }
    
    //ajax request sample
    function getDownloadLinkWithPanAPI(type){
            var downloadUrl = panAPIUrl + "download";
            var result;
            logid = getLogID();
            var params= {
                sign:sign,
                timestamp:timestamp,
                fidlist:fid_list,
                type:type,
                channel:'chunlei',
                web:1,
                app_id:250528,
                bdstoken:bdstoken,
                logid:logid,
                clienttype:0
            };
            $.ajax({
                url:downloadUrl,
                async:false,
                method:'GET',
                data:params,
                success:function(response){
                    result = response;
                }
            });
            return result;
        }    
     }


)();
