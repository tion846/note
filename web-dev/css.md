### CSS

### text
- 強制斷句，用...取代多餘的
  ```css
    .span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
   ```

### transform
- 設定旋轉的圓心
```css
  .wrapper {
    transform: rotate(30deg);
    /* 左上角 */
    transform-origin: top left;
  }
```

### overflow: scroll
- 自訂scroll css
  ```css
    .content {
      overflow-y: auto;
      height: calc(90vh - 233px);
    }

    .content::-webkit-scrollbar {
      width: 8px;
    }

    .content::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .5);
      background-color: #FFF;
    }

    .content::-webkit-scrollbar-thumb {
      background-color: #999;
      outline: 1px solid slategrey;
    }
  ```
