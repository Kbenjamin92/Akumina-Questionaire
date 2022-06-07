let items = [];
items.push({
  "url": "https://www.google.com",
  "title": "Google",
  "summary": "This is the summary for Google",
});
items.push({
  "url": "https://www.akumina.com",
  "title": "Akumina",
  "summary": "This is the summary for Akumina",
});
items.push({
  "url": "https://www.twitch.tv",
  "title": "Twitch.tv",
  "summary": "This is the summary for Twitch.tv",
});


let template = Handlebars.compile(document.querySelector("#handlebars-template").innerHTML);
let data = template(items);
document.querySelector("#output").innerHTML = data;

