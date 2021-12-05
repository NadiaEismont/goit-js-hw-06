const findLiItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${findLiItems.length}`)

findLiItems.forEach(item => {
    const textOfH2 = item.querySelector('h2').textContent;
    console.log(`Category: ${textOfH2}`);

    const amount = item.querySelectorAll('li');
    console.log(`Elements: ${amount.length}`);

});