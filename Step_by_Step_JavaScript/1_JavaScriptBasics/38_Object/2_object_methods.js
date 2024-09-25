let book = {
  title: "javascript",
  author: "Farnaz Towhidi", 
  year: 2023,
  getSummries: function() {
    return this.title + " " + this.author;
  }
}
console.log (book.getSummries())