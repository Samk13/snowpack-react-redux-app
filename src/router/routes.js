export default [
  {
    path: '/',
    exact: true,
    location: './features/articles/Articles.jsx',
    name: 'Articles',
  },
  {
    path: '/posts',
    exact: false,
    location: './features/posts/Posts.jsx',
    name: 'Async Posts',
  },
]
