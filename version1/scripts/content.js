let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-items");

let aViewPosts = document.createElement("a");

aViewPosts.setAttribute("target", "_blank");
aViewPosts.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts/");
aViewPosts.classList.add("app-aware-link", "global-nav__primary-link");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img=document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("images/saved.png"));
img.setAttribute("id", "imgSaved");

divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12", "break-words", "block", "t-black--light", "t-normalglobal-nav__primary-link-text");
spanViewPosts.innerHTML = "Saved";

aViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);


// KeyBoard Shortcut :- 's' or 'S'
document.addEventListener("keydown", 
            function (event) { 
                if (event.key === "s" || event.key=="S") { 
                    aViewPosts.click(); 
                } 
            }); 


// Voice assistant:
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-in";
speechRecognition.start();

speechRecognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;

    console.log(event);
    if(transcript.trim().toLowerCase().includes("open post")){
        aViewPosts.click();
    }
};