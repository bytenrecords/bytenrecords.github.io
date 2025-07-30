document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

    const postsList = document.getElementById('posts-list');
    postsData.forEach(post => {
        const postLink = document.createElement('a');
        if (post.url.endsWith('.md')) {
            postLink.href = `post.html?post=${encodeURIComponent(post.url)}`;
        } else {
            postLink.href = post.url;
            postLink.target = '_blank';
        }
        postLink.className = 'list-group-item list-group-item-action';
        postLink.textContent = post.title;
        postsList.appendChild(postLink);
    });
});