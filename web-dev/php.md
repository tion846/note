# php

### array
- 印出陣列 `print_r($array_name);`
- 陣列轉成JSON `json_encode($array_name);`

### date
- date函數 `date(format,timestamp)`
- mktime函數 `mktime(hour,minute,second,month,day,year)`
- 格式
  ```php
    date("Y-m-d"); #2018-01-24
    date("Y/m/d"); #2018/01/24
    date("Y.m.d"); #2018.01.24

    #Y:年
    #m:月
    #d:日
    #l:星期
    date("Y"); #2018
    date("m"); #01
    date("d"); #24
    date("l"); #Wednesday

    #h:時(12小時制)
    #i:分
    #s:秒
    #a:am/pm
    date("h:i:sa");
  ```
