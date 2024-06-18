const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', function () {
        //this refers to the element of the html we are talking about
        //we have added the tags in the html so that we can easily determine what is number , what is operator etc.
        if (this.getAttribute('data-type') === 'number' || this.getAttribute('data-type') === 'operator') {
            display.value += this.textContent;
        }
        if (this.getAttribute('data-type') === 'clear') {
            display.value = "";
        }
        if (this.getAttribute('data-type') === 'calculate') {
            try {
                display.value = math.evaluate(display.value);
            } catch {
                display.value = "error";
            }
        }
    });
});
