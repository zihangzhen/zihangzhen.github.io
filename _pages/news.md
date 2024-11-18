# 🔥 News
<ul id="newsList">
  {% assign max_visible = 3 %}<!--设置visible item number -->
  {% for link in site.data.news.main %}
  {% if forloop.index <= max_visible %}
  <li><strong>[{{ link.date }}]</strong> {{ link.msg }}</li>
  {% endif %}
  {% endfor %}
  <!-- <li id="toggleLink"><a href="javascript:toggle_vis('newsmore')">Show More</a></li> -->
  <li id="toggleButton"><button data-id="newsmore" onclick="toggle_vis('newsmore')">Show More</button></li>

  <div id="newsmore" style="display:none">
    {% for link in site.data.news.main %}
    {% if forloop.index0 >= max_visible %}
    <li><strong>[{{ link.date }}]</strong> {{ link.msg }}</li>
    {% endif %}
    {% endfor %}
  </div>
</ul>