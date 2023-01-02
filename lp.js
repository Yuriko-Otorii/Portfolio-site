window.addEventListener('load', () => {
  //Initial balloon display 
  const timeline = gsap.timeline();

  timeline
  .from(".balloon-wrapper", {
    duration: 1,
    y: 50, 
    opacity: 0,
    ease: "power2.out"
  }, "+=2")
  .from(".bubble-wrapper", {
    duration: 1,
    y: 50, 
    opacity: 0,
    ease: "power2.out"
  })


  //Eye changing
  const balloonBody = document.querySelector('.balloon-body')
  const eyeBalls = document.querySelectorAll('.eyeballs')
  const changedEyeBalls = document.querySelectorAll('.changed-eyeballs')
  balloonBody.addEventListener('mouseover', () => {
    eyeBalls.forEach((e) => {
      e.style.visibility = 'hidden'
    })
    changedEyeBalls.forEach((e) => {
      e.style.visibility = 'visible'
    })
  })

  balloonBody.addEventListener('mouseout', () => {
    eyeBalls.forEach((e) => {
      e.style.visibility = 'visible'
    })
    changedEyeBalls.forEach((e) => {
      e.style.visibility = 'hidden'
    })
  })  

  //Eye elems
  const cursor = document.querySelector('.cursor')
  const leftEyeArea = document.querySelector('.left-eye-outline')
  const leftEye = document.querySelector('.left-eyeball')
  const rightEyeArea = document.querySelector('.left-eye-outline')
  const rightEye = document.querySelector('.right-eyeball')
  const balloon = document.querySelector('.balloon-body');
  const {x: balloonPosX, y: balloonPosY, width: balloonWidth} = balloon.getBoundingClientRect();
//   console.log(`x: ${balloonPosX}`, `y: ${balloonPosY}`);


  let position = { x: 0, y: 0 }
  const mouse = { x: position.x, y: position.y }

  let leftEyeSetX = gsap.quickSetter(leftEye, 'x', 'px')
  let leftEyeSetY = gsap.quickSetter(leftEye, 'y', 'px')

  let rightEyeSetX = gsap.quickSetter(rightEye, 'x', 'px')
  let rightEyeSetY = gsap.quickSetter(rightEye, 'y', 'px')

  document.addEventListener("mousemove", function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    const diffPosX = balloonPosX - (mouse.x);
    const diffPosY = balloonPosY - (mouse.y);
    const windowSize = window.parent.screen.width;

      if(mouse.x > balloonPosX + balloonWidth){
        if(mouse.y > 0 && mouse.y < balloonPosY){
            //Eyes go up right
            if(windowSize >= 1024){
                //left
                leftEyeSetX(0);
                leftEyeSetY(-3.5);
                //right
                rightEyeSetX(17);
                rightEyeSetY(-3.5); 
            }else if(windowSize >= 768){
                //left
                leftEyeSetX(0);
                leftEyeSetY(-4.5);
                //right
                rightEyeSetX(20);
                rightEyeSetY(-5); 
            }else{
                //left
                leftEyeSetX(0);
                leftEyeSetY(-3.5);
                //right
                rightEyeSetX(10);
                rightEyeSetY(-3.5);            
            }
        }
      }
      if(mouse.x > balloonPosX + balloonWidth){
        if(mouse.y > balloonPosY + balloonWidth){
            //Eyes go down right
            if(windowSize >= 1024){
                //left
                leftEyeSetX(-2);
                leftEyeSetY(19);
                //right
                rightEyeSetX(13);
                rightEyeSetY(19); 
            }else if(windowSize >= 768){
                //left
                leftEyeSetX(-2);
                leftEyeSetY(19);
                //right
                rightEyeSetX(13);
                rightEyeSetY(19); 
            }else{
                //left
                leftEyeSetX(0);
                leftEyeSetY(13);
                //right
                rightEyeSetX(10);
                rightEyeSetY(13);
            }
        }
      }
      if(mouse.x > 0 && mouse.x < balloonPosX){
        if(mouse.y > balloonPosY + balloonWidth){
            //Eyes go down left
            if(windowSize >= 1024){
                //left
                leftEyeSetX(-15);
                leftEyeSetY(18);
                //right
                rightEyeSetX(1);
                rightEyeSetY(18);
            }else if(windowSize >= 768){
                //left
                leftEyeSetX(-15);
                leftEyeSetY(18);
                //right
                rightEyeSetX(3);
                rightEyeSetY(18); 
            }else{
                //left
                leftEyeSetX(-12);
                leftEyeSetY(10);
                //right
                rightEyeSetX(0);
                rightEyeSetY(10);
            }
        }
      }
      if(mouse.x > 0 && mouse.x < balloonPosX){
          if(mouse.y > 0 && mouse.y < balloonPosY + balloonWidth){
            //Eyes go up left
            if(windowSize >= 1024){
                //left
                leftEyeSetX(-17);
                leftEyeSetY(-5.5);
                //right
                rightEyeSetX(1);
                rightEyeSetY(-5.5);
            }else if(windowSize >= 768){
                //left
                leftEyeSetX(-17);
                leftEyeSetY(-5.5);
                //right
                rightEyeSetX(1);
                rightEyeSetY(-5.5);
            }else{
                //left
                leftEyeSetX(-10);
                leftEyeSetY(-4.5);
                //right
                rightEyeSetX(1);
                rightEyeSetY(-4.5);
            }
          }
      }
      if(mouse.x > balloonPosX && mouse.x < balloonPosX + balloonWidth){
        if(mouse.y > 0 && mouse.y < balloonPosY){
            //Eyes go up
            if(windowSize >= 1024){
                //left
                leftEyeSetX(-7);
                leftEyeSetY(-10);
                //right
                rightEyeSetX(7);
                rightEyeSetY(-10);
            }else if(windowSize >= 768){
                //left
                leftEyeSetX(-7);
                leftEyeSetY(-10);
                //right
                rightEyeSetX(7);
                rightEyeSetY(-10);
            }else{
                //left
                leftEyeSetX(-5.5);
                leftEyeSetY(-7.5);
                //right
                rightEyeSetX(5);
                rightEyeSetY(-7.5);
            }
        }
      }
      if(mouse.x > balloonPosX + balloonWidth){
            if(mouse.y > balloonPosY && mouse.y < balloonPosY + balloonWidth){
                //Eyes go right
                if(windowSize >= 1024){
                    //left
                    leftEyeSetX(2);
                    leftEyeSetY(3);
                    //right
                    rightEyeSetX(20);
                    rightEyeSetY(3);
                }else if(windowSize >= 768){
                    //left
                    leftEyeSetX(2);
                    leftEyeSetY(3);
                    //right
                    rightEyeSetX(20);
                    rightEyeSetY(3);
                }else{
                    //left
                    leftEyeSetX(2);
                    leftEyeSetY(3);
                    //right
                    rightEyeSetX(13);
                    rightEyeSetY(3);
                }
            }
      }
      if(mouse.x > balloonPosX && mouse.x < balloonPosX + balloonWidth){
        if(mouse.y > balloonPosY + balloonWidth){
            //Eyes go down
            if(windowSize >= 1024){
                //left
                leftEyeSetX(-7);
                leftEyeSetY(20);
                //right
                rightEyeSetX(7);
                rightEyeSetY(20);
            }else if(windowSize >= 768){
                //left
                leftEyeSetX(-7);
                leftEyeSetY(20);
                //right
                rightEyeSetX(7);
                rightEyeSetY(20);
            }else{
                //left
                leftEyeSetX(-5.5);
                leftEyeSetY(15);
                //right
                rightEyeSetX(6);
                rightEyeSetY(15);
            }
        }
      }
      if(mouse.x > 0 && mouse.x < balloonPosX){
          if(mouse.y > balloonPosY && mouse.y < balloonPosY + balloonWidth){
              //Eyes go left
              if(windowSize >= 1024){
                //left
                leftEyeSetX(-20);
                leftEyeSetY(3);
                //right
                rightEyeSetX(-1.5);
                rightEyeSetY(3);           
          }else if(windowSize >= 768){       
                //left
                leftEyeSetX(-20);
                leftEyeSetY(3);
                //right
                rightEyeSetX(-1.5);
                rightEyeSetY(3);  
            }else{
                //left
                leftEyeSetX(-13);
                leftEyeSetY(3);
                //right
                rightEyeSetX(-1.5);
                rightEyeSetY(3);
            }
        }
      }
  });
  document.addEventListener("mouseout", () => {
    leftEyeSetX(0);
    leftEyeSetY(0);
    rightEyeSetX(0);
    rightEyeSetY(0); 
  })
})
