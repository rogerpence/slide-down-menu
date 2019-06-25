## Slide-down menu and declarative event handlers. 

This repo shows:

* a slide-down menu that pushes content under it down
* declarative event handlers (see detail below) 
* a start of a styled mobile-friendly grid. 

[demo](https://rogerpence.github.io/slide-down-menu/index.html)

---

### Declarative DOM element event handlers 

There are great JavaScript libraries (React and Vue.js, for example) that take a lot of the pain out of wiring up DOM element event handlers. However, for many simple projects those libraries are just too heavy. This article provides a simple, declarative way to assign multiple DOM element event handlers using custom HTML attributes. 

#### Assigning event names and handlers

Consider the following anchor tag which needs two event handlers, one for its client event and another for its focus event. 

    <a role="search" 
        data-events="click, focus" 
        data-handlers="toggleSearchPanel, buttonFocused" 
        class="search icon action-button " 
        href="#"><svg>...</svg>
    </a>

Events are assigned with a comma-separated list in the `data-events` attribute. You can assign one or event names as needed. 

Event handlers are assigned with a comma-separated list the `data-handlers` attribute. The event handlers positions correspond to the event names. That is, the first handler is assigned to the first event and so on. 

#### Creating event handlers

. The event handlers must be contained in a JavaScript object named `autoboundEventHandlers`, as shown below. 

    const autoboundEventHandlers = {
        toggleSearchPanel: function(e) {
            // Do something important here.
        },
        buttonFocused: function(e) {
            // Do something important here.
        }
    }

These handlers receive the corresponding event from the event's target element. Each handler's context is set to the event target element as well (that is, `this` within an event handler references its target element). 

#### Binding the event handlers

After the page is loaded, call assignAutoboundEventHandlers() 

    assignAutoboundEventHandlers() 

to bind the handlers to the corresponding events. JavaScript exceptions are thrown if the assigned handlers don't exist in the `autoBoundHandlers` object. 

That's all it takes. The autobound handlers will now react to the assigned events. 


    assignAutoboundEventHandlers = function() {
        convertToArray = function (str, delimiter = ',') {
            if (str === null) {
                throw `convertToArray() failed with null 'str' argument`;
            }
            return str.split(delimiter).map(arg => arg.trim());
        }

        const actionElements = Array.from(document.querySelectorAll('*[data-events]'));

        actionElements.forEach(element => {
            confirmFunctionsExist = function(functions) {
                functions.map(fn => {
                    if (autoboundEventHandlers[fn] === null || typeof autoboundEventHandlers[fn] !== 'function') {
                        throw `This autobound handler was not found: ${fn}`;
                    }
                })
            }
            assignElementEventHandlers = function(events) {
                events.map((event, index) => {
                    element.addEventListener(event, (e) => {
                        const handlerName = functions[index];
                        autoboundEventHandlers[handlerName].call(element, e);
                    });
                })
            }        

            const events = convertToArray(element.getAttribute('data-events'));
            const functions = convertToArray(element.getAttribute('data-handlers'));

            confirmFunctionsExist(functions);
            assignElementEventHandlers(events);
        })
    }    

#### How assignAutoboundEventHandlers works

assignAutoboundEventHandlers has just a few main areas: 

* The `convertToArray()` function converts a comma-delimited string to an array. The delimiter is an optional second argument.

* `actionElements` is an array of HTML elements that have a `data-events` attribute.

* A `forEach` iterates over each element to assign event the event handlers. Inside that loop: 

    * `confirmFunctionsExist()` confirms that each function listed in the `data-handlers` attribute is a function in the `autoEventHandlers` object. An exception is thrown for the first one that doesn't exist. 

    * `assignElementEventHandlers()` iterates over each event name specified in the `data-events` attribute and assigns the specified event handler to the specified event. 

    * In `assignElementEventHandlers()` the following line calls the event handler in the `autoboundEventHandlers` object.
    
            autoboundEventHandlers[handlerName].call(element, e);

        JavaScript's `call` is used so that the target element is passed as the context of the event handler.         





