1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!-- getElementById -->
Ans:_________

This is used to get the element with a specific id. Works only on one element

example:

HTML:
<h1 id = "title">Hello Himel </h1>

JS:
const element = document.getElementById('title')


<!-- getElementsByClassName -->

It fetches all elements that fall within the specified class

--------------example :
html--->
<div class="box">Box 1</div>
<div class="box">Box 2</div>
JS:--->
const elements = document.getElementsByClassName('box');


<!---============= querySelector =========-->

Ans:_________
This is used to get the first matching element.
--------------example :
html--->
<p class="text">Hello</p>
<p class="text">World</p>
JS:--->
const firstText = document.querySelector('.text');


<!--============= querySelectorAll======= -->

Ans:_________

Using this, all matching elements are found.
html--->
<p class="text">Hello</p>
<p class="text">World</p>
JS:--->
const allText = document.querySelectorAll('.text');


2. How do you create and insert a new element into the DOM?


Ans:_________

JS:--->
1/ Crating a new element
const newDiv = document.createElement('div');

2/Adding content or attributes to an element
newDiv.textContent = "Hello Himel";

3/ Adding DOM elements
document.body.appendChild(newDiv); 


3. What is Event Bubbling? And how does it work?
Ans:_________
the events goes from the child element to the parent element

html--->
<div id="parent">
  <button id="btn">Click Me</button>
</div>

JS:--->

btn.addEventListener('click', function()  {
  alert("Button clicked");
});

parent.addEventListener('click', function () {
  alert("Parent clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:_________
Event Delegation is handling the event of a child element with this event listener. don't have to procide a separate listener for the child element.

html--->
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
JS:--->
list.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    alert(e.target.textContent + " clicked");
  }
});


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:_________
preventDefault() ==>  Disables the event's dafault action
stopPropagation() ==> Stops spreading to tthe event's parent .

html--->
<a href="https://google.com" id="link">Go</a>
<button id="btn">Click</button>
<div id="parent"></div>

JS:--->
// preventDefault
link.addEventListener('click', e => e.preventDefault());
// stopPropagation
btn.addEventListener('click', e => e.stopPropagation());