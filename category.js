
const url = "Categorized_Links.csv";

const rowTemplate = ({ Title, Description, Link, Category, Subcategory, Source }) => {



  return `
  <td >${Title}</td> 
  <td >${Description}</td> 
  <td > <a href=${Link}  target="_blank"> ${Link} </a></td> 
  <td >${Category}</td>  
  
 <td>${Subcategory}</td> 
 <td>${Source}</td>`
 ;};







// read data from the url
d3.csv(url, (err, csv) => {
  // change header names, and do some cleanup
  const data = csv.map(d => {
    // get medal data as numbers, not strings
    const medals = {
      Title: d.Title,
      Description: d.Description,
      Link:d.Link,
	  Category: d.Category,
      Subcategory: d.Subcategory, 
	  Source:d.Source
	  
	  };


    // use object spread to pass medal data
    // instead of the given value, compute total ourselves
    return {
      ...medals };

  });

  // the order we want the table headers
  // note these are not the same as the object names
  data.columns = ["Title", "Description", "Link", "Category", "Subcategory", "Source"];

  // select viz and append table
  const table = d3.select("#viz").append("table").attr("id", "mytable");

  // append headers
  const header = table.
  append("thead").
  selectAll("th").
  data(data.columns).
  enter().
  append("th").
  text(d => d);

  // append rows with rowTemplate
  const rows = table.
  append("tbody").
  selectAll("tr").
  data(data).
  enter().
  append("tr").
  html(rowTemplate);
});
          //# sourceURL=pen.js
