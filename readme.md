



                                                           <!-- answer starts here  -->

<!-- 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->


1.  getElementById ==> Finds a specific element by its ID. Always returns only one element.

2.  getElementsByClassName ==> Finds multiple elements by class name. It returns a collection.

3.  querySelector ==> Uses a CSS selector and returns the first matching element.

4.  querySelectorAll ==> Uses a CSS selector and returns all matching elements as a list.





<!-- 2. How do you create and insert a new element into the DOM?  -->


1. Create ==> Add content ==> Insert into parent element.


Example: 

let p = document.createElement("p");     
p.textContent = "This is a new paragraph"; 
document.body.appendChild(p);     




<!-- 3. What is Event Bubbling and how does it work? -->


Event bubbling is a way in which events in JavaScript move through the DOM.

When an event happens on a child element, it first runs on that element.

Then the event “bubbles up” to its parent, grandparent, and so on, until the root (document).

This allows parent elements to also handle events triggered inside their child elements.




 <!-- 4. What is Event Delegation in JavaScript? Why is it useful? -->


 Event delegation is a technique where instead of adding event listeners to many child elements,
we add a single listener to the parent element.
The event then reaches the parent because of event bubbling,
 and we can check which child triggered it.




 
<!-- 5. What is the difference between preventDefault() and stopPropagation() methods? -->


preventDefault() => stops the element’s default behavior.

stopPropagation() => stops the event from moving to parent/ancestor elements.