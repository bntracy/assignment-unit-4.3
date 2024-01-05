console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
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
