# 15 - LocalStorage and Event Delegation
## :eyes: Introduction

![](./screenshot_1.jpg)

### Main goals

- The user can add items to the list and check it when it's done
- When the user refreshes the page, the checked status won't disappear

### Demo: 👉 [Click me]() 

## :pushpin: Solution
### My solution

First I added the "check all" and "clear all" buttons to toggle done states of all items at once. I also added trashcan icons to delete items individually.

#### Toggle all items at once
```javascript
function toggleAll(e) {
    if (e.target.matches('.check-all')) {
        items.forEach(item => {
            item.done = true;
        });
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    } else if (e.target.matches('.clear-all')) {
        items.forEach(item => {
            item.done = false;
        });
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }
}

toggleAllBtns.addEventListener('click', toggleAll);
```

#### Delete individual item
```javascript
function deleteItem(e) {
    if (!e.target.matches('.delete')) return;
    const index = parseInt(e.target.dataset.index);
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

itemsList.addEventListener('click', deleteItem);
```
### Example solution

```javascript
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; 
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
```

## :pencil2: Takeaways
### 1. Preserve data on page refresh using `localStorage`
#### What is `localStorage`?
```javascript
ffgfgfg
```
#### How to use `localStorage`?
#### What is `sessionStorage`?

### 2. Several notes on `form` element
### 3. Use ternary operator for `check` attribute
### 4. Increase reusability by setting parameters in functions
### 5. Event delegation: Hook up event listeners on elements that are always on the screen
### 6. Bonus: Toggle all items at once
### 7. Bonus: Delete individual items

## :book: References
* [localStorage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)