/* Gallery Header */
const headerGallery = document.querySelector(".galleryHeader");

function generateGalleryHeader(headerData) {
    // galleryHeader.innerHTML = '';
    headerData.forEach(headerData => {

        let galleryTitle = document.createElement("h1");
        galleryTitle.classList.add("galleryTitle");
        galleryTitle.innerText = headerData.title;

        let gallerySubTitle = document.createElement("div");
        gallerySubTitle.classList.add("gallerySubtitle");
        let gallerySubTitleParagraph = document.createElement("p");
        gallerySubTitleParagraph.innerText = headerData.subTitle;

        gallerySubTitle.appendChild(gallerySubTitleParagraph);

        headerGallery.append(galleryTitle, gallerySubTitle);

    });
    

}
generateGalleryHeader(galleryHeader);

// console.log(galleryHeader);

/* Gallery Images */

const galleryContainer = document.querySelector(".galleryContainer");

function generateGallery(columns, galleryImages) {
    galleryContainer.innerHTML = '';

let galleryColumnWrappers = {};

for (let i = 0; i < columns; i++) {
        galleryColumnWrappers[`column${i}`] = [];
    }

for (let i = 0; i < galleryImages.length; i++) {
        const column = i % columns;
        galleryColumnWrappers[`column${column}`].push(galleryImages[i]);
    }

for (let i = 0; i < columns; i++) {
        let columnGallaryImages = galleryColumnWrappers[`column${i}`];
        let columns = document.createElement('div');
        columns.classList.add('galleyColumn');

        columnGallaryImages.forEach(galleryImage => {
            let galleryFigure = document.createElement('figure');
          	galleryFigure.classList.add('galleryFigure');
            galleryFigure.setAttribute("tabIndex", "0");
            galleryFigure.setAttribute("Role", "button");
            
          
		    let imageDiv = document.createElement('div');
            imageDiv.classList.add('figImage');
            imageDiv.style.backgroundImage = `url(${galleryImage.image})`;
            // let image = document.createElement('img');
            // image.src = galleryImage.image;
            // image.alt = galleryImage.caption;
            let imgOverlay = document.createElement('div');
            imgOverlay.classList.add('imgOverlay');
            let randomHeight = Math.floor(Math.random() * 400) + 300
            imgOverlay.style.height = `${randomHeight}px`;                          

            let caption = document.createElement('figcaption');
            caption.classList.add('caption');
            let figCapIcon = document.createElement('div');
            figCapIcon.classList.add('caption-icon');
            let figCapText = document.createElement('div');
            figCapText.classList.add('caption-text');
            let figCapParagraph = document.createElement('p');            
            figCapParagraph.innerText = galleryImage.caption;
            
            imageDiv.appendChild(imgOverlay);
            // imageDiv.append(image, imgOverlay);
            caption.append(figCapIcon, figCapText);
            figCapText.appendChild(figCapParagraph);
            galleryFigure.append(imageDiv, caption);
            columns.appendChild(galleryFigure);
        });

        galleryContainer.appendChild(columns);
    }
}

generateGallery(3, gallery);

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        generateGallery(1, gallery);
    }
    else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateGallery(2, gallery);
    } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateGallery(3, gallery);
    }
    previousScreenSize = window.innerWidth;
 });


// **********************************************************************************
// const container = document.querySelector('.container');

// function generateMasonryGrid(columns, posts) {
//     container.innerHTML = '';

//     // Store all column arrays which contain the relevant posts
//     let columnWrappers = {};

//     // Create column item array and add this to columnwrapper object
//     for (let i = 0; i < columns; i++) {
//         columnWrappers[`column${i}`] = [];
//     }
//     // console.log(columnWrappers);
//     //console.log(posts.length);

//     for (let i = 0; i < posts.length; i++) {
//         const column = i % columns;
//         columnWrappers[`column${column}`].push(posts[i]);
//     }
//     // console.log(columnWrappers);
//     for(let i = 0; i < columns; i++){
//         let columnPosts = columnWrappers[`column${i}`];
//         let div = document.createElement('div');
//         div.classList.add('column');

//         columnPosts.forEach(post => {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             let image = document.createElement('img');
//             image.src = post.image;
//             let hoverDiv = document.createElement('div');
//             hoverDiv.classList.add('overlay');
//             let title = document.createElement('h3');
//             title.innerText = post.title;
//             hoverDiv.appendChild(title);
    
            
//             postDiv.append(image, hoverDiv)
//             div.appendChild(postDiv) 
//         });
//         container.appendChild(div);
//     }


// }

// let previousScreenSize = window.innerWidth;

// // console.log(previousScreenSize);
// window.addEventListener('resize', () => {
//     imageIndex = 0;
//     if(window.innerWidth < 600 && previousScreenSize >= 600){
//         generateMasonryGrid(1, posts);
//     }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
//         generateMasonryGrid(2, posts);

//     }else if(window.innerWidth >= 1000 && previousScreenSize < 1000){
//         generateMasonryGrid(4, posts)
//     }
//     previousScreenSize = window.innerWidth;
// })

// if(previousScreenSize < 600){
//     generateMasonryGrid(1, posts)
// }else if(previousScreenSize >= 600 && previousScreenSize < 1000){
//     generateMasonryGrid(2, posts)
// }else{
//     generateMasonryGrid(4, posts)
// }