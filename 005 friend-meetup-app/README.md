# Wumble

[Click here for a live demonstration of the solution.](https://web-dom-exercises.pages.dev/005%20friend-meetup-app/solution/) Try messing around with the values of the sliders. To see how the content and styling reacts.

## Task

This is Wumble, an app designed to help users match up with potential friends who have similar interests.

Make it so that, when the value of the `<input type="range">` sliders are changed, the "interest score" (as displayed in the `<span class="interest-score>` elements) updates in real time.

Additionally, the colours of certain elements should change depending on the value that the user has chosen.

- When the slider's value is `1`, these elements should turn red:

<p align="center">
  <img width="500px" src="https://gcdnb.pbrd.co/images/YYtT6xr41HdY.png?o=1"><br>
</p>

- When the slider's value is `2` or `3`, these elements should turn yellow:

<p align="center">
  <img width="500px" src="https://gcdnb.pbrd.co/images/V502rWFs1MIT.png?o=1"><br>
</p>

- And, when the slider's value is `4` or `5`, these elements should turn green:

<p align="center">
  <img width="500px" src="https://gcdnb.pbrd.co/images/wb7hJLEQQp1a.png?o=1"><br>
</p>

## Important information

The necessary CSS classes have already been set up for you, which you can view in the `styles-relevant.css` file. These classes are: 
- `.low-interest`
- `.medium-interest`
- `.high-interest`.

When an element has the `.low-interest`, `.medium-interest`, or `.high-interest` class applied to it, it will gain either the red, yellow, green styles respectively, as shown in the screenshots above.

This way, you can solve the styling part of the task simply by adding/removing the necessary CSS classes from the appropriate elements on the page. See the last point of the [Hints](#hints) section for more information on how to do this.

## Hints

- You can use the [`querySelectorAll` method](https://www.w3schools.com/jsref/met_document_queryselectorall.asp) to find all DOM elements on the page that match a given CSS selector.

- Take a look at [this example](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event#examples) to see how you can write JavaScript code that reacts when the value of an input field changes.

- Please note that the `querySelector` method does not necessarily have to be used on the `document` object. It can also be used on _any_ DOM element. [See here for more details and examples](https://www.w3schools.com/jsref/met_element_queryselector.asp).

- To add/remove CSS classes on a DOM element, you can use the element's `classList.add()` and `classList.remove()` methods. [See here for more details](https://devdocs.io/dom/element/classlist).
