
合併commit
git commit -m [temp_name]
git rebase -i HEAD~2

修改commit
git commit --amend

vim編輯器
i -> insert 插入
esc
:wq! ->w寫入 q離開 !強制
pick -> squash
註解# 原本的commit號

上傳
git fetch -p origin
git rebase origin/dasha
git push origin [branch]

###Html
<body>
  <div id="capture" class="container">
  <span>bili</span>
    <img id="img" src="https://i.ytimg.com/vi/CYGbA72m3so/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCOegWHRhnNWe7TyqZ1Fe0fLgTPDA">
    <video id="video" controls="" muted="" loop="">
                            <source src="http://localhost:8000/media/2/lesson/Toradora! - Ryuuji meets the Palmtop Tiger (Taiga) - English subs!.mp4" id="preview_video_1_1">
                          </video>
  </div>

  <canvas id="tutorial">
  </canvas>

  <div id="div">

  </div>
</body>

###JS
function(){
  var capture = $('#capture');
  var div = $('#div');
  var img = $('#img');
  var video = $('#video');


  html2canvas(capture[0]).then(function(canvas){
  	//console.log(canvas);
  	canvas.height = 400;
    canvas.width = 600;
    canvas.id = "can";
  	 var ctx = canvas.getContext('2d');
     ctx.drawImage(img[0],20,10);
     ctx.drawImage(video[0],60,10);
    div.append(canvas);
  });

  setTimeout("$('#can').attr('sytle',''); console.log('fa');",3000);
}

###css
#show{
  margin-top: 50px;
}

#div
{
  height:50vh;
}


## 待解決
* [x] 常見問題A7 ?公分  A6點擊這裡聯絡
* [ ] Model Card(picture)、孕婦(picture) >大俠
* [ ] 會場直播 (凱毛)
* [x] footer(LINE@)
* [ ] 校稿
* [x] 劇照(作品集有 menu沒有)
* [x] 關於我們>服務內容
* [x] 攝影棚出租>攝影棚介紹(picture)
* [x] 攝影棚出租> 使用規則
* [x] 其他設備 項目缺4.9
* [x] 聯絡我們>公司名稱統編/匯款帳戶
* [x] LOGO


* [ ] 關於我們 滿版picture*
* [x] 空間器材(攝影棚) 照片分類 造景 彭登 道具*
* [x] 攝影課程 a*
* [x] map
* [x] 影片大小
* [x] 服務流程>注意事項
* [x] youtube account (video)
* [x] 表單樣式(bootstrap)
* [x] 作品集>平面、動態(放棄)
* [x] 聯絡我們>公司資料
* [x] 行事曆
* [x] HOME內容--
* [x] footer
* [x] menu 固定
* [x] title 大俠商業攝影
* [x] 關於我們 服務內容斷句
* [x] 服務流程 hover
* [x] 服務流程 div流程
* [x] 預約攝影棚> 行事曆
* [x] 攝影棚 -> 空間器材 2
* [x] 攝影棚介紹 換位 1
* [x] 攝影棚>棚燈使用教學*
* [x] 預約攝影棚 active   cursor: pointer; a color #333
* [x] QA 展開
* [x] 圖庫販售>圖庫內容包含風景、人像，國外自然風景、人文、建築等
* [x] 更多服務 >title h1
* [x] 表單服務 ->預約拍攝
* [x] 匯款資料 成一個 row
* [x] RWD(攝影棚出租)
* [x] RWD(服務流程)
* [x] RWD(更多服務)
* [x] RWD(聯絡我們)

## imgur
Client ID:
e19442117fef2cd

Client secret:
bb5610a933148ce6a396abe0c389194aab1f41f8

## FTP
210.242.72.200
dasha-photo.com

### 影片連結留存
* 活動紀錄
  - [creep mouse](https://youtu.be/akiPfkoqPUA)
  - [李準亞洲巡迴見面會](https://youtu.be/mKNP_zU_x5U)
  - [劍俠情緣三](https://youtu.be/A5hBJqK-GRE)
  - [WENĒE 走秀](https://youtu.be/_qiM7j6PROM)
  - [東香社區畫展](https://youtu.be/9-Q8WKidzkk)
  - [糖果屋才藝教室](https://youtu.be/xjiwnOTw0Dk)
* 教學影片
  - [手機微距攝影教學](https://www.youtube.com/watch?v=7VyDb06YS5w)
  - [Nikon D850 專業上手體驗](https://www.youtube.com/watch?v=qZiBq9I8B8k)
* 縮時攝影
  - [宜蘭國際童玩節縮時攝影](https://youtu.be/pU01tyuoJLA)
  - [蘭嶼縮時第一集](https://youtu.be/15VmrIUK6M4)
  - [蘭嶼縮時第二集](https://youtu.be/LYc6vTIcfuc)
  - [kamel年度集合](https://youtu.be/57-v15T6hkc)
* 產品介紹
  - [Reify Solus 3D printer](https://youtu.be/NAs2jKpUlcc)
  - [神牛Godox V860II 及 TT685](https://www.youtube.com/watch?v=2IWI-UHhcCc)
* 人物訪談
  - [BAZAAR 時尚教主 陳欣欣](https://youtu.be/OcfTNWnc4m8)
  - [天下3D 人物專訪 怕胖團](https://youtu.be/AeU1GgvBr6s)
  - [天下3D 人物專訪 林奕翔](https://youtu.be/r8A9TYygYE8)
  - [帝康 田馥甄 訪談](https://youtu.be/xSh88qfewpY)
* 廣告短片
  - [【BLAH這周去哪裡玩】Lulu 美學館 ft 高以愛](https://youtu.be/jQdEl_xaItM)
  - [時尚婚紗創作Youtobe](https://www.youtube.com/watch?v=lChwfskZ3kQ)
  - [2R手工真皮](https://youtu.be/IwBTMAmLFZQ)
  - [Blah DIY文字朝Ｔ 宛宛兒](https://youtu.be/w5czJCYtMN0)
  - [電電充無線充電APP](https://youtu.be/IhNfjjyqsAc)
  - [Kohler宣傳片](https://youtu.be/0udc9IZhLDY)
  - [Labu Labu 形象](https://youtu.be/oxLwJUrltVI)
  - [CENTIGRAD 形象](https://youtu.be/nCOwu_8H_OM)
* 廣告花絮
  - [陳芳語花絮](https://youtu.be/pNWbUk1HpkU)
  - [Grace gift](https://youtu.be/NmpiCB9rYXA)
  - [OPT vision 圓瑞 隱形眼鏡 炎亞綸](https://youtu.be/zUkIgSW3Rg0)
  - [Vogue x Eyescream](https://youtu.be/rcMlYwy0In8)
  - [帝康 田馥甄 拍攝花絮](https://youtu.be/dG0nY7FcJCc)
* 婚禮紀錄
  - [長翰Tommy 姿君Vicky 婚禮](https://youtu.be/pZptiQmorso)
  - [雨時 艾嘉 婚宴精華](https://youtu.be/F-4oP9VuIxs)
  - [Bear Yuki 玉祥 詩穎 婚禮](https://youtu.be/7q-HhYuXc2E)
* 愛情故事
  - [Tommy Vicky 獻唱情歌求婚](https://youtu.be/pBlR3eY_o-0)
  - [飛寶之戀](https://youtu.be/aZMq3CcsL2E)
  - [明駿 佳貞 愛情故事](https://www.youtube.com/watch?v=vTg_IXL7C5Q)



## 參考
- [jerrystudio](http://www.jerrystudio.com/)
- [赫德商業](http://www.heartphoto.com.tw/index.php#works)
- [photoxshare](https://photoxshare.com/tw/service/photographer)
- [點石商業](http://midas-tw.com/index.php)
- [iwatch](https://iwatch.com.tw/)
- [萬貳wenya](http://www.wenyastudio.com/)
- [全景商業](http://www.ffstudio.com.tw/index.html)
- [hahow](https://hahow.in/courses/create)

## wordpress需求
  * 選擇主題(深色系)
  * 確定Menu
  * 每個page的內容
  * 擺放樣式
  * 素材(攝影作品)
  * 選擇字型

關於我們 About
作品集 Works
服務流程 Process
攝影棚出租 Studio
更多服務 More Services
聯絡我們 Contact Us

works/flat/


平面 flat
商品攝影  commodity
美食攝影  food
人像寫真 portrait
     個人寫真 personal
     情侶寫真 couple
     孕婦寫真 pregnant
     全家福
畢業/團體畢業照 graduation
個人/團體形象照 brand
Model Card
婚禮紀錄  wedding
婚紗攝影  dress
網拍服飾  internet-auction
空間攝影  space
活動紀錄  activity
劇照 drama

動態 dynamic
活動紀錄 activity
會場直播
教學影片 tutorial
縮時攝影 timelapse
產品介紹 commodity
人物訪談 interview
廣告短片 advertisement
廣告花絮 highlights
婚禮紀錄 wedding
愛情故事 lovestory



### 這是舊的Menu
  - 首頁 Home
  - 關於、聯絡我們、公司簡介 about contact
  - 人像攝影
    - 企業形象照
    - 個人寫真
    - 兒童寫真
    - 全家福
    - 彩妝
    - 雜誌
  - 商業攝影
    - 汽車
    - 網拍服裝
    - 電子產品
    - 食品
    - 空間攝影
  - 活動紀錄
  - 婚禮 婚紗
    - 自助婚紗
  - 攝影師
    - 凱毛Kamel
    - 張紹峰
  - 租借攝影棚


## 主題
orvis

### 大俠
[snaps](https://snapsdemo.wordpress.com/)
[Argent](https://wordpress.com/theme/argent)

### 俠女
[dady2](https://dyad2demo.wordpress.com/)
[CUBIC](https://cubicdemo.wordpress.com/)

### 凱毛
[Ubud $1248](https://ubuddemo.wordpress.com/)
[MUSEUM](https://museumdemo.wordpress.com/)
