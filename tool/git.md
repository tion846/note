# git

### 基本操作
- 初始化:  `git init`
- 查看狀態:  `git status`
- 查看分支:  `git branch`
- 查看commit紀錄:  `git log`
- 查看commit紀錄(單行):  `git log --pretty=oneline`
- 查看所有紀錄:  `git reflog`

### branch
- 切換分支:  `git checkout [branch_name]`
- 建立並切換分支:  `git checkout -b [branch_name]`
- 刪除分支:  `git branch -d [branch_name]`
- 合併分支:  `git merge [branch_name]`
- 合併分支(不用 fast forward 模式):  `git merge --no-ff [branch_name]`
- 合併分支(不用 fast forward 模式):  `git merge --no-ff -m [commit_name] [branch_name]`
- [rebase合併](https://blog.yorkxin.org/2011/07/29/git-rebase)

### commit
- 添加檔案:  `git add .`
- 建立commit:  `git commit -m [commit_name]`
- 退回到上個commit:  `git reset --hard HEAD^`
- 合併commit
  - 先建立一個暫時的commit `git commit -m [temp_name]`
  - 當前的commit與上一個commit做rebase的動作 進入vim模式 `git rebase -i HEAD~2`
  - 修改commit名稱 進入vim模式 `git commit --amend`

### remote
- 與遠端連接:  ` git remote add origin https://github.com/[tion846]/[project_name] `  
- 上傳(push)分支:  `git push origin [branch_name]`
- 同步遠端分支:  `git pull`
- 切換遠端分支:  `git checkout origin/[branch_name]`
- clone:  `git clone https://github.com/[owner]/[project_name]`
- fetch:  `git fetch -p origin`

### git配置
- 縮寫
```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch

git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### vim編輯器操作
- step1. i -> insert 插入
- step2. pick -> squash
- step3. # -> 註解  註解掉暫時的commit
- step4. esc
- step5. :wq! ->w寫入 q離開 !強制
