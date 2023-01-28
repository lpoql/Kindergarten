# 归并排序

- 归并操作<br>
  也称归并算法，指将两个已经排序的序列合并成一个序列的操作
- 分治法<br>
    - 分割：递归的将当前序列平均分割成两半
    - 归并：在保持元素顺序的同时将上一步得到的子序列集成到一起

将序列拆分为左右两部分，分别对子序列进行排序，每个子序列依照对半拆分依次递归进行排序，最后将排序好的序列整合在一起。

图示：<br>
![merge-sort](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Merge-sort-example-300px.gif/220px-Merge-sort-example-300px.gif)
