const openBtn = document.querySelector(".openbtn");
const inputFile = document.querySelector(".userFile");
const videoPlayArea = document.querySelector(".vidplayarea");
const playBtn = document.querySelector(".playbtn");
const menuItem = document.querySelector(".menuitem");

const inputHandler = () =>
    {
    console.log("clicked");
    inputFile.click();
}
const acceptInputHandler = (obj) =>
    {
    console.log("input is clicked");
    let selectedVideos; 
    selectedVideos = obj.target.files[0];
    const link = URL.createObjectURL(selectedVideos);
    const inputVideo = document.createElement("video");
    inputVideo.setAttribute("class" , "video");
    inputVideo.src = link;
 if (videoPlayArea.children.length > 0)
 {
    videoPlayArea.removeChild(videoPlayArea.children[0])
 }
   videoPlayArea.appendChild(inputVideo);
   inputVideo.play();
  } 

  
openBtn.addEventListener("click", inputHandler);
inputFile.addEventListener("change" , acceptInputHandler);
