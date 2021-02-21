---
title: How I built this website
templateKey: blog-post
date: 2017-01-04T15:04:10.000Z
description: a sort of guide
featuredpost: true
featuredimage: ""
tags:
  - brewing
  - chemex
---
Say you're learning how to develop websites with React. You've got a good handle on the basics of building components and passing props, so you want to put your new skill on display as a personal website. Pretty soon you've got a nice one running on your computer locally so you look for hosting services on google. Netlify comes up near the top, and all you have to do is pass it your repositiory! Your website is up and all you have left to do is add a blog section. This is where it gets tricky, because you could just manually edit the repository any time you want to put up a new post, but that sounds like a chore. So you go looking for a content management system or database for netlify and find the netlify cms, which seems tailor-made for you! It's in your project in no time and you've generated a markdown file using your admin panel, but you have no idea how to access it. The markdown files are outside your root directory and none of the tutorials you can find tell you how to access it. You still don't know even after a day of looking through templates, because they all use frameworks that you're not using to access the outside files. It's not working very well so far.

This is how my project started. I ended up rebuilding the entire site on top of a template to access the cms I wanted to use, which came with it's own host of problems. I had to take a crash-course in gatsby -which is the framework I ended up using- just to make a few small changes to the graphql schema without crashing it. I made the mistake of deleting my test posts once I thought I understood how to change my queries, which made my otherwise valid queries return values that my components couldn't use. Additionally, my bootstrap components weren't styled for some reason, so I tried to link the style sheets directly in the index.html file. That didn't work either, since the index.html files are generated when the project starts. So I spend an embarrasingly long time rooting around for where the header file is generated before realizing I could have just done a search for it. One problem taken care of though. It's fine.

I brought back the test post to work on the schema, which got it working again. Mostly it's just removing fields that won't get used, but testing the queries as I go so that it doesn't give me any unexpected results that are difficult to revert. Images were set as required for some reason and I'm thinking it might be another hour-long googling session, but the first bit of documentation I find gives me a small tag I can use to fix it. The rest is all some basic styling and the entire site came together about as well as I could have hoped.

You can find the template [here](https://github.com/netlify-templates/gatsby-starter-netlify-cms). Just make sure you don't delete all the markdown files.