document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(`http://localhost:8002/api/v1/blogs`);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const blogsContainer = document.querySelector(".blog-container");

    data.forEach((blog) => {
      const cardHTML = `
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${blog.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">${blog.description}</p>
                            <a class="btn btn-primary"
                                href="/blog-details.html?id=${blog._id}"
                            >Read More..</a>
                        </div>
                    </div>
                </div>
            `;
      blogsContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
