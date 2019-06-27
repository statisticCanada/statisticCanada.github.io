
var treeData =[
  {
    "name": "Category",
    "parent": "null",
    "children": [
      {
        "name": "Supply",
        "parent": "Category",
        "_children": [
          {
            "name": "Sub-Category",
            "parent": "Supply",
			"_children": [
						{
			"name": "Food production hunting and harvasting",
            "parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Food+Production/Hunting/Harvesting"
			},
						{
			"name": "Imports",
            "parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Imports+and+Exports"			
			},
						{
			"name": "Exports",
            "parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Imports+and+Exports"
			},
						{
			"name": "Wastage, non-food use animal food",
            "parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?category=supply"			
			},
						{
			"name": "Storage",
            "parent": "Sub-Category",
			"link" : "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20Availability%20&%20Storage"
			},
						{
			"name": "Avaliable food supply + Traditional foods",
            "parent": "Sub-Category",
			"link" : "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20Availability%20&%20Storage"			
			},

						{
			"name": "Food processing",
            "parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/Food_supply/food_supply.html?category=supply"
			}
			
			
			],
		  "link": "https://statisticcanada.github.io/Food_supply/food_supply.html?category=supply"
		  },
          {
            "name": "Influences",
            "parent": "Supply",
			"_children": [
			{"name": "Transport",
			"parent": "Influences"
			},
				{"name": "Transport",
			"parent": "Influences"
			},
				{"name": "Consumer Demand",
			"parent": "Influences"
			},
				{"name": "Environmental and Agricultural Influences",
			"parent": "Influences"
			}
			
			
			]
          }
        ],
	  "link": "https://statisticcanada.github.io/Food_supply/food_supply.html?category=supply"
	  },
      {
        "name": "Distribution",
        "parent": "Category",
		        "children": [
          {
            "name": "Sub-Category",
            "parent": "Distribution",
			"_children": [
			{"name": "Avaliable food supply + Traditional foods",
			"parent": "Sub-Category",
			},
				{"name": "Food for sale, intended to be eaten  at home/eaten away from home + Traditional foods",
				
			
			"parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20for%20Sale%20/%20Intended%20for%20Consumption"
			},			
			{"name": "Food acquired",
			"parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20Acquired"
			}
			
			],
			"link": "https://statisticcanada.github.io/Distribution/distribution.html?category=distribution"
          },
          {
            "name": "Influences",
            "parent": "Distribution",
		    "_children": [
				{"name": "Food Composition",
				"parent": "Influences",
				"link": "https://statisticcanada.github.io/Distribution/distribution.html?category=distribution"
				  
				},
				{"name": "Transport",
				"parent": "Influences",
				"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20Disposition"
				  
				}
				
			],
			"link": "https://statisticcanada.github.io/Distribution/distribution.html?category=distribution"
          
		  }
        ],
	  "link": "https://statisticcanada.github.io/Distribution/distribution.html?category=distribution"},
	        {
        "name": "Consumption",
        "parent": "Category",
		        "_children": [
          {
            "name": "Sub-Category",
            "parent": "Consumption",
			"children": [
			{"name": "Food Acquired",
			"parent": "Consumption",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20Acquired"},
			{"name": "Food Consumption",
			"parent": "Consumption",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Food%20Consumed"},
		    {"name": "Nutrient & non-  nutrient intakes",
			"parent": "Consumption"},
					    {"name": "Supplements  and natural  health products",
			"parent": "Consumption",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Nutrient%20&%20non%20nutrient%20intakes"}
			
			
			
			],
			"link": "https://statisticcanada.github.io/Distribution/distribution.html?category=consumption"
          },
          {
            "name": "Influences",
            "parent": "Consumption",
			"children": [
			{"name": "Access and  equity issues",
			"parent": "Influences",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Access%20and%20Equity%20Issues,%20Education%20Information%20Advertising"
			
			},
			{"name": "Food  Preference",
			"parent": "Influences",
			"_children": [
			{
			"name": "Education  Information  Advertising",
			"parent": "Food Preference",
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=consumption"},
			{
			"name": "Price",
			"parent": "Food Preference",
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=consumption"},
			{
			"name": "Income",
			"parent": "Food Preference",
			"link":"https://statisticcanada.github.io/Consumption/consumption.html?category=consumption"}			
			]
			
			},
			
			{"name": "Contaminants in Food",
			"parent": "Influences",
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=consumption"
			
			},	
			{"name": "Age, sex, physical status,  activity/lifestyle, drug use,  genetic characteristics",
			"parent": "Influences",
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=consumption"
			
			}			
			
			
			
			],
			"link":"https://statisticcanada.github.io/Consumption/consumption.html?category=consumption"
          }
        ]
      ,
	  "link": "https://statisticcanada.github.io/Distribution/distribution.html?category=consumption"
	  },
	        {
        "name": "Utilization",
        "parent": "Category",
		        "_children": [
          {
            "name": "Sub-Category",
            "parent": "Utilization",
			"_children": [
			{"name": "Nutrient & non-  nutrient intakes",
			"parent": "Utilization",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Nutrient%20&%20non%20nutrient%20intakes"},
			{"name": "Nutrient & non-nutrient metabolic  utilization: Nutritional, Chemical  and Microbial Status",
			"parent": "Utilization"	,
		  "link": "https://statisticcanada.github.io/statsdata.html?subcategory=Nutrient%20&%20non-nutrient%20metabolic%20utilization"
			}
			],
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=utilization"
          },
          {
            "name": "Influences",
            "parent": "Utilization",
			"_children": [
			{"name": "Existing health status and  nutrient requirements",
			"parent": "Influences",
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=utilization"
			},
			{"name": "Age, sex, physical status,  activity/lifestyle, drug use,  genetic characteristics",
			"parent": "Utilization",
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=utilization"
					}
			],
			"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=utilization"
          }
        ],
		"link": "https://statisticcanada.github.io/Consumption/consumption.html?category=utilization"
      },
	        {
        "name": "Health Outcome",
        "parent": "Category",
		        "_children": [
          {
            "name": "Sub-Category",
            "parent": "Health Outcome",
			"_children": [
			{"name": "Genetic  expression",
			"parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/Health/Health.html?category=Health+Outcome"},
			
			{"name": "Health status, outcomes  morbidity, mortality",
			"parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Health%20Status,%20Outcomes,%20Morbidity,%20Mortality"},
			
				{"name": "Supplements  and natural  health products",
			"parent": "Sub-Category",
			"link": "https://statisticcanada.github.io/statsdata.html?subcategory=Supplements%20and%20Natural%20Health%20Products"},
			
			
			],
			"link": "https://statisticcanada.github.io/Health/Health.html?category=Health+Outcome"
          },
          {
            "name": "Influences",
            "parent": "Health Outcome",
			"_children": [
			{"name" : "Housing, sanitation,  occupation, services",
			"parent": "Influences",
			"link": "https://statisticcanada.github.io/Health/Health.html?category=Health+Outcome"
			}
			
			],
			"link": "https://statisticcanada.github.io/Health/Health.html?category=Health+Outcome"
          }
		  
		  
        ],
		"link": "https://statisticcanada.github.io/Health/Health.html?category=Health+Outcome"
      }
    ],
  "link": "https://statisticcanada.github.io/statsdata"
  
  }
]
// ************** Generate the tree diagram	 *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
	width = 1220 - margin.right - margin.left,
	height = 700 - margin.top - margin.bottom;
	
var i = 0,
	duration = 750,
	root;

var tree = d3.layout.tree()
	.size([height, width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#chart").append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select(self.frameElement).style("height", "500px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click);

  nodeEnter.append("circle")
	  .attr("r", 1e-6)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
	  .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
	  .attr("dy", ".35em")
	  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
	  .text(function(d) { return d.name; })
	  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
	  .attr("r", 10)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
	  .style("fill-opacity", 1);
	  
	  
	  
	   nodeEnter
      .append("a")
         .attr("xlink:href", function (d) { return d.link })
      .append("rect")
          .attr("class", "clickable")
          .attr("y", -6)
          .attr("x", function (d) { return d.children || d._children ? -60 : 10; })
          .attr("width", 50) //2*4.5)
          .attr("height", 12)
          .style("fill", "lightsteelblue")
          .style("fill-opacity", .3)        // set to 1e-6 to hide          
          ;

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	  .remove();

  nodeExit.select("circle")
	  .attr("r", 1e-6);

  nodeExit.select("text")
	  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", function(d) {
		var o = {x: source.x0, y: source.y0};
		return diagonal({source: o, target: o});
	  });

  // Transition links to their new position.
  link.transition()
	  .duration(duration)
	  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
	  .duration(duration)
	  .attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
	  })
	  .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
	d._children = d.children;
	d.children = null;
  } else {
	d.children = d._children;
	d._children = null;
  }
  update(d);
}

