---
title: spring-boot-maven-plugin有什么用？
date: 2023-3-19 22:43:25
category:
  - 杂谈
tag:
  - SpringBoot
  - SpringCloud
---

# spring-boot-maven-plugin有什么用？

在Spring Initializr生成的SpringBoot项目中，或者在GitHub和Gitee生成的项目中通常会有这样一个插件`spring-boot-maven-plugin`通常在`pom.xml`的配置文件中经常以下面这样的形式出现。

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

这个插件因为网络原因经常加载不出来，而导致爆红。很多人在多次尝试下载无效后通常会直接注释或删除掉这个插件。这回对项目有影响吗？

**答案是：开始阶段基本没有，但其作用于项目部署阶段。**

但是这个插件的作用也很重要。**在项目引入这个插件后，打包时，会把需要的各种Maven依赖都打到Jar包中**。打包后使用`java -jar 包名`命令可以直接独立运行，这样的jar包也叫fat jar。反之，如果没有此插件或者该插件被注释掉，打包后，Jar包将无法正常启动。


