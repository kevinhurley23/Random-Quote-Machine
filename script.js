const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

async function updateQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    $("#text").html(data.content);
    $("#author").html(data.author);
  } else {
    $("#text").html("An error occurred");
    console.log("error");
  }

  //edit tweet link
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      encodeURIComponent('"' + data.content + '" - ' + data.author)
  );

  //change color
  let x = Math.floor(Math.random() * colors.length);
  $(".color").css("background-color", colors[x]);
}

$("document").ready(updateQuote);

$("#new-quote").click(updateQuote);
