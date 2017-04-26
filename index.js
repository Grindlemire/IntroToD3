// // EXAMPLE 1 what is d3
// var elem = d3.select(".example-1")
// var data = [
//     {
//         value: 1
//     }
// ];
//
// function draw(input) {
//     var boundElems = elem.selectAll(".example").data(input);
//     boundElems.enter()
//         .append("div")
//         .attr("class", (d,i)=>"card example example-elem-"+i)
//         .text((d,i)=>d.value);
//
//     boundElems.exit()
//         .remove()
//
// }
//
// function addCard() {
//     var newVal = data.length + 1;
//     data.push({
//         value: newVal
//     })
//     draw(data);
// }
//
// function removeCard() {
//     data.pop();
//     draw(data);
// }
//
// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data);
//





// // EXAMPLE 2 Svg with data
// var elem = d3.select(".example-1")
// var data = [
//     {
//         value: 1
//     }
// ];
//
// var svg = elem.append("svg")
//     .attr("class", "example-svg")
//     .style("background-color", "#aaa")
//     .attr("width", window.innerWidth - 15)
//     .attr("height", 500)
//
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
//
//     boundElems.exit()
//         .remove()
//
// }
//
// function addCard() {
//     console.log("before add", data)
//     var newVal = data.length + 1;
//     data.push({
//         value: newVal
//     })
//     console.log("after add", data)
//     draw(data);
// }
//
// function removeCard() {
//     console.log("before remove", data)
//     data.pop();
//     console.log("after remove", data)
//     draw(data);
// }
//
// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data)
//



// // EXAMPLE 3 transitions
// var elem = d3.select(".example-1")
// var data = [
//     {
//         value: 1
//     }
// ];
//
// var svg = elem.append("svg")
//     .attr("class", "example-svg")
//     .style("background-color", "#aaa")
//     .attr("width", window.innerWidth - 15)
//     .attr("height", 500)
//
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
//
//         // Set where you want the animation to start from
//         .attr("y", -10)
//         .attr("opacity", 0)
//
//         // Animation to execute
//         .transition()
//         .duration(300)
//         .ease(d3.easeBounce)
//
//         // Set where you want the animation to end
//         .attr("y", 10)
//         .attr("opacity", 1)
//
//     boundElems.exit()
//         .transition()
//         .duration(300)
//         .ease(d3.easeBounce)
//         .attr("y", -10)
//         .attr("opacity", 0)
//         .remove()
//
// }
//
// function addCard() {
//     var newVal = data.length + 1;
//     data.push({
//         value: newVal
//     })
//     draw(data);
// }
//
// function removeCard() {
//     data.pop();
//     draw(data);
// }
//
// document.getElementById("add").addEventListener("click", addCard);
// document.getElementById("sub").addEventListener("click", removeCard);
// draw(data)
