# Multiple choice quiz

[Click here for a live demonstration of the solution.](https://web-dom-exercises.pages.dev/006%20multiple-choice-quiz/solution/) Experiment with answering the questions both correctly and incorrectly.

## Task

Your task is to make the multiple choice quiz function properly, informing the user whether they get each question right or wrong.

When an answer button is clicked, the text content of the corresponding `<p class="question-status">` element should update:
- If the user answered correctly, the element should read "*Correct!*"
- If the user answered incorrectly, the element should read: "*Incorrect.*" 

Also, when a user answers a question, the button they clicked should be outlined. The `<p class="question-status">` element should also change colour depending on whether the user answered correctly.

## Important information

The necessary CSS classes have already been set up for you. The classes that you need to care about are:
- `.state-unanswered`
- `.state-correct`
- `.state-incorrect`
- `.selected-option`

Each quiz question is contained within an `<article class="quiz-question">` element. By default, the element has the class `.state-unanswered` applied:

![](https://gcdnb.pbrd.co/images/7OyGjMIT7wzN.png?o=1)

By replacing `.state-unanswered` with `.state-correct`, the `<p class="question-status">` element turns green:

![](https://gcdnb.pbrd.co/images/DPThkMP4FDnN.png?o=1)

Similarly, by applying the `.state-incorrect` class, the `<p class="question-status">` turns reddish-orange:

![](https://gcdnb.pbrd.co/images/qEpAxIk99y00.png?o=1)

Finally, to highlight the answer button which was selected by the user, you will have to apply the `.selected-answer` class to the relevant `<button>` element:

![](https://gcdnb.pbrd.co/images/tYabWeBhIjes.png?o=1)

Notice that in the screenshot above, the bottom-left button gains a green border to signify that the answer is correct. Please note that the CSS is set up to automatically handle applying the colour of the border; that isn't something you'll have to do manually.

## Hints

- You can use the [`querySelectorAll` method](https://www.w3schools.com/jsref/met_document_queryselectorall.asp) to find all DOM elements on the page that match a given CSS selector.

- Please note that the `querySelector` method does not necessarily have to be used on the `document` object. It can also be used on _any_ DOM element. [See here for more details and examples](https://www.w3schools.com/jsref/met_element_queryselector.asp).

- To add/remove CSS classes on a DOM element, you can use the element's `classList.add()` and `classList.remove()` methods. [See here for more details](https://devdocs.io/dom/element/classlist).