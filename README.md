## Projekt Set Up
<p>Strapi Headless CMS + Nuxt JS</p>

## develop 

### `develop`

```
cd frontend/ && yarn develop
cd backend/ && yarn develop
```

## Backend Strapi Start 

### `start`

```
cd backend/ && yarn start
```

## Frontend build 
<p>for Production</p>

### `build`

```
cd frontend && yarn build

output:
Page                                       Size     First Load JS
┌ ● / (ISR: 1 Seconds)                     1.52 kB        82.2 kB
├   /_app                                  0 B            76.7 kB
├ λ /404                                   1.36 kB          78 kB
├ ● /article/[slug]                        51.4 kB         132 kB
├   ├ /article/what-s-inside-a-black-hole
├   ├ /article/this-shrimp-is-awesome
├   ├ /article/the-internet-s-own-boy
├   └ [+3 more paths]
└ ● /category/[slug]                       1.54 kB        82.2 kB
    ├ /category/food
    ├ /category/nature
    ├ /category/news
    └ [+2 more paths]
+ First Load JS shared by all              76.7 kB
  ├ chunks/framework.36dafa.js             42.4 kB
  ├ chunks/main.7b5a53.js                  20.1 kB
  ├ chunks/pages/_app.75bc69.js            13.3 kB
  ├ chunks/webpack.9fc9ab.js               857 B
  └ css/e06e04fc7648d7376ad7.css           279 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

✨  Done in 6.45s.
```

