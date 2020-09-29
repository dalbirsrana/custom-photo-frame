//******************************************************/
//******************************************************/
//
// code for Implementing Review and Ratings (pages/review.html)
//
//******************************************************/
//******************************************************/
// Root Level Variable Declarations
let reviewArr = [];

//******************************************************/
//******************************************************/
// Function Declarations
const avgRating = () => {
    let sumRating = 0;
    for(let i=0; i<reviewArr.length; i++){
        sumRating += reviewArr[i].rating;
    }
    return (sumRating/reviewArr.length).toFixed(2);
};

const displayReview = (loc) => {
    loc.innerHTML = '';
    loc.innerHTML += `<h3>Overall Product Rating: ${avgRating()} </h3>`;
    loc.innerHTML += `<h3>Total Number of Review(s): ${reviewArr.length} </h3>`;

    for(let i=0; i<reviewArr.length; i++){
        loc.innerHTML += `<p>Rating: ${reviewArr[i].rating} <br /> Review: ${reviewArr[i].review} <br /> By: ${reviewArr[i].name} (${reviewArr[i].email}) </p>`;
    }
};

//******************************************************/
//******************************************************/
// Load and Display Review and Ratings
reviewSubmit.addEventListener('click', (event) => {
    // alert("test");
    // Capturing User Info into object
    let myObj = {
        rating: parseInt(idRatings.value),
        review: idReview.value,
        name: review_name.value,
        email: review_email.value
    };

    reviewArr.push(myObj);  // Loading data on to array  

    displayReview(showReview);  // Display all Reviews and Rating information

    event.preventDefault();   // preventing form's default submit action
});