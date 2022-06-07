$(document).ready(() => {
  $("#clickme").click(() => {
    $.get("https://jsonplaceholder.typicode.com/posts/1", (data) => {
      $(`<p>${data.title}</p>`).appendTo("#response");
    });
  });
});
