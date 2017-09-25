(function () {
var theImages = document.querySelectorAll('.image-holder'),
    theHeading = document.querySelector ('.heading'),
    theSubhead = document.querySelector ('.main-copy h2'),
    theSeasonText = document.querySelector ('.main-copy p'),
    appliedClass;
//i want to change all the content on the page
function changeElements() {
  let subImages = document.querySelector('.subImagesContainer');
  let objectIndex = dynamicContent[this.id];

  while(subImages.firstChild){
  subImages.removeChild(subImages.firstChild);
}

  objectIndex.images.forEach(function(image, index) {
    let newSubImage = document.createElement('img');

    newSubImage.classList.add('thumb');

    newSubImage.src = "images/" + objectIndex.images[index];
    subImages.appendChild(newSubImage);

});

  theSubhead.classList.remove(appliedClass);
  theHeading.classList.remove(appliedClass);

  theSubhead.firstChild.nodeValue = objectIndex.headline;
  theSeasonText.firstChild.nodeValue = objectIndex.text;

  theSubhead.classList.add(this.id);
  theSeasonText.classList.add(this.id);

  appliedClass = this.id;
}

  theImages.forEach(function(image, index){

  image.addEventListener('click', changeElements, false);
});

// document.querySelector('#spring').click();
  changeElements.call(document.querySelector('#spring'));
})()
