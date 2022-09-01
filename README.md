# Eleventy Serverless Issue

```
yarn install 
rm -rf _site netlify netlify.toml .netlify && netlify dev // to be sure everything is cleaned up.
```

## Guthub issue:

I'm trying to create a live preview system for a CMS

Consider this data:

```json
[
  {
    "name": "post1",
    "content": "Content for Post 1"
  },
  {
    "name": "post2",
    "content": "Content for Post 2"
  },
  {
    "name": "post3",
    "content": "Content for Post 3"
  }
]
```

And this template:

```html
---
layout: _page-skeleton.njk
pagination:
  data: posts
  alias: post
  size: 1
  # serverless: eleventy.serverless.path.id
  # addAllPagesToCollections: true
permalink:
  build: "/posts/{{ post.name | slug }}/"
  preview: "/preview/posts/:id"
---
<h1>Hello from: {{post.name}}</h1>
<p>{{post.content}}</p>

```



It **builds** `/posts/post1/`, `/posts/post2/`, `/posts/post3/` as expected.

The serverless routes on `/preview/posts/post1/`, `/preview/posts/post2/`, `/preview/posts/post3/` all work, however they all show the data from `post1`. I think this is expected?

As I understand it from the [documentation](https://www.11ty.dev/docs/plugins/serverless/#dynamic-slugs-to-subset-your-pagination) I should uncomment `serverless: eleventy.serverless.path.id` which should match `id` to the slug and therefore render the correct content. 

However when I do that, two things happen:

1. Only `post1` gets **built** `post2` and `post3` do not,  no error is given, which was unexpected. 
   Make sure you do `rm -rf _site netlify netlify.toml .netlify && netlify dev` otherwise you can get caught out testing this. 
2. None of the serverless `/preview/posts/` routes render. I get an `"error": "json.filter is not a function"` error in the browser and `Could not find pagination data, went looking for: post2 (via Error)` in the console. 

If I add in `addAllPagesToCollections: true`  it solves the first issue. But I can't get the `/preview/posts/...` routes to render with the correct data.

It happens in `1.0.2` & `2.0.0-canary.15`

Is this a bug? Or am I doing something wrong? 

Repo here