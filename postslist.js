// script.js
var postsList = document.getElementById('postsList');

// Example data
var posts = [
  {
    title: 'Post Title 1',
    content: 'Post content goes here.'
  },
  {
    title: 'Post Title 2',
    content: 'Post content goes here.'
  },
  {
    title: 'Post Title 3',
    content: 'Post content goes here.'
  }
];

// Loop through posts and add to list
for (var i = 0; i < posts.length; i++) {
  var post = posts[i];
  var li = document.createElement('li');
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  h2.textContent = post.title;
  p.textContent = post.content;
  li.appendChild(h2);
  li.appendChild(p);
  postsList.appendChild(li);
}