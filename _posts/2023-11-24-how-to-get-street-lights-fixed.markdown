---
title:  "Getting a streetlight fixed"
tags:   streets
images_1:
  - path: /assets/street-light-fix/app-store-listing.jpg
    title: App Store listing
  - path: /assets/street-light-fix/app-intro-screen.jpg
    title: App intro screen
  - path: /assets/street-light-fix/app-report-submission.jpg
    title: App report submission
images_2:
  - path: /assets/street-light-fix/before-1.jpg
    title: Before
  - path: /assets/street-light-fix/before-2.jpg
    title: Before 
  - path: /assets/street-light-fix/after-1.jpg
    title: After
  - path: /assets/street-light-fix/after-2.jpg
    title: After
---
Street light problems **are handled by the two power companies** in town, not the city.
[North of E. 96th Ave it's United Power. South of E. 96th it's Xcel Energy.](https://www.c3gov.com/living-in/utilities) That page gives the contact info for each company. But I was able to get a street light fixed by reporting it to the city.

![Prairie dogs fixing a street light](/assets/prairie-dogs-fixing-a-street-light-circa-1924.jpeg){:class="float-left"}



# Doing it the easy way

I don't know if this is really the "right" way to go about it. I'll find out and
update this page. I had an excellent experience using the *Access Commerce City*
mobile app:

I submitted a report with it. Later, it notified me that the city handed off
the report to the power company. The lamp post was fixed within a week. 
<br>


## Using the app

<div class="gallery">
  {% for image in page.images_1 %}
    <a href="{{ image.path }}">
      <img src="{{ image.path }}" alt="{{ image.title }}"/>
    </a>
  {% endfor %}
</div>



## Before and after pics

<div class="gallery">
  {% for image in page.images_2 %}
    <a href="{{ image.path }}">
      <img src="{{ image.path }}" alt="{{ image.title }}"/>
    </a>
  {% endfor %}
</div>
