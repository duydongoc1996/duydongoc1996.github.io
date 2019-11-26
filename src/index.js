
const blogContainer = document.getElementById('blog-container');

const display = async () => {
  // Fetch posts
  const posts = await fetch('https://us-central1-myblog-9484b.cloudfunctions.net/api/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  posts.forEach(post=>{
    const postElement = `
      <div class='blog-item'>
        <p>${post.title}</p>
        <p>${post.category}</p>
        <p>${post.content}</p>
        <p>${post.tag}</p>
        <p>${post.timestamp}</p>
      </div>
    `

    blogContainer.appendChild(postElement)
  })


}


setTimeout(()=>display(),2000)
// display()