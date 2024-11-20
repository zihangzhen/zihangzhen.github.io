# 💬 Services
<ul style="margin:0 0 5px;">
  {% assign roles = site.data.services %}
  {% for key in roles %}
    {% assign role_name = key[0] %} <!-- Reviewer, Teaching assistant-->
    {% assign services = key[1] %}  <!-- Data-->
    <li>{{ role_name | capitalize }} for
      {% for service in services %}
        {% if service.href %}
          <em><a href="{{ service.href }}">{{ service.object }}({{ service.date }})</a></em>{% if forloop.last == false %},{% else %}.{% endif %}
        {% else %}
          <em>{{ service.object }}({{ service.date }})</em>{% if forloop.last == false %},{% else %}.{% endif %}
        {% endif %}
      {% endfor %}
    </li>
  {% endfor %}
</ul>
