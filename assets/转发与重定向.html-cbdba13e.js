import{_ as a,W as n,X as s,a0 as e}from"./framework-b947aea2.js";const t="/assets/2023-03-19-22-36-50-image-3d159ee7.png",i="/assets/2023-03-19-22-39-03-image-b150ec68.png",r={},d=e('<h1 id="转发与重定向" tabindex="-1"><a class="header-anchor" href="#转发与重定向" aria-hidden="true">#</a> 转发与重定向</h1><h2 id="转发与重定向的细节对比" tabindex="-1"><a class="header-anchor" href="#转发与重定向的细节对比" aria-hidden="true">#</a> 转发与重定向的细节对比</h2><table><thead><tr><th>转发</th><th>重定向</th></tr></thead><tbody><tr><td>URL地址栏的值不会变</td><td>URL地址栏的值会改变</td></tr><tr><td>会携带Request信息</td><td>不会携带Request信息</td></tr><tr><td>只会发生一次访问</td><td>会发生两次访问</td></tr><tr><td>一般仅用于内部资源</td><td>可用于内部资源+外部资源</td></tr><tr><td>性能更好（因为是服务器内部行为）</td><td>性能差于转发</td></tr></tbody></table><h2 id="重定向示意图" tabindex="-1"><a class="header-anchor" href="#重定向示意图" aria-hidden="true">#</a> 重定向示意图</h2><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="转发示意图" tabindex="-1"><a class="header-anchor" href="#转发示意图" aria-hidden="true">#</a> 转发示意图</h2><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实际代码运用" tabindex="-1"><a class="header-anchor" href="#实际代码运用" aria-hidden="true">#</a> 实际代码运用</h2><h3 id="springmvc转发与重定向" tabindex="-1"><a class="header-anchor" href="#springmvc转发与重定向" aria-hidden="true">#</a> SpringMVC转发与重定向</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//转发</span>
<span class="token keyword">return</span> <span class="token string">&quot;forward:/WEB-INF/jsp/test.jsp&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//重定向</span>
<span class="token keyword">return</span> <span class="token string">&quot;redirect:/index.jsp&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="servelet转发与重定向" tabindex="-1"><a class="header-anchor" href="#servelet转发与重定向" aria-hidden="true">#</a> Servelet转发与重定向</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//转发</span>
request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//重定向</span>
response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">&quot;/web/servlet2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[d];function o(p,l){return n(),s("div",null,c)}const h=a(r,[["render",o],["__file","转发与重定向.html.vue"]]);export{h as default};
