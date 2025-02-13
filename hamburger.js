
    /*Hamburger */ 
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', function () {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');


    })

    /*image track*/ 


    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage;

      track.animate({
        transform: `translate(${nextPercentage}%, -1%)`
      }, { duration: 1200, fill: "forwards" });

      for (const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);

    const images = document.querySelectorAll("#image-track .image");

    // Loop through each image element
    images.forEach(function (image) {
      // Add event listener for mouseover
      image.addEventListener("mouseover", function () {
        // Find the corresponding .text-overlay element for this image
        var textOverlay = image.nextElementSibling;
        // Set the opacity of the text-overlay element to 1 when hovered
        textOverlay.style.opacity = '1';
      });

      image.addEventListener("mouseover", function () {
        // Set the scale of the image element to 1.18 when hovered
        image.style.transform = 'scale(1.18)';
      });

      // Add event listener for mouseout
      image.addEventListener("mouseout", function () {
        // Set the scale of the image element back to normal when mouse leaves
        image.style.transform = 'scale(1)';
      });
      // Add event listener for mouseout
      image.addEventListener("mouseout", function () {
        // Find the corresponding .text-overlay element for this image
        var textOverlay = image.nextElementSibling;
        // Set the opacity of the text-overlay element back to 0 when mouse leaves
        textOverlay.style.opacity = '0';
      });

    });




  