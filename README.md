```markdown
# Innovative Navigation using 404 Page

This repository showcases an innovative approach to web navigation by leveraging 404 error pages and JavaScript session storage.

## Overview

Traditional web development often relies on routing libraries or server-side routes for navigation. This project introduces a unique system where we use different JavaScript files (`main.js`, `blog.js`, `404.js`) to implement various functionalities and orchestrate a unique navigation across the application.

The approach involves using:

1. `404.js`: To handle redirection to the appropriate content page when a user lands on a 404 page from a `blog-details.html` page.
2. `blog.js`: To fetch and display the specific blog details. If the required data doesn't exist or an error occurs, it syncs with the 404 page to reroute the user.
3. `main.js`: To collect all blog data for display on the homepage and provide individual links to each blog detail page.
   
## Usage

You can use and modify this code as per the needs of your individual projects. This code is flexible and can be adapted to handle various routes beyond blogs, providing seamless navigation even in the instance of errors.

## SEO Optimisation

The project also ensures that the SEO aspects are taken care of by preloading meta-data for all existing `blog-details/id`'s. Even though 404 pages are used for navigation, the functionality has been designed in a way to minimize the impact on the website's SEO.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
```
