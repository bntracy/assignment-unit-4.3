console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull()) {
        return false; // basket is full, item not added
    } else {
        basket.push(item);
        return true;
    }
} // end addItem function

// testing
console.log('Original basket, should be empty:', basket);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Basket is now:', basket);

function listItems() {
    for (let basketItem of basket) {
        console.log(basketItem);
    } // end for
} // end listItems function

// testing
listItems(); // should log apples
// add some more items to test
addItem('bananas');
addItem('pears');
listItems(); // should log apples, bananas, pears on separate lines

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
} // end empty function

// testing
console.log('Now to empty the basket:');
empty();
console.log('Basket, should be empty again:', basket);

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
} // end isFull function

// testing
console.log('isFull, should be false as basket is empty:', isFull());
addItem('salt');
addItem('pepper');
addItem('flour');
addItem('sugar');
console.log('isFull, should be false as basket contains four items:', isFull());
addItem('butter');
console.log('isFull, should be true as basket contains five items:', isFull());
console.log(basket);
console.log('try addItem when aleady full, should return false:', addItem('eggs'));
console.log(basket); // checking that it wasn't added

function removeItem(item) {
    let itemIndex = basket.indexOf(item);
    if (itemIndex === -1) {
        return null;
    } else {
        let deleted = basket.splice(itemIndex, 1);
        return deleted[0];
    }
} // end removeItem function

// testing removeItem
console.log('removeItem cinnamon -- should return null:', removeItem('cinnamon'));
console.log('removeItem flour -- should return flour:', removeItem('flour'));
listItems(); // should not contain flour


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
