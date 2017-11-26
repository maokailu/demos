
git基础
    1.工作区的快照 暂存区(添加内容到下次提交中) 本地git仓库
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



    git add 只提交一个文件吗 和 git add .适用情况
      序列号
      忽略文件2.2
      小乌龟
