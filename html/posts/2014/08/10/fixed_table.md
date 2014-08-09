## 表格固定表头的问题和解决方案

分类：前端技术 | 标签：bootstrap-table、固定表头 | 发布时间：2014-08-10 00:00:00
___

在写插件[bootstrap table](https://github.com/wenzhixin/bootstrap-table)的时候，当数据过多的时候，需要对表格的 ```thead```进行固定，然后滚动表格的```tbody```。但是在实际的操作上，花了很多的时间在这个问题上，到现在也没有找到完美的解决方案，在这里记录下这个问题。

### 方案一(<=1.0.6)

最开始的解决方法是通过设置```th```中的```div```的 ```position```为```absolute```，从而达到固定表头的效果：

```
<thead>
    <tr>
        <th>
            <div class="th-inner" style="position: absolute; width: 197px;">
                Item ID
            </div>
        </th>
        <th>
            <div class="th-inner" style="position: absolute; width: 346px;">
                Item Name
            </div>
        </th>
        <th>
            <div class="th-inner" style="position: absolute; width: 255px;">
                Item Price
            </div>
        </th>
    </tr>
</thead>
```

这里的```width```，是需要通过对```tbody```的第一行元素的宽度进行计算出来的。

这个方法虽然可行，但是会出现如：
[https://github.com/wenzhixin/bootstrap-table/issues/34](https://github.com/wenzhixin/bootstrap-table/issues/34) 这个问题所描述的当表头文字过长，而表格内容过短，就会显示 ... 的问题，显然这种方法是存在很大的问题的。