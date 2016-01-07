## 备份恢复 Meteor Mongo 数据库

分类：数据库 | 标签：meteor、导出 | 发布时间：2016-01-07 22:30:00

___

运行 `meteor` 后使用新的窗口运行

```
meteor mongo
```

可以看到类似下面的信息：
```
MongoDB shell version: 2.6.7                  
connecting to: 127.0.0.1:4001/meteor
```

Meteor 数据库运行于 127.0.0.1 3001 端口，Ctrl + D 退出即可。

导出：
```
mongodump -h 127.0.0.1 --port 4001 -d meteor
```

导入：
```
mongorestore -h 127.0.0.1 --port 4001 -d meteor dump/meteor
```
