// EXAMPLE 1 what is d3
var elem = d3.select(".example-1")
var data = [
    {
        value: 1
    }
];

function draw(input) {
    var boundElems = elem.selectAll(".example").data(input);
    boundElems.enter()
        .append("div")
        .attr("class", (d,i)=>"card example example-elem-"+i)
        .text((d,i)=>d.value);

    boundElems.exit()
        .remove()

    console.log("Selection: ", boundElems)

}

function addCard() {
    var newVal = data.length + 1;
    data.push({
        value: newVal
    })
    draw(data);
}

function removeCard() {
    data.pop();
    draw(data);
}

document.getElementById("add").addEventListener("click", addCard);
document.getElementById("sub").addEventListener("click", removeCard);
draw(data);

















// // EXAMPLE 2 Svg with data
// var elem = d3.select(".example-1")
// var data = [
//     {
//         value: 1
//     }
// ];

// var svg = elem.append("svg")
//     .attr("class", "example-svg")
//     .style("background-color", "#aaa")
//     .attr("width", window.innerWidth - 15)
//     .attr("height", 500)

// function draw(input) {
//     var boundElems = svg.selectAll(".example").data(input);
//     boundElems.enter()
//         .append("rect")
//         .attr("width", 50)
//         .attr("height", 50)
//         .attr("x", (d,i)=>10 + i * 60)
//         .attr("y", 10)
//         .attr("class", (d,i)=>"example example-elem-"+i)
//         .attr("fill", "red")
//         .attr("stroke", "blue")

//     boundElems.exit()
//         .remove()

// }

// function addCard() {
//     var newVal = data.length + 1;
//     data.push({
//         value: newVal
//     })
//     draw(data);
// }

// function removeCard() {
//     data.pop();
//     draw(data);
// }

// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data)









// // EXAMPLE 3 g's in the svg
// var elem = d3.select(".example-1")
// var data = [
//     {
//         value: 1
//     }
// ];

// var svg = elem.append("svg")
//     .attr("class", "example-svg")
//     .style("background-color", "#aaa")
//     .attr("width", window.innerWidth - 15)
//     .attr("height", 500)

// var myg = svg.append("g")
// 	.attr("class", "g")
// 	.attr("transform", "translate(" + 140 + "," + 130 + ")")

// function draw(input) {
//     var boundElems = myg.selectAll(".example").data(input);
//     boundElems.enter()
//         .append("rect")
//         .attr("width", 50)
//         .attr("height", 50)
//         .attr("x", (d,i)=>10 + i * 60)
//         .attr("y", 10)
//         .attr("class", (d,i)=>"example example-elem-"+i)
//         .attr("fill", "red")
//         .attr("stroke", "blue")

//     boundElems.exit()
//         .remove()

// }

// function addCard() {
//     var newVal = data.length + 1;
//     data.push({
//         value: newVal
//     })
//     draw(data);
// }

// function removeCard() {
//     data.pop();
//     draw(data);
// }

// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data)


















// // // EXAMPLE 4 transitions
// var elem = d3.select(".example-1")
// var data = [
//     {
//         value: 1
//     }
// ];

// var svg = elem.append("svg")
//     .attr("class", "example-svg")
//     .style("background-color", "#aaa")
//     .attr("width", window.innerWidth - 15)
//     .attr("height", 500)

// function draw(input) {
//     var boundElems = svg.selectAll(".example").data(input);
//     boundElems.enter()
//         .append("rect")
//         .attr("width", 50)
//         .attr("height", 50)
//         .attr("x", (d,i)=>10 + i * 60)
//         .attr("class", (d,i)=>"example example-elem-"+i)
//         .attr("fill", "red")
//         .attr("stroke", "blue")

//         // Set where you want the animation to start from
//         .attr("y", -20)
//         .attr("opacity", 0)

//         // Animation to execute
//         .transition()
//         .duration(300)
//         .ease(d3.easeBounce)

//         // Set where you want the animation to end
//         .attr("y", 10)
//         .attr("opacity", 1)

//     boundElems.exit()
//         .transition()
//         .duration(400)
//         .ease(d3.easeBounce)
//         .attr("y", -100)
//         .attr("opacity", 0)
//         .remove()

// }

// function addCard() {
//     var newVal = data.length + 1;
//     data.push({
//         value: newVal
//     })
//     draw(data);
// }

// function removeCard() {
//     data.pop();
//     draw(data);
// }

// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data)



















// // EXAMPLE 5 Basic Graph
// var elem = d3.select(".example-1")
// var data = [];
// for(var i=0; i<100; i++){
// 	data.push({
// 		x: i,
// 		y: Math.floor(Math.random() * 1100)
// 	})
// }
// var margin = {
// 	t: 20,
// 	r: 10,
// 	b: 20,
// 	l: 30
// }
// var svgWidth = window.innerWidth - 15;
// var svgHeight = 600;
// var width = svgWidth - margin.l - margin.r;
// var height = svgHeight - margin.b - margin.t;

// var svg = elem.append("svg")
//     .attr("class", "example-svg")
//     .style("background-color", "#aaa")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight)

// var graph = svg.append("g")
// 	.attr("class", "graph")
// 	.attr("transform", "translate(" + margin.l + "," + margin.t + ")")

// var xScale = d3.scaleLinear()
//     .domain([0, d3.max(data,d=>d.x)])
//     .range([0, width])
// var xAxis = graph
//     .append("g")
//     .attr("class", "xAxis")
//     .attr("transform", "translate(0," + height + ")");

// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(data,d=>d.y)])
//     .range([0, height])
// var yAxis = graph
//     .append("g")
//     .attr("class", "yAxis");

// var valueline = d3.line()
//     .x(function(d) { return xScale(d.x); })
//     .y(function(d) { return yScale(d.y); });
// var line = graph.append("path").attr("class", "line")
// line
// 	.data([data])
// 	.attr("stroke", "steelblue")
// 	.attr("fill", "none")
// 	.attr("stroke-width", "2px")
// 	.attr("d", valueline);



// function draw(input) {
// 	updateScales(input)
// 	drawAxis(input)
// 	drawGraph(input)
// }

// function updateScales(input) {
// 	xScale = d3.scaleLinear()
// 	    .domain([0, d3.max(input,d=>d.x)])
// 	    .range([0, width])

// 	yScale = d3.scaleLinear()
// 	    .domain([0, d3.max(input,d=>d.y)])
// 	    .range([height, 0])
// }

// function drawAxis(input) {
// 	xAxis
//         .attr("transform", "translate(0," + height + ")")
//         .style("font-size", "11px")
//         .call(d3.axisBottom(xScale)
//                 .tickSizeInner(0)
//                 .tickSizeOuter(2)
//                 .tickValues(xScale
//                     .domain()
//                     .filter((d,i)=>{return !(i%10)})
//                 ))

//     yAxis
//         .style("font-size", "11px")
//         .call(d3.axisLeft(yScale)
//                 .tickSizeOuter(0)
//                 .tickSizeInner(-width))

//     xAxis.selectAll(".tick")
//             .selectAll("line")
//             .attr("stroke", "#616161")
//     xAxis.selectAll("path")
//             .attr("stroke", "#616161")

//     yAxis.selectAll(".tick")
//             .selectAll("line")
//             .attr("stroke", "#616161")
//     yAxis.selectAll("path")
//             .attr("stroke", "#616161")
// }

// function drawGraph(input) {
// 	line
//       .data([input])
//       .attr("stroke", "steelblue")
//       .attr("fill", "none")
//       .attr("stroke-width", "2px")
//       .transition()
//       .duration(100)
//       .attr("d", valueline);
// }

// function addCard() {
//     var newVal = data.length + 1;
//     data.push({
//         x: newVal,
// 		y: Math.floor(Math.random() * 1100)
//     })
//     draw(data);
// }

// function removeCard() {
//     data.pop();
//     draw(data);
// }


// d3.select(window)
//     .on("resize", () => {
//         draw(data)
//     })

// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data)
