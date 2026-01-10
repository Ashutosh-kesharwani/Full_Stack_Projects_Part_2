// ---------------------- VIDEO DATA -----------------------
var videos = [
    {
        videoName: "One Piece Animated Video",
        videoDesc: "A funny fan animation of One Piece",
        videoThumbnail: "assets/images/thumbnails-images/thumbnail-1.jpeg",
        videoSrc: "assets/videos/motivation-videos/Animated-1.mp4",
    },
    {
        videoName: "Pochi Animated Film",
        videoDesc: "A Horro fan animation of Pochi.",
        videoThumbnail: "assets/images/thumbnails-images/thumbnail-2.png",
        videoSrc: "assets/videos/motivation-videos/Animated-2.mp4",
    },
    {
        videoName: "Step To Success",
        videoDesc: "A Motivational Film Step To Success.",
        videoThumbnail: "assets/images/thumbnails-images/thumbnail-3.png",
        videoSrc: "assets/videos/motivation-videos/Animated-3.mp4",
    },
    {
        videoName: "XARAMEL Animated Film",
        videoDesc: "A Mood Related Animated Short Film.",
        videoThumbnail: "assets/images/thumbnails-images/thumbnail-4.png",
        videoSrc: "assets/videos/motivation-videos/Animated-4.mp4",
    },
    {
        videoName: "Train Animated Film",
        videoDesc: "A Train animation Short Film.",
        videoThumbnail: "assets/images/thumbnails-images/thumbnail-5.png",
        videoSrc: "assets/videos/motivation-videos/Animated-5.mp4",
    },
    {
        videoName: "Rainy Day Animated Film",
        videoDesc: "A Rainy Day animation .",
        videoThumbnail: "assets/images/thumbnails-images/thumbnail-6.png",
        videoSrc: "assets/videos/motivation-videos/Animated-6.mp4",
    }
];


// ---------------------- ELEMENT SELECTORS -----------------------
var videoContainer = document.querySelector('#video');
var video = videoContainer.childNodes[1]; 
var videoActions = document.querySelector('#video-actions');

var suggestionsContainer = document.querySelector('#suggestions');
var videoTextContainer = document.querySelector("#video-text");

var favCartBtn = document.querySelector(".favorite-Cart");
var favSection = document.querySelector("#fav-section");

var searchBar = document.querySelector('.search-bar');
var content = document.querySelector("#content");

var favourites = [];


// ---------------------- ADD VIDEO SUGGESTIONS -----------------------
function addSuggestions() {

    // yaha hum empty string banate hain jisme HTML add hoga
    var clutter = "";

    // har video ko loop karke suggestion card banaya jata hai
    videos.forEach(function (ele, index) {

        // ek-ek video card HTML me convert ho raha hai
        clutter += `
        <div class="video-card">
            <div class="video-thumbnail">
                <!-- index store kiya image pe -->
                <img data-index=${index} src="${ele.videoThumbnail}" />
            </div>
            <div class="video-thumbnail-text">
                <h3>${ele.videoName}</h3>
                <!-- watch button bhi same index ke saath -->
                <button data-index=${index}>Watch &nbsp;&nbsp; <i class="ri-eye-fill"></i></button>
            </div>
        </div>
        `;
    });

    // final HTML container me inject
    suggestionsContainer.innerHTML = clutter;
}



// ---------------------- VIDEO CLICK → PLAY / PAUSE -----------------------
function addVideoActionsFunctionality() {

    var flag = 0; // 0 matlab video rukha hua

    // jab user video par click kare
    video.addEventListener('click', function () {

        // agar video rukha hua ho → play karo
        if (!flag) {
            video.play();
            flag = 1; // playing
            videoActions.style.display = "none"; // play icon chupao
        }

        // agar video chal raha ho → pause karo
        else {
            video.pause();
            flag = 0; // paused
            videoActions.style.display = "block"; // play icon dikhado
        }
    });
}



// ---------------------- CHANGE VIDEO WHEN CLICKED -----------------------
function changeVideo() {

    // suggestions container me click listener
    suggestionsContainer.addEventListener('click', function (details) {

        // kis video pe click hua → uska index
        var index = details.target.dataset.index;

        // agar undefined hai → kisi andi jagah click hua
        if (index === undefined) return;

        // video object nikala array se
        var videoObj = videos[index];

        // actual video player me src change
        video.src = videoObj.videoSrc;
        video.play();
        videoActions.style.display = "none";

        // title + desc update karna
        videoTextContainer.innerHTML = `
        <div id="text">
            <h2>${videoObj.videoName}</h2>
            <div id="icons">
                <p>${videoObj.videoDesc}</p>
                <i class="ri-thumb-up-fill"></i>
                <i class="ri-thumb-down-fill"></i>
                <i class="ri-share-forward-fill"></i>
                <!-- fav icon with index -->
                <i class="favourite ri-heart-add-2-fill" data-index=${index}></i>
            </div>
        </div>
        `;

        // favourite icon logic
        document.querySelector(".favourite").addEventListener("click", function () {

            // agar pehle se favourites me nahi hai tabhi push karo
            if (!favourites.includes(videos[index])) {

                favourites.push(videos[index]); // add favourite
                updateFavSection(); // UI update
            }
        });
    });
}



// ---------------------- DEFAULT FIRST VIDEO ON LOAD -----------------------
video.src = videos[0].videoSrc;

// first video ka data page load par show karna
videoTextContainer.innerHTML = `
<div id="text">
    <h2>${videos[0].videoName}</h2>
    <div id="icons">
        <p>${videos[0].videoDesc}</p>
        <i class="ri-thumb-up-fill"></i>
        <i class="ri-thumb-down-fill"></i>
        <i class="ri-share-forward-fill"></i>
        <i class="favourite ri-heart-add-2-fill" data-index="0"></i>
    </div>
</div>
`;



// ---------------------- UPDATE FAVOURITES PANEL -----------------------
function updateFavSection() {

    // favourites ko display karne ke liye HTML string
    var clutter = "";

    // har fav video ke liye card banta hai
    favourites.forEach(function (obj) {

        clutter += `
        <div class="fav-ele">
            <img src="${obj.videoThumbnail}" />
            <h3>${obj.videoName}</h3>
        </div>
        `;
    });

    // final render favourites box me
    favSection.innerHTML = clutter;
}



// ---------------------- SEARCH BOX CONTROL -----------------------
function searchBarFun() {

    var searchContainer = document.querySelector('#search-data');

    // jab input focus ho → search box show
    searchBar.addEventListener('focus', function () {
        searchContainer.style.display = "block";
        content.style.opacity = 0.3; // background dim
    });

    // blur hone par hide
    searchBar.addEventListener('blur', function () {
        searchContainer.style.display = "none";
        content.style.opacity = 1;
    });

    // jab type kare → filter logic
    searchBar.addEventListener('input', function () {

        // filter only those videos jinka naam input se start hota hai
        const searchedVideoArr = videos.filter(obj =>
            obj.videoName.toLowerCase().startsWith(searchBar.value.toLowerCase())
        );

        // display result list
        var clutter = "";
        searchedVideoArr.forEach(function (obj) {

            clutter += `
            <div class="search-elem">
                <h5>${obj.videoName}</h5>
            </div>
            `;
        });

        searchContainer.innerHTML = clutter;
    });
}



// ---------------------- FAVOURITE PANEL OPEN/CLOSE -----------------------
favCartBtn.addEventListener("click", function () {

    // sidebar toggle
    favSection.classList.toggle("show");

    // panel open → background dim
    if (favSection.classList.contains("show")) {
        content.style.opacity = 0.3;
    }
    // panel close → normal
    else {
        content.style.opacity = 1;
    }
});



// ---------------------- EXECUTION -----------------------
addSuggestions();          // suggestions create
addVideoActionsFunctionality(); // play/pause control
changeVideo();            // suggestion click → play video
searchBarFun();           // search functionality
