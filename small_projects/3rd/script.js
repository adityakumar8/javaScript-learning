function generate() {
  let quotes = {
    "- Deepak Chopra":
      '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
    "- C.S. Lewis":
      '"I was not born to be free, I was born to adore and obey."',
    "- Jenny Valentine, Broken Soup":
      '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.I"',

    "- amie Ford, Songs of Willow Frost":
      '"The library is like a candy store where everything is free."',
    "- Nenia Campbell, Crowned by Fire":
      '"You want to be free. You also want to be mine. You can not be both."',
  };
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
