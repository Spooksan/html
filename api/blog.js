document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  // Check if the id exists
  if (!id) {
    // Save referrer to sessionStorage
    sessionStorage.setItem("referrer", "blog-details-" + id);

    // Redirect to 404 page if no id is provided
    window.location.href = "./404.html";
    return;
  }

  try {
    const response = await fetch(`http://localhost:8002/api/v1/blogs/${id}`);

    // Response.ok is false if the server responds with a status in the range 404-499
    if (!response.ok) {
      throw Error("Blog not found");
    }

    const blog = await response.json();

    // Get the div that will contain the blog details
    const blogContainer = document.querySelector(".blog-details-container");

    const blogHTML = `
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${blog?.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${blog?.title}</h5>
              <p class="card-text">${blog?.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         </div>
    `;

    // Insert the blog details into the container
    blogContainer.innerHTML = blogHTML;
  } catch (error) {
    console.error("Error:", error);
    sessionStorage.setItem("blogId", id);
    sessionStorage.setItem("referrer", "blog-details");
    window.location.href = "./404.html";
  }
});
