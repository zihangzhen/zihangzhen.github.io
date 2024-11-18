---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- Zihang Zhen 当前是一个华中科技大学的博士研究生,他的研究方向为**推荐系统**和**大语言模型**,师从Rui Zhang教授. 在此之前,他在福建师范大学获得了硕士学位,师从Hui Lin教授和Xiaoding Wang副教授,期间主要从事**区块链**和**机器学习**的相关研究. 另外,他拥有一年以上的**嵌入式软件开发**实践经验. 目前,他发表了多篇期刊,并担任部分期刊的审稿人. -->

*Zihang Zhen* is currently a Ph.D. student at Huazhong University of Science and Technology, specializing in **Recommendation Systems** and **Large Language Models**, under the supervision of Prof. *[Rui Zhang](https://www.ruizhang.info/)*. Prior to this, he obtained his M.S. degree from Fujian Normal University under the supervision of Prof. *[Hui Lin](https://ccs.fjnu.edu.cn/0d/98/c16741a331160/page.htm)* and Associate Prof. *[Xiaoding Wang](https://xiaodingwang.github.io/WangXiaoding.github.io/)*, focusing on research related to **Blockchain** and **Machine Learning**. Besides, he has over a year of experience in **Embedded Software Development**. Currently, he has published several papers in CCF-A and SCI-Q1 journals and serves as a reviewer for some of them.



{% include_relative news.md %}

{% include_relative publications.md %}

{% include_relative services.md %}


<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=828384&w=800&t=n&d=X1hE1r5O27mChe6EsSHp4RTz-niIHZKgJQQ2nT5mJ5k&co=ffffff&ct=000000&cmo=b8c5cb&cmn=77bbdb'></script>
