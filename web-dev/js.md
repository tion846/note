# JS

### input
- 透過prop() 取得checkbox是否勾選
  ```javascript
    // type boolean
    $('#checkbox_id').prop('checked');
    $('#checkbox_id').prop('checked', false);
  ```

### 小數
- 4捨5入到小數n位
  ```javascript
    num.toFixed(n);
    1.56.toFixed(1); // 1.6
    1.49.toFixed(0); // 1
    // output type: String

    Math.round();
    Math.ceil();
    Math.floor();
    // output type: Number
  ```

### console
- 執行時間
  ```javascript
    console.time('for');
    for (i = 0; i < 5; i++)
    {
      // do something
    }
    console.timeEnd('for');
  ```

### 正則表達 RegExp
```javascript
  // replace
  var str = 'id-0.namespace';
  var regex = /(id-)\d(\.\w+)/;
  str = str.replace(regex, "$11$2");
  console.log(str);

  // test
  // ^ 開頭
  // $ 結尾
  var str1 = "ID-23456";
  var str2 = "ID-asdty";
  var str3 = "ID-987656";
  var reg = /^(ID-)\d{5}$/;
  console.log(reg.test(str1)); // true
  console.log(reg.test(str2)); // false
  console.log(reg.test(str3)); // false

  var regExp = /(ID-)\d{5}/;
  console.log(regExp.test(str1)); // true
  console.log(regExp.test(str2)); // false
  console.log(regExp.test(str3)); // true
```