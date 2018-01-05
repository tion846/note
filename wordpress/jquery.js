const $ = jQuery;

/* home page*/
let home_name = [
  '商品攝影',
  '美食攝影',
  '人像寫真',
  '團體畢業照 ',
  '個人/團體形象照',
  '婚禮紀錄',
  '婚紗攝影',
  '網拍服飾',
  '空間攝影',
  '活動紀錄',
  '劇照',
  // '會場直播',
  // '教學影片',
  // '產品介紹',
  '活動紀錄 影片',
  '縮時攝影',
  '廣告短片',
  '廣告花絮',
  '人物訪談',
  '婚禮紀錄',
  '愛情故事',
]

let home_url = [
  './works/flat/commodity',
  './works/flat/food',
  './works/flat/portrait/personal',
  './works/flat/graduation ',
  './works/flat/brand',
  './works/flat/wedding',
  './works/flat/dress',
  './works/flat/internet-auction',
  './works/flat/space',
  './works/flat/activity',
  './works/flat/drama',
  // './會場直播',
  // './教學影片',
  // './產品介紹',
  './works/dynamic/activity',
  './works/dynamic/timelapse',
  './works/dynamic/advertisement',
  './works/dynamic/highlights',
  './works/dynamic/interview',
  './works/dynamic/wedding',
  './works/dynamic/lovestory',
]

let home_bgcolor = [
  '#0C0C0C',
  '#1E1603',
  '#232113',
  '#1C1C3A',
  '#3A4A7A',
  '#031E16',
  '#132321',
  '#3A1C1C',
  '#7A3A4A',
  '#4659C4',
  '#573EC4',
  '#4D67C6',
  '#759EC6',
  '#CC7A7A',
  '#394D93',
  '#577593',
  '#313F91',
  '#995B5A',
]

var album_id = 'h3XZu';
var client_id = 'e19442117fef2cd';
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.imgur.com/3/album/" + album_id + "/images",
  "method": "GET",
  "headers": {
    "authorization": "Client-ID " + client_id
  }
}

image_link = new Array;

$.ajax(settings).done(function(response) {
  for (i = 0; i < response['data'].length; i++) {
    image_link[i] = response['data'][i]['link'];
  }
  var image = '';
  var image_div = '';
  for (i = 0; i < image_link.length; i++) {
    if (i % 2 == 0) {
      image = '<a href="' + home_url[i] + '"><div id="img_' + i + '" class="row" style="background-color:' + home_bgcolor[i] + '"><div class="left col-6"><img src="' + image_link[i] +
        '"width="100%"></div><div class="right col-6"><div id="name_' + i + '" class="home_name"><span>' + home_name[i] +
        '</span></div></div></div></a>';
    } else {
      image = '<a href="' + home_url[i] + '"><div id="img_' + i + '" class="row" style="background-color:' + home_bgcolor[i] + '"><div class="left col-6"><div id="name_' + i +
        '" class="home_name"><span>' + home_name[i] +
        '</span></div></div><div class="right col-6"><img src="' + image_link[i] + '"width="100%"></div></div></a>';
    }
    image_div = image_div + image;
  }
  $('#home_content').html(image_div);

  var scrW = screen.width;
  var scrH = screen.height;

  if (scrW <= 767) {
    $('.img-relative').height(scrH * 0.15 * 18);
    //console.log('1', scrH * 0.15 * 18);
  } else if (scrW <= 1024) {
    $('.img-relative').height(scrH * 0.2 * 18);
    //console.log('2', scrH * 0.2 * 18);
  } else {
    if (scrH == 1080) {
      $('.img-relative').height(scrH * 0.2987592592592593 * 18);
      //console.log('3', scrH * 0.2987592592592593 * 18);
      return;
    }
    $('.img-relative').height(scrH * 0.34 * 18);
    //console.log('4', scrH * 0.34 * 18);
  }

});

imgur_setting = function(album_id, client_id) {
  setting = {
    "async": false,
    "crossDomain": true,
    "url": "https://api.imgur.com/3/album/" + album_id + "/images",
    "method": "GET",
    "headers": {
      "authorization": "Client-ID " + client_id
    }
  }
  return (setting);
}

/*studio page*/
if( $('#picture-content').html() ){
let stduio_album = [
  'w378G',
  'bm77U',
  'PYM1d',
  'xc2e6',
  'Y0rDf',
];

for (s_id = 0; s_id < stduio_album.length; s_id++) {
  $.ajax(imgur_setting(stduio_album[s_id], client_id)).done(function(response) {
    var image_div = '';
    for (i = 0; i < response['data'].length; i++) {
      image_link = response['data'][i]['link'];
      image_div = image_div + `<div class="wapper">
      <img src="${image_link}" alt=""></div>`;
    }
    $('#column_' + s_id).append(image_div);

  });
}

}



/* works flat*/
if (location.pathname.indexOf('works') != -1) {

  var web_location = location.pathname.slice(0, -1);
  web_location = web_location.slice(web_location.lastIndexOf('/') + 1);

  let flat_location = [
    'commodity',
    'food',
    'personal',
    'couple',
    'pregnant',
    'graduation ',
    'brand',
    'wedding',
    'dress',
    'internet-auction',
    'space',
    'activity',
    'drama',
  ]

  let flat_album = [
    'zG84x',
    '7piEd',
    '9ZZZB',
    'woL6d',
    'Emc8i',
    'OQAFK',
    '2FNm9',
    '3ONpr',
    '1TP5T',
    'zCCsE',
    'opDqa',
    'pKOpn',
    'FjgRL',
  ]

  album_name = flat_album[flat_location.indexOf(web_location)];

  $.ajax(imgur_setting(album_name, client_id)).done(function(response) {
    var image_div = '';
    for (i = 0; i < response['data'].length; i++) {
      image_link = response['data'][i]['link'];
      image_div = image_div + `<div class="wapper">
  <img src="${image_link}" alt=""></div>`;
    }
    $('.column').append(image_div);
    $('.co').append(image_div);

  });
}




var tempHome = $('#tempHome').height();
$('.home_relative').height(tempHome);
var home_relative = $('.home_relative').height();



$(document).ready(function() {

  $('#primary-menu').prepend(`<li class="title-logo col-xl-2 col-12" style="display:inline-block; vertical-align: middle;">
  <a href="http://www.dasha-photo.com/studio/"><h1 style="color:#FFF;  margin:0;">大俠商業攝影</h1></a></li>`);

  $('#post-39 .page-header').attr('style','display:none');

  $('.initHidden').hide();

  $('#question-content li a').click(function() {
    $(this).next("div").slideToggle();
  });

  $('#service-choose1').click(function() {
    $('#service-photo').slideToggle();
  });

  $('#service-choose2').click(function() {
    $('#service-video').slideToggle();
  });

  $(".img-card").mouseenter(function() {
    $(this).find(".card-mask").css("visibility", "visible");
  });

  $(".img-card").mouseleave(function() {
    $(this).find(".card-mask").css("visibility", "hidden");
  });

  $('.wapper img').click(function(){
      $('.mask').css('display','flex');
      $('.mask-content').attr('src', $(this).attr('src'));
  });

  $('.close').click(function(){
    $('.mask').css('display','none');
  });


});

/* contact us menu*/
var contact_id = new Array();
contact_id[0] = $('#contact');
contact_id[1] = $('#transport');

var contact_content = new Array();
contact_content[0] = $('#contact-content');
contact_content[1] = $('#transport-content');

function change_contact(item) {
  for (let i = 0; i <= 1; i++) {
    if (i == item) {
      contact_id[i].attr('class', 'item-class');
      contact_content[i].show();
    } else {
      contact_id[i].removeAttr('class' , 'item-class');
      contact_content[i].hide();
    }
  }
}

/*insert breadcrumb at works*/
if (location.pathname.indexOf('/works') != -1) {
  let target_url = location.pathname.slice(7);
  let start = 0;
  let next = target_url.indexOf('/', 1);
  let href;
  let name;
  let temp = '';

  while (true) {

    if (next !== -1) {
      href = target_url.slice(start, next);
      //console.log(href);
      switch (href) {
        case '/works':
          name = "作品集"
          break;
        case '/flat':
          name = "平面"
          break;
        case '/dynamic':
          name = "動態"
          break;
        case '/portrait':
          name = "人像寫真"
          break;
        default:
          name = $('.page-title').text();
      }
      temp += `<li class='breadcrumb-item'><span>${name}</span></li>`;
      //console.log(temp);
      start = next;
      next = target_url.indexOf('/', start + 1);

    } else {
      break;
    }

  }
  $('.page-content').prepend(`<ol class="breadcrumb">${temp}</ol>`)
}









/*example*/

let home_name = [
  '商品攝影',
  '美食攝影',
  '人像寫真',
  '團體畢業照 ',
  '個人/團體形象照',
  '婚禮紀錄',
  '婚紗攝影',
  '網拍服飾',
  '空間攝影',
  '活動紀錄',
  '劇照',
  // '會場直播',
  // '教學影片',
  // '產品介紹',
  '活動紀錄 影片',
  '縮時攝影',
  '廣告短片',
  '廣告花絮',
  '人物訪談',
  '婚禮紀錄',
  '愛情故事',
]

let home_url = [
  './works/flat/commodity',
  './works/flat/food',
  './works/flat/portrait/personal',
  './works/flat/graduation ',
  './works/flat/brand',
  './works/flat/wedding',
  './works/flat/dress',
  './works/flat/internet-auction',
  './works/flat/space',
  './works/flat/activity',
  './works/flat/drama',
  // './會場直播',
  // './教學影片',
  // './產品介紹',
  './works/dynamic/activity',
  './works/dynamic/timelapse',
  './works/dynamic/advertisement',
  './works/dynamic/highlights',
  './works/dynamic/interview',
  './works/dynamic/wedding',
  './works/dynamic/lovestory',
]

let home_bgcolor = [
  '#1abc9c',
  '#16a085',
  '#2ecc71',
  '#27ae60',
  '#3498db',
  '#2980b9',
  '#f1c40f',
  '#f39c12',
  '#e67e22',
  '#1abc9c',
  '#16a085',
  '#2ecc71',
  '#27ae60',
  '#3498db',
  '#2980b9',
  '#f1c40f',
  '#f39c12',
  '#e67e22',
]

var album_id = 'h3XZu';
var client_id = 'e19442117fef2cd';
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.imgur.com/3/album/" + album_id + "/images",
  "method": "GET",
  "headers": {
    "authorization": "Client-ID " + client_id
  }
}

image_link = new Array;

$.ajax(settings).done(function(response) {
  for (i = 0; i < response['data'].length; i++) {
    image_link[i] = response['data'][i]['link'];
  }
  var image = '';
  var image_div = '';
  for (i = 0; i < image_link.length; i++) {
    if (i % 2 == 0) {
      image = '<a href="'+home_url[i]+'"><div id="img_' + i + '" class="row" style="background-color:'+ home_bgcolor[i] +'"><div class="left col-6"><img src="' + image_link[i] +
       '"width="100%"></div><div class="right col-6"><div id="name_'+ i +'" class="home_name"><span>'+ home_name[i] +
       '</span></div></div></div></a>';
    } else {
      image = '<a href="'+home_url[i]+'"><div id="img_' + i + '" class="row" style="background-color:'+ home_bgcolor[i] +'"><div class="left col-6"><div id="name_'+ i +
      '" class="home_name"><span>'+ home_name[i] +
      '</span></div></div><div class="right col-6"><img src="' + image_link[i] + '"width="100%"></div></div></a>';
    }
    image_div = image_div + image;
    // image = image +'<div id="img_' + i +'" class="img-contaitner" ><img src="' + image_link[i] +'"width="50%" ></div>';
    // image = image +'<div id="img_' + i +'" class="img-contaitner" ><img src="' + image_link[i] +'"></div> <div class="img-relative"></div>';
  }
  // console.log(image);
  $('#home_content').html(image_div);

  var scrW = screen.width;
  var scrH = screen.height;

  if (scrW <= 767) {
    $('.img-relative').height(scrH * 0.15 * 18);
    console.log('1', scrH * 0.15 * 18);
  } else if (scrW <= 1024) {
    $('.img-relative').height(scrH * 0.2 * 18);
    console.log('2', scrH * 0.2 * 18);
  } else {
    if (scrH == 1080 {
        $('.img-relative').height(scrH * 0.2987592592592593 * 18);
        console.log('3', scrH * 0.2987592592592593 * 18);
        return ();
      }
      $('.img-relative').height(scrH * 0.34 * 18);
    }

});

$('#home_content .row').mouseenter(function(){
  $(this).find('img').css('style','position:relative; left:200px;');
});


$('#primary-menu').prepend(`<div class="col-xl-2 col-12" style="display:inline-block; padding:1vh 0;">
  <h1 style="color:#FFF;">大俠商業攝影</h1></div>`);

$('#site-navigation').attr('style', 'position:fixed;z-index:1;');
$('#site-navigation').attr('z-index', '1');

$('[data-id=0]').find('a').attr('href', './商品攝影');

$('.menu-menu-container').prepend(`<div class="col-2">
  <h1 style="color:#FFF;">大俠商業攝影</h1></div>`);
$('#primary-menu').addClass('col-8');




let grurl = [
  './works/flat/commodity',
  './works/flat/food',
  './works/flat/portrait/personal',
  './works/flat/graduation ',
  './works/flat/brand',
  './works/flat/wedding',
  './works/flat/dress',
  './works/flat/internet-auction',
  './works/flat/space',
  './works/flat/activity',
  './works/flat/drama',
  './works/dynamic/activity',
  // './會場直播',
  // './教學影片',
  './works/dynamic/timelapse',
  // './產品介紹',
  './works/dynamic/advertisement',
  './works/dynamic/highlights',
  './works/dynamic/interview',
  './works/dynamic/wedding',
  './works/dynamic/lovestory',
]


for (let i = 0; i <= grid; i++) {
  $('[data-id=' + i + ']').find('a').attr('href', grurl[grid - i]);
}

var item_id = new Array();
item_id[0] = $('#studio');
item_id[1] = $('#picture');
item_id[2] = $('#rule');
item_id[3] = $('#calendar');
item_id[4] = $('#reserve');
item_id[5] = $('#question');
item_id[6] = $('#tutorial');

var item_content = new Array();
item_content[0] = $('#studio-content');
item_content[1] = $('#picture-content');
item_content[2] = $('#rule-content');
item_content[3] = $('#calendar-content');
item_content[4] = $('#reserve-content');
item_content[5] = $('#question-content');
item_content[6] = $('#tutorial-content');

function change_tab(item) {
  for (let i = 0; i <= 6; i++) {
    if (i == item) {
      item_id[i].attr('class', 'item-class');
      item_content[i].show();
    } else {
      item_id[i].removeAttr('class', 'item-class');
      item_content[i].hide();
    }
  }
}
/*  function show(id)
  {
    if (typeof($("#answer_" + id).attr('hidden') == undefined))
    {
      $("#answer_" + id).attr('hidden');
    }
    else
    {
      $("#answer_" + id).removeAttr('hidden');
    }
  }*/
