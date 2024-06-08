---
layout: post
title:  "The Reunion Cannabis Issue"
tags:   
  - cannabis
  - design
  - planning
  - reunion
redirect_from:
  - /cannabis/
images:
  upmarket:
    - path: /assets/dispensaries/upmarket/ajoya-1.jpg
      title: Ajoya
    - path: /assets/dispensaries/upmarket/altitude-1.jpg
      title: Altitude
    - path: /assets/dispensaries/upmarket/native-roots-1.jpg
      title: Native Roots
    - path: /assets/dispensaries/upmarket/native-roots-3.jpg
      title: Native Roots
    - path: /assets/dispensaries/upmarket/the-republic-1.jpg
      title: The Republic
  social_cannabis:
    - path: /assets/dispensaries/social-cannabis/chambers-2.jpg
      title: Chambers
    - path: /assets/dispensaries/social-cannabis/chambers-4.jpg
      title: Chambers
    - path: /assets/dispensaries/social-cannabis/chambers-5.jpg
      title: Chambers
    - path: /assets/dispensaries/social-cannabis/chambers-7.jpg
      title: Chambers
    - path: /assets/dispensaries/social-cannabis/golden-1.jpg
      title: Golden
    - path: /assets/dispensaries/social-cannabis/golden-3.jpg
      title: Golden
    - path: /assets/dispensaries/social-cannabis/golden-5.jpg
      title: Golden
    - path: /assets/dispensaries/social-cannabis/golden-6.jpg
      title: Golden
    - path: /assets/dispensaries/social-cannabis/louisville-2.jpg
      title: Louisville
---

**<a href="/assets/letter.pdf">This is my letter</a>**, to the City Council.
I'm in favor of the ammendment. But I'm not yet convinced that Social Cannabis can
deliver the promised "premium", up-scale interior and experience. I'd like
for Social Cannabis to show us what they can do.

## Local Up-market Dispensaries

<div class="gallery">
  {% for image in page.images.upmarket %}
    <a href="{{ image.path }}" title="{{ image.title }}">
      <img src="{{ image.path }}" alt="{{ image.title }}"/>
    </a>
  {% endfor %}
</div>

## Social Cannabis Dispensaries

<div class="gallery">
  {% for image in page.images.social_cannabis %}
    <a href="{{ image.path }}" title="{{ image.title }}">
      <img src="{{ image.path }}" alt="{{ image.title }}"/>
    </a>
  {% endfor %}
</div>
