// ---------------------- VIDEO DATA -----------------------
// All available videos stored as objects in an array.
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
var video = videoContainer.childNodes[1]; // actual <video> element
var videoActions = document.querySelector('#video-actions');

var suggestionsContainer = document.querySelector('#suggestions');
var videoTextContainer = document.querySelector("#video-text");

// Favourites panel
var favCartBtn = document.querySelector(".favorite-Cart");
var favSection = document.querySelector("#fav-section");

// Search & content
var searchBar = document.querySelector('.search-bar');
var content = document.querySelector("#content");

// Favourites array
var favourites = [];


// ---------------------- ADD VIDEO SUGGESTIONS -----------------------
function addSuggestions() {
    var clutter = "";
    videos.forEach(function (ele, index) {
        clutter += `
        <div class="video-card">
            <div class="video-thumbnail">
                <img data-index=${index} src="${ele.videoThumbnail}" />
            </div>
            <div class="video-thumbnail-text">
                <h3>${ele.videoName}</h3>
                <button data-index=${index}>Watch &nbsp;&nbsp; <i class="ri-eye-fill"></i></button>
            </div>
        </div>
        `;
    });
    suggestionsContainer.innerHTML = clutter;
}


// ---------------------- VIDEO CLICK → PLAY / PAUSE -----------------------
function addVideoActionsFunctionality() {
    var flag = 0; // 0 = pause, 1 = play

    video.addEventListener('click', function () {
        if (!flag) {
            video.play();
            flag = 1;
            videoActions.style.display = "none"; // hide play icons
        }
        else {
            video.pause();
            flag = 0;
            videoActions.style.display = "block"; // show play icons
        }
    });
}


// ---------------------- CHANGE VIDEO WHEN CLICKED -----------------------

function changeVideo() {
    suggestionsContainer.addEventListener('click', function (details) {

        var index = details.target.dataset.index;
        if (index === undefined) return;

        var videoObj = videos[index];

        video.src = videoObj.videoSrc;
        video.play();
        videoActions.style.display = 'none';

        // UPDATE TITLE + DESCRIPTION
        videoTextContainer.innerHTML = `
        <div id="text">
            <h2>${videoObj.videoName}</h2>
            <div id="icons">
                <p>${videoObj.videoDesc}</p>
                <i class="ri-thumb-up-fill"></i>
                <i class="ri-thumb-down-fill"></i>
                <i class="ri-share-forward-fill"></i>
                <i class="favourite ri-heart-add-2-fill" data-index=${index}></i>
            </div>
        </div>
        `;

        // ADD TO FAVOURITES
        document.querySelector(".favourite").addEventListener("click", function () {
            if (!favourites.includes(videos[index])) {
                favourites.push(videos[index]);
                updateFavSection();
            }
        });
    });
}


// ---------------------- DEFAULT FIRST VIDEO TEXT -----------------------
video.src = videos[0].videoSrc;
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
    var clutter = "";
    favourites.forEach(function (obj) {
        clutter += `
        <div class="fav-ele">
            <img src="${obj.videoThumbnail}" />
            <h3>${obj.videoName}</h3>
        </div>
        `;
    });
    favSection.innerHTML = clutter;
}


// ---------------------- SEARCH BOX CONTROL -----------------------
function searchBarFun() {
    var searchContainer = document.querySelector('#search-data');

    searchBar.addEventListener('focus', function () {
        searchContainer.style.display = "block";
        content.style.opacity = 0.3;
    });

    searchBar.addEventListener('blur', function () {
        searchContainer.style.display = "none";
        content.style.opacity = 1;
    });

    searchBar.addEventListener('input', function () {
        const searchedVideoArr = videos.filter(obj =>
            obj.videoName.toLowerCase().startsWith(searchBar.value.toLowerCase())
        );

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
    favSection.classList.toggle("show");

    // When panel opens → fade content
    if (favSection.classList.contains("show")) {
        content.style.opacity = 0.3;
    } else {
        content.style.opacity = 1;
    }
});


// ---------------------- EXECUTION -----------------------
addSuggestions();
addVideoActionsFunctionality();
changeVideo();
searchBarFun();
