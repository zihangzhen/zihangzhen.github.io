# 📝 Publications
{% for link in site.data.publications.main %}
<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">{{ link.journal_short }}</div><img src='{{ link.image }}' alt="sym" width="65%"></div>
  </div>
  <div class='paper-box-text' style="position: relative;" >
    <div class="title"><a href="{{ link.doi }}">{{ link.title }}</a></div>
    <div class="author">{{ link.authors }}</div>
    <p></p>
    <div class="periodical"><em>{{ link.conference}} {{link.journal}}</em></div>
    <div class="links">
      {% if link.pdf %}
      <a href="{{ link.pdf }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">PDF</a>
      <!-- <button class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12.5px;" onclick="window.location.href='{{ link.pdf }}'">PDF</button> -->
      {% endif %}
      {% if link.code %}
      <a href="{{ link.code }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %}
      <button class="small-btn" role="button" target="_blank" style="font-size:12.5px;" onclick="copyToClipboard(`{{ link.bibtex }}`)">BibTex</button>
      {% endif %}
      {% if link.notes %}
      <strong style="color:#df7983">{{ link.notes }}</strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
      <strong><span class='show_paper_citations' data='{{ link.cited }}'></span></strong>
    </div>
  </div>
</div>
{% endfor %}