[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uRfVGWql)
# COIS-2430H: Winter 2024 — Assignment 3

## Part I - Combining Everything You've Learned

For the first part of this assignment, you are going to combine everything you've learned about HTML and CSS to make a static site portfolio piece.

The first page should introduce yourself. The content is up to you, but should include a variety of HTML elements (images, tables, lists, media, not just text).

The second page should be an online (HTML-ified) version of your CV (Resume).

The following is a minimum list of requirements you should have across the two pages:

- Pages should link together in a logical way
- Both pages should start with a CSS reset (imported into your CSS, not included in your HTML)
- Semantic use of HTML5 sectioning elements for page structure
- A variety other semantic HTML elements
- Meaningful use of Grid, Flexbox and the Box Model as appropriate for different layout components
- A table
- Several images
- Good use of CSS Custom Properties (variables)
- Non-trivial use of CSS animation
- Use of pseudeo elements
- An accessible colour palette
- Use of media queries

The following is a list of things you cannot use:

- No pixels!!!
- No nested CSS
- No libraries, themes or frameworks. The only exceptions would be an icon library like font-awesome and/or a syntax highlighting library.
- No JavaScript (except as necessary for the above allowed libraries)

The focus of this course is development, not design. However, being able to replicate a provided design for the web is industry relevant experience. It’s not uncommon for a developer to be provided a .psd file designed by someone else, and be asked to reproduce it with HTML and CSS.

For your CV page, you must choose a design from: [https://dribbble.com/tags/resume](https://dribbble.com/tags/resume) and attempt to replicate it. _A link to the design you chose must be crediting the footer of your page(s)._

For cohesion, you can choose to carry this design style over to the first page as well, or you can do something else entirely on that page.

This question does include a complexity mark based on the design and content you choose.

Your testing must:

- Be correctly included (correctly labelled) in the _testing.md_ file in the appropriate folder.
- Be both cross-browser and cross-platform.
- Include HTML validation results for both pages, showing your HTML is valid.
- Illustrate any "state" changes, like hover.
- Include proof of accessibility testing.

## Part II - Scripting with JavaScript Core

In this section your going to write several small javascript functions to practice with javascript core programming (basically just using javascript as a normal scripting language). For each section you can hardcode input values, and all output should go to console (we'll worry about the actual web page on Assignment 4). Your testing should follow what you learned in 1020, and test a reasonable number of cases to illustrate that your code works.

### Leap Years

Write a function that accepts a year, and works out whether if a given year is a leap year (returning true if it is a leap year and false if it isn't). A normal year has 365 days, leap years have 366, with an extra day in February.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.

Call the function and with the result use a string template literal to print out a sentence including the year, and if it is a leap year or not.

### Pyramid Building

Write a function that accepts a number (the height of the pyramid), and creates an array of strings where each string represents a level in the pyramid. Each block in the pyramid is represented by the `@` character. The array should be returned from the function and printed to the console.

So for example a pyramid of `3` levels would look like:

```shell
[
  "  @  ",
  " @@@ ",
  "@@@@@"
]
```

and a pyramid with `5` levels would look like:

```shell
[
  "    @    ",
  "   @@@   ",
  "  @@@@@  ",
  " @@@@@@@ ",
  "@@@@@@@@@"
]
```

### Title Case

Write a function that accepts a string and return the string with the first letter of every word (and only the first letter) capitalized. Log the original string, and resulting string to the console.

### Even Numbers

Create a function that determines if a provided number is even. Define an array of numbers, then on the array use the appropriate array iterator to determine if the array contains only even numbers using the function you defined. Output the results, and test with several arrays.

### Long Names

Define an array of names. Use an iterator to retrieve a new array containing only the names longer then 12 characters. Your iterator should be passed an anonymous arrow function.
