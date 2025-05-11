const photos = [
    "YAMAHA_R7_GEN_PERFORMANCE.png",
    "Yamaha-FZ-25-Social.png",
    "2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.png",
    "TG_DSC0155.jpg",
    "unnamed.jpg",
    "6623707f6ae11.avif",
    "2411-hero-2022-mazda-3-turbo-hatchback-polymetal-gray-front-quarter-.avif",
    "final-size-banner.png",
    "kia-seltos-front-medium-view-472346.avif"
    


  ];
  
  
  let index = 0;

  function showPhotos() {
    document.getElementById("current").innerHTML = `<img src="${photos[index]}">`;
    
    // Previous image
    const prevBox = document.getElementById("prev");
    if (index > 0) {
      prevBox.className = "side";
      prevBox.innerHTML = `<img src="${photos[index-1]}">`;
    } else {
      prevBox.className = "side empty";
      prevBox.innerHTML = "";
    }
    
    // Next image
    const nextBox = document.getElementById("next");
    if (index < photos.length-1) {
      nextBox.className = "side";
      nextBox.innerHTML = `<img src="${photos[index+1]}">`;
    } else {
      nextBox.className = "side empty";
      nextBox.innerHTML = "";
    }
  }

  document.getElementById("prev").onclick = function() {
    if (index > 0) index--;
    showPhotos();
  };

  document.getElementById("next").onclick = function() {
    if (index < photos.length-1) index++;
    showPhotos();
  };

  // Show first photo
  showPhotos();
