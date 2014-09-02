## Android ant 编译问题收集

分类：移动开发 | 标签：ant、编译 | 发布时间：2013-02-26 00:23:00

___

#### 问题：

```
aapt not found under the right path
```

#### 解决：

```	
sudo apt-get install ia32-libs # 12.04
sudo apt-get install lib32z1 # 14.04
```

#### 问题：

```
 Perhaps JAVA_HOME does not point to the JDK. It is currently set to "/usr/lib/jvm/java-6-openjdk/jre"
```

#### 解决：

Fixed it by installing the open jdk:

```
sudo apt-get install openjdk-7-jdk
```
