const t=JSON.parse('{"key":"v-15dc4956","path":"/%E6%8A%80%E6%9C%AF%E6%9D%82%E8%B0%88/%E8%BD%AC%E5%8F%91%E4%B8%8E%E9%87%8D%E5%AE%9A%E5%90%91.html","title":"转发与重定向","lang":"zh-CN","frontmatter":{"title":"转发与重定向","date":"2023-03-19T22:43:25.000Z","category":["杂谈"],"tag":["SpringBoot","SpringMVC","Servlet"],"description":"转发与重定向 转发与重定向的细节对比 转发 重定向 URL地址栏的值不会变 URL地址栏的值会改变 会携带Request信息 不会携带Request信息 只会发生一次访问 会发生两次访问 一般仅用于内部资源 可用于内部资源+外部资源 性能更好（因为是服务器内部行为） 性能差于转发","head":[["meta",{"property":"og:url","content":"https://littlebai118.github.io/%E6%8A%80%E6%9C%AF%E6%9D%82%E8%B0%88/%E8%BD%AC%E5%8F%91%E4%B8%8E%E9%87%8D%E5%AE%9A%E5%90%91.html"}],["meta",{"property":"og:site_name","content":"白先生"}],["meta",{"property":"og:title","content":"转发与重定向"}],["meta",{"property":"og:description","content":"转发与重定向 转发与重定向的细节对比 转发 重定向 URL地址栏的值不会变 URL地址栏的值会改变 会携带Request信息 不会携带Request信息 只会发生一次访问 会发生两次访问 一般仅用于内部资源 可用于内部资源+外部资源 性能更好（因为是服务器内部行为） 性能差于转发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://littlebai118.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-21T08:42:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"转发与重定向"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"SpringMVC"}],["meta",{"property":"article:tag","content":"Servlet"}],["meta",{"property":"article:published_time","content":"2023-03-19T22:43:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-21T08:42:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"转发与重定向\\",\\"image\\":[\\"https://littlebai118.github.io/\\"],\\"datePublished\\":\\"2023-03-19T22:43:25.000Z\\",\\"dateModified\\":\\"2023-04-21T08:42:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"转发与重定向的细节对比","slug":"转发与重定向的细节对比","link":"#转发与重定向的细节对比","children":[]},{"level":2,"title":"重定向示意图","slug":"重定向示意图","link":"#重定向示意图","children":[]},{"level":2,"title":"转发示意图","slug":"转发示意图","link":"#转发示意图","children":[]},{"level":2,"title":"实际代码运用","slug":"实际代码运用","link":"#实际代码运用","children":[{"level":3,"title":"SpringMVC转发与重定向","slug":"springmvc转发与重定向","link":"#springmvc转发与重定向","children":[]},{"level":3,"title":"Servelet转发与重定向","slug":"servelet转发与重定向","link":"#servelet转发与重定向","children":[]}]}],"git":{"createdTime":1682066572000,"updatedTime":1682066572000,"contributors":[{"name":"baixuanyu","email":"baixy118@163.com","commits":1}]},"readingTime":{"minutes":0.68,"words":205},"filePathRelative":"技术杂谈/转发与重定向.md","localizedDate":"2023年3月19日","excerpt":"<h1> 转发与重定向</h1>\\n<h2> 转发与重定向的细节对比</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>转发</th>\\n<th>重定向</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>URL地址栏的值不会变</td>\\n<td>URL地址栏的值会改变</td>\\n</tr>\\n<tr>\\n<td>会携带Request信息</td>\\n<td>不会携带Request信息</td>\\n</tr>\\n<tr>\\n<td>只会发生一次访问</td>\\n<td>会发生两次访问</td>\\n</tr>\\n<tr>\\n<td>一般仅用于内部资源</td>\\n<td>可用于内部资源+外部资源</td>\\n</tr>\\n<tr>\\n<td>性能更好（因为是服务器内部行为）</td>\\n<td>性能差于转发</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
