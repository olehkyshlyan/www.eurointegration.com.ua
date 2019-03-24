// ==UserScript==
// @name         Eurointegration | Articles
// @namespace    https://www.eurointegration.com.ua/articles/
// @noframes
// @version      0.1
// @description  Eurointegration | www.eurointegration.com.ua | Articles
// @author       oleh.kyshlyan
// @match        http://www.eurointegration.com.ua/articles/*
// @match        https://www.eurointegration.com.ua/articles/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

var EurointegrationArticles = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
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

            if(bodyChild.id.indexOf('ar') == 0){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id == 'ITCGsdiv'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.className == 'unit_header-banner'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id == 'fb-root'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'IFRAME'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.tagName == 'IMG'){
              bodyChild.style.display = 'none';
            }

            if(bodyChild.id.indexOf('adriver') != -1){
              bodyChild.style.display = 'none';
            }
          }
        }
    }
    setTimeout(bodyInclosure,2000);
  }

  this.blockPost = function(){
    var blockPostInclosure = function(){
      jQuery(function(){
        var blockPost = jQuery("DIV[class*='block_post']");
        if(blockPost.length == 1){
          blockPost.children().each(function(index,element){
            if(element.className.indexOf('post__service') != -1){
              element.style.display = 'none';
            }

            if(element.className == 'post__report'){
              element.style.display = 'none';
            }

            if(element.id.indexOf('div-gpt-ad') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'IFRAME' && element.nextElementSibling.tagName == 'SPAN'){
              element.style.display = 'none';
            }

            if(element.tagName == 'SPAN' && element.previousElementSibling.tagName == 'IFRAME'){
              element.style.display = 'none';
            }

            if(element.tagName == 'A' && element.name == 'comments'){
              element.style.display = 'none';
            }

            if(element.className.indexOf('fb-comments') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(blockPostInclosure,2000);
  }

  this.postText = function(){
    var postTextInclosure = function(){
      jQuery(function(){
        var postText = jQuery("DIV[class*='post__text']");
        if(postText.length == 1){
          postText.children().each(function(index,element){
            if(element.tagName == 'P'){
              for(property of element.children){
                if(property.className == 'adsbygoogle'){
                  var childNodes = element.childNodes;
                  var chNdLen = childNodes.length;
                  var txtNode = '';
                  for(var i=0; i<chNdLen; i++){
                    var currNode = childNodes[i]
                    if(currNode.nodeType == 3){
                      currNode.nodeValue = currNode.nodeValue.trim();
                      if(currNode.nodeValue != ''){
                        txtNode += currNode.nodeValue;
                      }
                    }
                  }

                  if(txtNode == ''){
                    element.style.display = 'none';
                  }
                  break;
                }
              }
            }

            if(element.tagName == 'P' && element.innerHTML == ''){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(postTextInclosure,3000);
  }

  this.rightColumnContent = function(){
    var rightColumnContentInclosure = function(){
      var rightColContCollection = document.getElementsByClassName('right_column_content');
      var rghtColCntCollZeroEl = rightColContCollection[0];
      if(rghtColCntCollZeroEl != undefined){
        if(rghtColCntCollZeroEl.parentElement.className == 'right_article_column'){
          var rightColumnContent = rghtColCntCollZeroEl;
          for(property of rightColumnContent.children){
            if(property.className == 'article_300_banner'){
              property.style.display = 'none';
            }

            if(property.id == 'sticky-wrapper'){
              property.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(rightColumnContentInclosure,2000);
  }

  this.footer = function(){
    var footerInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var nodesCircuit = function(pN){
          var parentNode = pN;
          var pNChildren = parentNode.children;
          var pNChLen = pNChildren.length;
          for(var i=0; i<pNChLen; i++){
            var parentChild = pNChildren[i];

            if(parentChild.tagName == 'FOOTER' && parentChild.id.indexOf('footer') != -1){
              nodesCircuit(parentChild);
              break;
            }

            if(parentChild.className.indexOf('layout__inner_footer') != -1){
              parentChild.style.paddingTop = '15px';
            }
          }
        }
        nodesCircuit(body);
      }
    }
    setTimeout(footerInclosure,2000);
  }

}

EurointegrationArticles.body();
EurointegrationArticles.blockPost();
EurointegrationArticles.postText();
EurointegrationArticles.rightColumnContent();
EurointegrationArticles.footer();
