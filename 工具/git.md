
二.git基础
    1.工作区（本地git仓库某次快照） 暂存区(添加内容到下次提交中) 本地git仓库
        git add(暂存或者追踪)         git commit(提交)
    2.检查当前文件状态：git status
                    git status -s (状态简览)
    3.跟踪新文件：git add
    4.暂存已修改文件: git add
    5.查看已暂存和未暂存的修改：1）要查看尚未暂存的文件更新了哪些部分，不加参数直接输入 git diff：
                            2）若要查看已暂存的将要添加到下次提交里的内容，可以用 git diff --cached 命令。（Git 1.6.1 及更高版本还允许使用 git diff --staged，效果是相同的，但更好记些。）
    6.提交更新：git commit
    7.跳过使用暂存区域:git commit -a
    8.移除文件
                1）git rm(从暂存区连带工作区删除)
                2）只是简单手工删除工作区文件（将在未暂存清单中找到）
                3）如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 -f（译注：即 force 的首字母）。 这是一种安全特性，用于防止误删还没有添加到快照的数据，这样的数据不能被 Git 恢复。
                4）另外一种情况是，我们想把文件从 Git 仓库中删除（亦即从暂存区域移除，但仍然希望保留在当前工作目录中。为达到这一目的，使用 --cached 选项：$ git rm --cached README
    9.移动文件   
                $ git mv file_from file_to

                运行 git mv 就相当于运行了下面三条命令：
                $ mv README.md README
                $ git rm README.md
                $ git add README
    10.查看提交历史
        (1)git log
        (2)一个常用的选项是 -p，用来显示每次提交的内容差异。 你也可以加上 -2 来仅显示最近两次提交：
            $ git log -p -2
        (3)如果你想看到每次提交的简略的统计信息，你可以使用 --stat 选项：
            $ git log --stat
    11.撤消操作
        (1)有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。 此时，可以运行带有 --amend 选项的提交命令尝试重新提交：
            $ git commit --amend
        (2)取消暂存的文件
            $ git reset HEAD CONTRIBUTING.md
        (3)撤消对文件的修改
            $ git checkout -- CONTRIBUTING.md
    12.远程仓库的使用
        查看远程仓库:
            git remote
        你也可以指定选项 -v，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL:
            $ git remote -v
        添加远程仓库:
            git remote add <shortname> <url>
        从远程仓库中抓取与拉取:
            $ git fetch [remote-name]
            这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。可以使用 git pull 命令来自动的抓取然后合并远程分支到当前分支。
        推送到远程仓库:
            git push [remote-name] [branch-name]
        查看远程仓库:
            git remote show [remote-name]
        远程仓库的移除与重命名:
            git remote rename
三.git分支
    3.1. 分支简介
        1.
            (1)Git 仓库中有五个对象：三个 blob 对象（保存着文件快照）、一个树对象（记录着目录结构和 blob 对象索引）以及一个提交对象（包含着指向前述树对象的指针和所有提交信息）。
            做些修改后再次提交，那么这次产生的提交对象会包含一个指向上次提交对象（父对象）的指针。
            Git 的分支，其实本质上仅仅是指向提交对象的可变指针。
        2.
            分支创建：
                $ git branch testing
            分支切换：
                $ git checkout testing
            想要新建一个分支并同时切换到那个分支上，你可以运行一个带有 -b 参数的 git checkout 命令：
                $ git checkout -b iss53
            分支合并（“上游分支快进”）
                $ git merge hotfix
            删除分支
                $ git branch -d hotfix
    3.3 分支管理
            查看分支列表：
                git branch
            如果需要查看每一个分支的最后一次提交，可以运行 git branch -v 命令：
                    $ git branch -v
            --merged 与 --no-merged 这两个有用的选项可以过滤这个列表中已经合并或尚未合并到当前分支的分支。 
    