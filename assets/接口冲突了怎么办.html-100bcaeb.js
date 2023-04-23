import{_ as n,W as a,X as s,a0 as e}from"./framework-b947aea2.js";const t={},i=e(`<h1 id="接口冲突了怎么办" tabindex="-1"><a class="header-anchor" href="#接口冲突了怎么办" aria-hidden="true">#</a> 接口冲突了怎么办？</h1><p>在启动项目的过程中经常会发生接口冲突的问题，那么遇到这种问题应该如何解决呢？下面讨论在Windows系统下出现接口冲突的解决方案。</p><h2 id="windows下端口被占用解决方案" tabindex="-1"><a class="header-anchor" href="#windows下端口被占用解决方案" aria-hidden="true">#</a> Windows下端口被占用解决方案</h2><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code># 查询端口
<span class="token command"><span class="token keyword">netstat</span> -ano</span>
# 查询指定端口
<span class="token command"><span class="token keyword">netstat</span> -ano |findstr <span class="token string">&quot;端口号&quot;</span></span>
# 根据进程PID查询进程名称
<span class="token command"><span class="token keyword">tasklist</span> |findstr <span class="token string">&quot;进程PID号&quot;</span></span>
# 根据PID杀死任务
<span class="token command"><span class="token keyword">taskkill</span> <span class="token parameter attr-name">/F</span> <span class="token parameter attr-name">/PID</span> <span class="token string">&quot;进程PID号&quot;</span></span>
# 根据进程名称杀死任务<span class="token punctuation">(</span>不建议采用此方案，建议采用PID杀死进程<span class="token punctuation">)</span>
<span class="token command"><span class="token keyword">taskkill</span> <span class="token parameter attr-name">-f</span> <span class="token parameter attr-name">-t</span> -im <span class="token string">&quot;进程名称&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[i];function c(d,l){return a(),s("div",null,o)}const p=n(t,[["render",c],["__file","接口冲突了怎么办.html.vue"]]);export{p as default};
