# Image Search App 

## Create image search using HTML, CSS, javascript and also fetch API 

 ## Overview 🚀
An image search application using HTML, CSS, JavaScript, and the **Fetch API allows users to search for and view images dynamically on a web page**.

## Features ✨
 📚 User-Friendly Interface
- The HTML file structures the basic layout of the page with **input fields, buttons, and containers**.
- CSS is used for styling to create an aesthetically pleasing and **user-friendly interface**.

🛠️Fetch API for Data Retrieval
- The Fetch API is utilized to **send asynchronous requests to an image search API (such as Unsplash, Pexels, or any other image service)**.
- The API request is typically constructed with the **user's search query, and the response** contains a list of relevant images.

🌐Dynamic Image Display
- JavaScript dynamically **updates the page by creating and appending** HTML elements (e.g., img tags) for each retrieved image.
- Use JavaScript to dynamically **update the page with images retrieved from the Fetch API based on user search queries**.

🔍Real-Time Search
- Enable real-time search functionality, so as **users type in the search input**, the application **fetches and displays relevant images dynamically**.

💻Responsive Design
- Ensure that the image search application is **responsive to different screen sizes**.
- Utilize CSS to create a responsive design that adapts well to **both desktop and mobile devices**.


🛠️Asynchronous Data Fetching
- Implement asynchronous data fetching using the **Fetch API** in JavaScript.
- Show loading indicators during the image **retrieval process to enhance the user experience**.


## Fetch API to make a basic GET request :
- This code fetches data from 'https://jsonplaceholder.typicode.com/', parses the response as JSON, and logs the data to the console. The catch block handles any errors that may occur during the fetch operation.
```
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
```
- In my mini-project, I used the API key in the **Unsplash website**, you can use the **developer/API key**.
  ```
  const accessKey = API_KEY;
  ```

  ## Dynamic URL
- Dynamic URLs can also be used to create more **SEO-friendly websites**. By using dynamic URLs, you can create **unique URLs for each page on your website**, which can help search engines to better understand your website and its content.
- For example, a dynamic URL could be used to display a **different product list based on the category** that the user has selected or to update the contents of a shopping cart as the **user adds or removes items**.
    ```
    const url= "http://www.domain.com/category/article.php?language=de&inhalt=dynamic-url"
    ```
