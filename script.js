console.log("Hello, World!");
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
const input = document.getElementById("myInput");
input.addEventListener("input", function() {
    console.log("Input value: " + input.value);
});
const link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link clicked!");
}); 