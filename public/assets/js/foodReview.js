$.ajax("/api/members", {
  type: "GET",
  // data: newReview
}).then(
  function(data) {
    console.log(data);
    let reviewDisplay = $("<div class='reviewTitle'></div>");
    // let titleDisplay = $("<p>Gender: " + data.reviews.title + "</p>");
    // let bodyDisplay = $("<p>Gender: " + data.reviews.body + "</p>");

    $(".reviewCard").append(
      reviewDisplay
    );
    // Reload the page to get the updated list
    // location.reload();
  })


$("#create-review").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
console.log("clicked bby!!");
const loginForm = $("#logMeIn");
const titleInput = $("input#nameNine");
const bodyInput = $("textarea#messageNine");

    let newReview = {
      title: titleInput.val(),
      body: bodyInput.val(),
    };
    console.log(newReview);
    });
    