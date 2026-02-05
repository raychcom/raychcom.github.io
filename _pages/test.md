---
title: Test
permalink: /test/
layout: splash
read_time: false
author_profile: false
sidebar: false
classes: wide
---

<!-- <div class="social-row">
<a class="btn btn--light-outline btn--large" href="https://github.com/raychcom" target="_blank">GitHub</a>
<a class="btn btn--light-outline btn--large" href="https://open.spotify.com/user/31ekhjd5x5qoyln7zo4zkv4tneay" target="_blank">Spotify</a>
<a class="btn btn--light-outline btn--large" href="https://bsky.app/profile/raych.com" target="_blank">Bluesky</a>
<a class="btn btn--light-outline btn--large" href="https://byraych.substack.com/" target="_blank">Substack</a>
</div> -->

<div class="social-row social-row--icons">
  {% for link in site.author.links %}
    <a class="btn btn--light-outline btn--large social-icon-btn"
       href="{{ link.url }}"
       target="_blank"
       aria-label="{{ link.label }}">
      <i class="{{ link.icon }}" aria-hidden="true"></i>
    </a>
  {% endfor %}
</div>


<br>

<!-- <div class="linktree">
<a class="btn btn--primary btn--large btn--block" href="https://your-substack-link">Jams of the Week</a>
<a class="btn btn--primary btn--large btn--block" href="/playlists/">Playlists</a>
<a class="btn btn--primary btn--large btn--block" href="/photos/">Photos</a>
<a class="btn btn--primary btn--large btn--block" href="https://bsky.app/profile/yourhandle">Bluesky</a>
</div> -->
