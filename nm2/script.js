// Add Comment Function
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentList = document.getElementById('commentList');
  const text = commentInput.value.trim();

  if (text !== "") {
    const comment = document.createElement('p');
    comment.classList.add('comment');
    comment.textContent = text;
    commentList.appendChild(comment);
    commentInput.value = "";
  } else {
    alert("Please enter a comment!");
  }
}

// Event Listener
const postButton = document.getElementById('postBtn');
if (postButton) {
  postButton.addEventListener('click', addComment);
}

// Responsive Menu
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}

// Search Blog Filter
function searchBlog() {
  let input = document.getElementById('searchBar').value.toLowerCase();
  let posts = document.querySelectorAll('.blog-card');

  posts.forEach(post => {
    let title = post.querySelector('h2').textContent.toLowerCase();
    post.style.display = title.includes(input) ? 'block' : 'none';
  });
}

// ===== Theme Toggle Script =====
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if user has a saved theme
if(localStorage.getItem('theme') === 'dark'){
  body.classList.add('dark-theme');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Update button text
  toggleBtn.textContent = body.classList.contains('dark-theme') ? '☀️ Light Mode' : '🌙 Dark Mode';

  // Save preference in localStorage
  if(body.classList.contains('dark-theme')){
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


// ===== Like/Dislike Feature =====
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCount = document.getElementById('likeCount');
const dislikeCount = document.getElementById('dislikeCount');

let liked = false;
let disliked = false;

likeBtn.addEventListener('click', () => {
  if (!liked) {
    liked = true;
    likeBtn.classList.add('active');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;

    if (disliked) {
      disliked = false;
      dislikeBtn.classList.remove('active');
      dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
    }
  } else {
    liked = false;
    likeBtn.classList.remove('active');
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  }
});

dislikeBtn.addEventListener('click', () => {
  if (!disliked) {
    disliked = true;
    dislikeBtn.classList.add('active');
    dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;

    if (liked) {
      liked = false;
      likeBtn.classList.remove('active');
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
  } else {
    disliked = false;
    dislikeBtn.classList.remove('active');
    dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
  }
});