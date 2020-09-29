//******************************************************
// *****************************************************
//   
//  Code For Custom Photo frame page ( /pages/customFrame.html)           
//
// *****************************************************
// *****************************************************
// Checking parent ID on body tag 
if (document.getElementById('cus_Frame')) {    


// *****************************************************
//      Parent Scope Variables/Array
// *****************************************************
 // Array containing all frame thumbnails IDs
const frameArr = [idFrame1, idFrame2, idFrame3, idFrame4];

// Array Containing all Pictures thumbnails IDs
const picArr = [idPic1, idPic2, idPic3, idPic4];  


//******************************************************/
//******************************************************/
// Function Declarations
// ******************************************************

//function to create border and effect on selected thumbnail 
const thumbnailSelect = (cur, thumbnailArr) => {
    thumbnailArr.forEach((thumbnail) => {
        //clears the background of all frame thumbnail
        thumbnail.parentNode.style.background = "none"; 
        // set white border for all frame thumbnail
        thumbnail.parentNode.style.border = "3px solid #ffffff00"; 
    });
    // set low opacity background
    cur.parentNode.style.background = "#00ff0011"; 
    //set solid green border for clicked thumbnail
    cur.parentNode.style.border = "3px solid #00ff00ff"; 
};


// Code for drawing Some silly default frame on Canvas
// anonymous function automatically call when page loads
window.onload = () => {   
    // console.log('test');
    if (canvasFrGr.getContext) {
        // returns a drawing context on the canvas
        let ctx = canvasFrGr.getContext('2d');  

        // creates a matrix of blocks and fill with mix of red to green colors
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                ctx.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ', ' + Math.floor(255 - 25.5 * j) + ', 0)';
                ctx.fillRect(j * 60, i * 60, 60, 60);
            }
        }
        ctx.clearRect(60, 60, 480, 480);
    }
};

// ***************************************************
//  Code for drawing frame on Canvas
// ***************************************************


frameArr.forEach(frame => { 
    // Binding click event listener to all frame thumbnails    
    frame.addEventListener('click', () => {
        // retriving full size frame image source
        let imgName = frame.getAttribute('data-src');

        let ctx = canvasFrGr.getContext('2d');

        // clears the canvas pixels 
        ctx.clearRect(0, 0, 600, 600);
        // creating a new image object   
        let img = new Image();   
        img.onload = () => {
            // drawing image pixels from image source
            ctx.drawImage(img, 0, 0, 600, 600);  
        };
        // fetching image source
        img.src = '../images/' + imgName;
        
        //calling function to create border and effect on selected thumbnail 
        thumbnailSelect(frame, frameArr);
    });
});


// ***************************************************
// Code for drawing Picture on Canvas
// ***************************************************

picArr.forEach(picture => {
    // Binding click event Listener to all image thumbnails
    picture.addEventListener('click', () => {   
        // fetching full size image source
        let imgName = picture.getAttribute('data-src');

        let ctx = canvasBkGr.getContext('2d');

        // clearing previous image picture
        ctx.clearRect(0, 0, 600, 600);      
        let img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 100, 100, 400, 400);
        };
        img.src = '../images/' + imgName;

    //calling function to create border and effect on selected thumbnail 
    thumbnailSelect(picture, picArr);

    // drawing borders on canvas
    ctx.strokeRect(80, 80, 440, 440);    
    ctx.strokeRect(90, 90, 420, 420);
    });
});


// ***************************************************
// Code for drawing Text on Canvas
// ***************************************************

//  adding input event listener to all form fields eg., text box and radio buttons
[idTextLine, posTop, posBottom, posCenter, idTextColor].forEach(element => {   
    element.addEventListener('input', () => {
        let pos=135;
        // checking where to place text on canvas in 'Y' axis, default to top
        if (posTop.checked) {      
            pos = 135;
        } else if (posBottom.checked) {
            pos = 490;
        } else {
            pos = 320;
        }
        let ctx = canvasText.getContext('2d');
        ctx.clearRect(0, 0, 600, 600);

        // setting text properties
        ctx.font = '40px sans-serif';
        ctx.textAlign = "center";
        ctx.fillStyle = idTextColor.value;
        // Drawing text on fixed X axis and Y axis according to pos variable
        ctx.fillText(idTextLine.value, 300, pos);
        ctx.strokeStyle = "#eeeeee66";
        ctx.strokeText(idTextLine.value, 300, pos);
    });
});

}  
/* Code For Custom frame page Ends   */        


// ****************************************************
// **************************************************** 
//
//  Code For Contact Us Page      
//
// ****************************************************
// *****************************************************
//Checking ID 'contactUs' on cantact Us page body tag
if (document.getElementById('contactUs')) {

// Root Level Variable Declarations
let sumRandNum;

//******************************************************/
//******************************************************/
// Function Declarations
const readRand = () => {
    let randNum1, randNum2;
    idRandNum1.innerHTML = randNum1 = Math.floor(Math.random() * 10);
    idRandNum2.innerHTML = randNum2 = Math.floor(Math.random() * 10);
    sumRandNum = randNum1 + randNum2;
};

//******************************************************/
//******************************************************/
//loading random numbers on page load for security question
window.onload = ()=> {
    readRand();
};

idSubmit.addEventListener('click', (event) => {
    // on successfully passing the secuity displays the form result
    if(parseInt(label_security.value) === sumRandNum) {
        idThanks.innerHTML = `Hi, ${label_name.value} <br />`; 
        idThanks.innerHTML += `Thanks for Contacting Us <br />`;
        idThanks.innerHTML += `We'll get back to you soon. <br /><br />`;
        idThanks.innerHTML += `Your Mobile No.: ${label_mobile.value} <br />`;
        idThanks.innerHTML += `Your Email Address: ${label_email.value} <br />`;
        idThanks.innerHTML += `Your Question: ${label_question.value}`;
    } else {
        idThanks.innerHTML = "Please check your form fields!";
    }

    // Perventing form to submit on default click button action
    event.preventDefault();
});

} 
/* code for contact us page ends */