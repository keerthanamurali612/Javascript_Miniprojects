const accessKey = process.env.UNSPLASH_API_KEY;

  require('dotenv').config()

// console.log(process.env)

const formElement=document.querySelector("form")
const inputElement =document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore =document.getElementById("show-more-btn")

let inputData="";
let page=1; //default page is [1] to click the showmore button to display the more images


async function searchImages(){
    
    inputData=inputElement.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}
    &query=${inputData}&client_id=${accessKey}` 

    const response=await fetch(url)
    const data=await response.json() //to convert the json format

    const results = data.results //json converted into variable

    if(page === 1){
        searchResults.innerHTML="" //without click button there should be empty
    }

    results.map((result) =>{
        const imageWrapper=document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image=document.createElement('img')
        image.src=result.urls.small
        image.alt=result.alt_description
        const imageLink=document.createElement('a')
        imageLink.href=result.links.html
        imageLink.target="_blank"
        imageLink.textContent=result.alt_description

        // we have to simply use  appendchild

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)

    });

    page++

    if(page >1){
        showMore.style.display="block"
    }
}

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages()
})


showMore.addEventListener("click",(event)=>{
    searchImages()
})