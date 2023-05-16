const l=JSON.parse('{"key":"v-f9ac1b86","path":"/mysql/MySQL.html","title":"MySQL——深入理解","lang":"zh-CN","frontmatter":{"title":"MySQL——深入理解","date":"2023-03-13T10:38:34.000Z","category":["MySQL"],"tag":["MySQL"],"description":"SQL SQL的分类 DDL Data Definition Language 数据定义语言，用来定义数据库对象(数据库，表，字段) DML Data Manipulation Language 数据操作语言，用来对数据库表中的数据进行增删改 DQL Data Query Language 数据查询语言，用来查询数据库中表的记录 DCL Data Control Language 数据控制语言，用来创建数据库用户、控制数据库的访问权限 DDL 数据库相关 查询所有数据库 SHOW DATABASES; 查询当前数据库 SELECT DATABASE(); 创建 CREATE DATABASE [ IF NOT EXISTS ] 数据库名[DEFAULT CHARSET 字符集][ COLLATE排序规则];","head":[["meta",{"property":"og:url","content":"https://littlebai118.github.io/mysql/MySQL.html"}],["meta",{"property":"og:site_name","content":"白先生"}],["meta",{"property":"og:title","content":"MySQL——深入理解"}],["meta",{"property":"og:description","content":"SQL SQL的分类 DDL Data Definition Language 数据定义语言，用来定义数据库对象(数据库，表，字段) DML Data Manipulation Language 数据操作语言，用来对数据库表中的数据进行增删改 DQL Data Query Language 数据查询语言，用来查询数据库中表的记录 DCL Data Control Language 数据控制语言，用来创建数据库用户、控制数据库的访问权限 DDL 数据库相关 查询所有数据库 SHOW DATABASES; 查询当前数据库 SELECT DATABASE(); 创建 CREATE DATABASE [ IF NOT EXISTS ] 数据库名[DEFAULT CHARSET 字符集][ COLLATE排序规则];"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://littlebai118.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-16T02:54:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MySQL——深入理解"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-03-13T10:38:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-16T02:54:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL——深入理解\\",\\"image\\":[\\"https://littlebai118.github.io/\\"],\\"datePublished\\":\\"2023-03-13T10:38:34.000Z\\",\\"dateModified\\":\\"2023-05-16T02:54:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL","slug":"sql","link":"#sql","children":[{"level":3,"title":"SQL的分类","slug":"sql的分类","link":"#sql的分类","children":[]},{"level":3,"title":"DDL","slug":"ddl","link":"#ddl","children":[]},{"level":3,"title":"DML","slug":"dml","link":"#dml","children":[]},{"level":3,"title":"DQL","slug":"dql","link":"#dql","children":[]},{"level":3,"title":"DCL","slug":"dcl","link":"#dcl","children":[]}]},{"level":2,"title":"MySQL内置函数","slug":"mysql内置函数","link":"#mysql内置函数","children":[{"level":3,"title":"字符串函数","slug":"字符串函数","link":"#字符串函数","children":[]},{"level":3,"title":"数值函数","slug":"数值函数","link":"#数值函数","children":[]},{"level":3,"title":"日期函数","slug":"日期函数","link":"#日期函数","children":[]},{"level":3,"title":"流程控制函数","slug":"流程控制函数","link":"#流程控制函数","children":[]}]},{"level":2,"title":"约束","slug":"约束","link":"#约束","children":[{"level":3,"title":"外键约束","slug":"外键约束","link":"#外键约束","children":[]},{"level":3,"title":"外键的删除更新行为","slug":"外键的删除更新行为","link":"#外键的删除更新行为","children":[]}]},{"level":2,"title":"多表查询","slug":"多表查询","link":"#多表查询","children":[{"level":3,"title":"多表关系","slug":"多表关系","link":"#多表关系","children":[]},{"level":3,"title":"多表查询分类","slug":"多表查询分类","link":"#多表查询分类","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"事务简介","slug":"事务简介","link":"#事务简介","children":[]},{"level":3,"title":"事务操作","slug":"事务操作","link":"#事务操作","children":[]}]},{"level":2,"title":"MySQL体系结构图","slug":"mysql体系结构图","link":"#mysql体系结构图","children":[]},{"level":2,"title":"存储引擎","slug":"存储引擎","link":"#存储引擎","children":[{"level":3,"title":"InnoDB存储引擎","slug":"innodb存储引擎","link":"#innodb存储引擎","children":[]},{"level":3,"title":"MyISAM存储引擎","slug":"myisam存储引擎","link":"#myisam存储引擎","children":[]},{"level":3,"title":"Memory存储引擎","slug":"memory存储引擎","link":"#memory存储引擎","children":[]},{"level":3,"title":"三个常用存储引擎的对比","slug":"三个常用存储引擎的对比","link":"#三个常用存储引擎的对比","children":[]},{"level":3,"title":"存储引擎选择","slug":"存储引擎选择","link":"#存储引擎选择","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"索引的结构","slug":"索引的结构","link":"#索引的结构","children":[]},{"level":3,"title":"B树","slug":"b树","link":"#b树","children":[]},{"level":3,"title":"B+树","slug":"b-树","link":"#b-树","children":[]},{"level":3,"title":"Hash","slug":"hash","link":"#hash","children":[]},{"level":3,"title":"为什么InnoDB存储引擎选择使用B+tree索引结构?","slug":"为什么innodb存储引擎选择使用b-tree索引结构","link":"#为什么innodb存储引擎选择使用b-tree索引结构","children":[]},{"level":3,"title":"索引的分类","slug":"索引的分类","link":"#索引的分类","children":[]},{"level":3,"title":"索引语法","slug":"索引语法","link":"#索引语法","children":[]},{"level":3,"title":"SQL性能分析","slug":"sql性能分析","link":"#sql性能分析","children":[]},{"level":3,"title":"最左前缀法则","slug":"最左前缀法则","link":"#最左前缀法则","children":[]},{"level":3,"title":"索引失效的情况","slug":"索引失效的情况","link":"#索引失效的情况","children":[]},{"level":3,"title":"SQL提示（告知MySQL，索引的使用方式）","slug":"sql提示-告知mysql-索引的使用方式","link":"#sql提示-告知mysql-索引的使用方式","children":[]},{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]}]},{"level":2,"title":"MySQL查询修改系统变量的值","slug":"mysql查询修改系统变量的值","link":"#mysql查询修改系统变量的值","children":[{"level":3,"title":"查看所有全局变量的值","slug":"查看所有全局变量的值","link":"#查看所有全局变量的值","children":[]},{"level":3,"title":"查看单个全局变量的值","slug":"查看单个全局变量的值","link":"#查看单个全局变量的值","children":[]},{"level":3,"title":"设置全局变量的值","slug":"设置全局变量的值","link":"#设置全局变量的值","children":[]}]},{"level":2,"title":"SQL优化","slug":"sql优化","link":"#sql优化","children":[{"level":3,"title":"Insert优化","slug":"insert优化","link":"#insert优化","children":[]},{"level":3,"title":"主键优化","slug":"主键优化","link":"#主键优化","children":[]},{"level":3,"title":"Order By优化","slug":"order-by优化","link":"#order-by优化","children":[]}]},{"level":2,"title":"锁","slug":"锁","link":"#锁","children":[{"level":3,"title":"全局锁","slug":"全局锁","link":"#全局锁","children":[]},{"level":3,"title":"表级锁","slug":"表级锁","link":"#表级锁","children":[]},{"level":3,"title":"行级锁","slug":"行级锁","link":"#行级锁","children":[]}]}],"git":{"createdTime":1678678487000,"updatedTime":1684205640000,"contributors":[{"name":"baixuanyu","email":"baixy118@163.com","commits":3}]},"readingTime":{"minutes":37.99,"words":11397},"filePathRelative":"mysql/MySQL.md","localizedDate":"2023年3月13日","excerpt":"<h2> SQL</h2>\\n<h3> SQL的分类</h3>\\n<p>DDL Data Definition Language 数据定义语言，用来定义数据库对象(数据库，表，字段)\\nDML Data Manipulation Language 数据操作语言，用来对数据库表中的数据进行增删改\\nDQL Data Query Language 数据查询语言，用来查询数据库中表的记录\\nDCL Data Control Language 数据控制语言，用来创建数据库用户、控制数据库的访问权限</p>\\n<h3> DDL</h3>\\n<h4> 数据库相关</h4>\\n<p>查询所有数据库\\n<code>SHOW DATABASES</code>;\\n查询当前数据库\\n<code>SELECT DATABASE();</code>\\n创建\\n<code>CREATE DATABASE [ IF NOT EXISTS ] 数据库名[DEFAULT CHARSET 字符集][ COLLATE排序规则];</code></p>","autoDesc":true}');export{l as data};
