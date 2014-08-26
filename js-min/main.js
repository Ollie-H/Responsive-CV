var self,cv={model:[{id:"1",name:"Infiniti",description:"In dealership visualiser for luxury car brand Infiniti",case_study:"This was a touch screen application written using Front End Tecnologies (JS/CSS/HTML). The main issue I overcame in this project were full support for IE6 and exceeding memory issues that crop up with asset loading.",url:"http://infiniti.eu/configurator",assets:[{url:"Infiniti VS-Mobile",type:"video"},{url:"img/visualiser-1.png",type:"img"},{url:"img/visualiser-2.png",type:"img"},{url:"img/visualiser-3.png",type:"img"}]},{id:"2",name:"Honda Accessories",description:"",case_study:"Parallax microsite for Honda accesssories created using front end technologies (JS, CSS, HTML, JSON). Including locale specific pricing and languages using JSON as data storage. Basic mobile solutions using responsive JS and media queries.",assets:[{url:"img/honda-access-1.png",type:"img"},{url:"img/honda-access-2.png",type:"img"}]},{id:"3",name:"Saddington Baynes",description:"",case_study:"Custom agency site and corresponding CMS for agency Saddington Baynes. Built using (JS, SASS, HTML, PHP, MySQL). The site was very well recieved and on launch recieved a honourable mention award from Awwwards after recieving an average judge score of 8/10 for content/design and build.",assets:[{url:"img/sadds-1.png",type:"img"},{url:"img/sadds-2.png",type:"img"}]},{id:"4",name:"Leland Music",description:"",case_study:"Custom portfolio site for independent music agency Leland Music. Built using front end technologies (JS, CSS, HTML) and backend technolgies (PHP, MySQL).",assets:[{url:"img/leland-1.png",type:"img"},{url:"img/leland-2.png",type:"img"},{url:"img/leland-3.png",type:"img"}]},{id:"5",name:"David Titlow",description:"",case_study:"Custom portfolio site celebrity photographer David Titlow built using JS, SASS, HTML, PHP. Site uses a scroll hijacking method of navigation to get around the page.",assets:[{url:"img/titlow-1.png",type:"img"},{url:"img/titlow-2.png",type:"img"},{url:"img/titlow-3.png",type:"img"}]},{id:"6",name:"Infiniti",description:"",case_study:"Online responsive configurator for luxury car brand Infiniti with corresponding custom CMS. The front end application was made using front end technologies (JS/BACKBONE, Grunt, sass, require) abd the cms using php/Slimphp, composer and bootstrap. This large scale project involved a complicated backend system and intelligent mechanics on the front end to quickly and efficiently allow the user to configure their vehicle. Backbone/Marrionette MVW architecture was chosen for this project as it allowed me to keep a single page application and communicate easily with the RESTful API I put in place.",assets:[{url:"img/infiniti-1.png",type:"img"},{url:"img/infiniti-2.png",type:"img"},{url:"img/infiniti-3.png",type:"img"}]},{id:"7",name:"Board Intelligence",description:"",case_study:"Custom resonsive site build for board intelligence.",assets:[{url:"img/board-1.png",type:"img"},{url:"img/board-2.png",type:"img"},{url:"img/board-3.png",type:"img"}]},{id:"8",name:"My Codepen's",description:"",case_study:'I love creating and trying out new things with code to see its limtations and what can be achieved. So codepen has been a big help along the way. Here\'s a few of my more favourite codepens <br /> <a href="http://codepen.io/OllieHDev/live/fkaig">Time with words</a> <br /> <a href="http://codepen.io/OllieHDev/live/fvdoh">CSS switches</a> <br /> <a href="http://codepen.io/OllieHDev/live/owIGF">CSS Camera</a> <br /> <a href="http://codepen.io/OllieHDev/live/iCjIJ">Rodeo competition winner 2013</a>',assets:[{url:"img/codepen-1.png",type:"img"},{url:"img/codepen-2.png",type:"img"},{url:"img/codepen-3.png",type:"img"}]}],init:function(){self=this,cv.bindEvents(),cv.setSizes()},setSizes:function(){$("header").css({height:$(window).height()})},bindEvents:function(){$(".work__item").on("click",function(a){0==$(".popup").length&&cv.openPopup($(this)),a.preventDefault()}),$(".popup__close").on("click",function(a){1==$(".popup").length&&$(".popup").fadeOut("slow",function(){$(this).remove()}),a.preventDefault()}),$(".arrow").on("click",function(a){$("html, body").animate({scrollTop:$(window).height()+30}),a.preventDefault()}),$(window).resize(cv.setSizes)},openPopup:function(a){var b=_.findWhere(cv.model,{id:a.attr("data-workid")});if(!b)return!1;var c=cv.renderTemplate(b);$("main").append(c),$(".popup").fadeIn("slow",function(){cv.bindEvents(),$(".rslides").responsiveSlides({pager:!0,auto:!1})})},renderTemplate:function(a){var b=_.template(popupTemplate);return b(a)}},popupTemplate='<div class="popup"><span class="popup__close"><img src="img/close.png" /></span>\n<div class="container"><div class="grid popup__inner"><div class="grid__item grid__item--2-5"><h2 class="title"><%= name %></h2>\n<h4 class="desc"><%= description %></h4>\n<p class="case"><%= _.unescape(case_study) %></p>\n</div><div class="grid__item grid__item--3-5"><ul class="rslides">\n<% _.each(assets, function(asset){ %>\n<li>\n<% if(asset.type == "img") { %>\n<img src="<%= asset.url %>" />\n<% } else { %>\n<video class="video-js vjs-default-skin" controls preload="auto" data-setup="{}" poster="videos/<%= asset.url %>-screenshot.png">\n<source src="videos/<%= asset.url %>.mp4" type="video/mp4;" />\n<% } %>\n</li>\n<% }); %>\n</ul>\n</div></div> \n</div> \n</div>';$(document).ready(cv.init);