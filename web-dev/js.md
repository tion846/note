# JS

### input
- 透過prop() 取得checkbox是否勾選
  ```js
  //type boolean
  $('#checkbox_id').prop('checked');
  $('#checkbox_id').prop('checked', false);
  ```

### 小數
- 4捨5入到小數n位
  ```js
  num.toFixed(n)
  1.56.toFixed(1) //1.6
  ```

### console
- 執行時間
  ```js
  console.time('for');
  for (i = 0; i < 5; i++)
  {
    //todo
  }
  console.timeEnd('for');
  ```
