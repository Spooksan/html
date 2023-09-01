const referrer = sessionStorage.getItem("referrer");
const id = sessionStorage.getItem("blogId");

if (id && referrer && referrer === "blog-details") {
  // If blogId and referrer exist in sessionStorage, and referrer is "blog-details", redirect to the blog detail page
  sessionStorage.removeItem("referrer"); // Let's clean up after using
  sessionStorage.removeItem("blogId"); // Let's clean up after using
  window.location.href = `./blog-details.html?id=${id}`;
} else {
  // Otherwise, check if user came directly
  const pageContainer = document.querySelector(".err-container");

  const errorContent = `
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <img src="images/404.png" alt="" />
            <h1>Page Not Found</h1>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <a href="index.html" class="btn btn-primary">Back to home</a>
          </div>
        </div>
      </div>
  `;

  // Insert the error content into the container
  pageContainer.innerHTML = errorContent;
}
