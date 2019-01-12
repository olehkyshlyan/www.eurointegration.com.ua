// ==UserScript==
// @name         Eurointegration | News
// @namespace    www.eurointegration.com.ua/news/
// @noframes
// @version      0.1
// @description  Eurointegration | www.eurointegration.com.ua | News
// @author       oleh.kyshlyan
// @match        http://www.eurointegration.com.ua/news/*
// @match        https://www.eurointegration.com.ua/news/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

var EurointegrationNews = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var bodyCollection = document.getElementsByTagName('body');
      if(bodyCollection.length > 0){
        var body = bodyCollection[0];
        if(body != undefined){
          //body.style.backgroundColor = 'transparent';
          body.style.backgroundImage = 'none';
          body.style.backgroundRepeat = 'repeat';
          body.style.backgroundAttachment = 'scroll';
          body.style.backgroundPosition = '0% 0%';
          body.style.paddingTop = '0px';
          body.className = '';

          var bodyChildren = body.children;
          var bdChLen = bodyChildren.length;

          for(var i=0; i<bdChLen; i++){
            var bodyChild = bodyChildren[i];

            if(bodyChild.id.indexOf('ar_') == 0){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id == 'ITCGsdiv'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.className == 'unit_header-banner'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.className == 'news_divide-banner'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id == 'endless'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id.indexOf('adriver') != -1){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'IFRAME'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'IMG'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'FOOTER' && bodyChild.id == 'footer'){
              var layoutInnerFooter = bodyChild.children[0];
              if(layoutInnerFooter != undefined){
                layoutInnerFooter.style.paddingTop = '0px';
              }
            }
          }

          var endless = document.getElementById('endless');
          if(endless != null){
            endless.parentNode.removeChild(endless);
          }
        }
      }
    }
    setTimeout(bodyInclosure,2000);
  }

  this.unitColumnBanner = function(){
    var unitColumnBannerInclosure = function(){
      var unitColumnBannerCollection = document.getElementsByClassName('unit_column-banner');
      var unitColumnBanner = unitColumnBannerCollection[0];
      if(unitColumnBanner != undefined && unitColumnBanner.className == 'unit_column-banner'){
        unitColumnBanner.style.display = 'none';
      }
    }
    setTimeout(unitColumnBannerInclosure,3000);
  }

  this.blockPost = function(){
    var blockPostCollection = document.getElementsByClassName('block_post');
    var blockPost = blockPostCollection[0];
    if(blockPost != undefined){
      var blockPostChildren = blockPost.children;
      var bkPstChLen = blockPostChildren.length;

      for(var i=0; i<bkPstChLen; i++){
        var currEl = blockPostChildren[i];

        if(currEl.className == "post__service"){
          if(currEl.children[0].className == "post__statistic"){
            currEl.children[0].style.display = 'none';
          }
        }

        if(currEl.className == "post__report"){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'ASIDE' && currEl.className == "post__service post__service_bottom"){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'IFRAME' && currEl.nextElementSibling.tagName == 'SPAN'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'SPAN' && currEl.previousElementSibling.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }

        if(currEl.id.indexOf('div-gpt-ad') != -1){
          currEl.style.display = 'none';
        }

        if(currEl.className == "article_300_banner_mobile"){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'A' && currEl.name == 'comments'){
          currEl.style.display = 'none';
        }

        if(currEl.className.indexOf('fb-comments') != -1){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.rightArticleColumn = function(){
    var rightArticleColumnCollection = document.getElementsByClassName('right_article_column');
    var rightArticleColumn = rightArticleColumnCollection[0];
    var rightColumnContent = rightArticleColumn.children[0];
    if(rightColumnContent != undefined && rightColumnContent.className == 'right_column_content'){
      var rightColContChildren = rightColumnContent.children;
      var rghtColContChLen = rightColContChildren.length;

      for(var i=0; i<rghtColContChLen; i++){
        var currEl = rightColContChildren[i];

        if(currEl.className == 'main_300_banner'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.newsDivideBanner = function(){
    var newsDivideBannerCollection = document.getElementsByClassName('news_divide-banner');
    if(newsDivideBannerCollection.length > 0){
      var newsDivideBanner = newsDivideBannerCollection[0];
      if(newsDivideBanner != undefined && newsDivideBanner.className == 'news_divide-banner'){
        newsDivideBanner.style.display = 'none';
      }
    }
  }
}

EurointegrationNews.body();
EurointegrationNews.unitColumnBanner();
EurointegrationNews.blockPost();
EurointegrationNews.rightArticleColumn();
EurointegrationNews.newsDivideBanner();
