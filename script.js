const availableKeywords = [
    'apple is very testy',
     'banana is yellow',
      'orange is orange', 
      'grape is purple', 
      'kiwi is green', 
      'mango is yellow',
       'peach is pink',
        'pear is green',
        'plum is purple', 
        'cherry is red',
        'blueberry is blue',
        'strawberry is red',
        'watermelon is green',
        'pineapple is yellow',
         'papaya is orange',
        'pomegranate is red',
        'apricot is orange',
        'blackberry is black',
        'cantaloupe is orange',
        'fig is purple',
        'grapefruit is pink',
        'what is yellow',
        'what is red',
        'what is green',
        'what is purple',
        'What is programming',
        'What is AI',
        'What is machine learning',
        'What is deep learning',
        'What is data science',
        ];
const inputBox = document.getElementById('input');
const resultBox = document.getElementById('suggestions');
const heightBox = document.querySelector('#input-box');
 
inputBox.onkeyup = function() {
    const input = inputBox.value.toLowerCase();
    resultBox.innerHTML = '';
    if (input.length) {
        const suggestions = availableKeywords.filter(keyword => keyword.toLowerCase().includes(input));
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('li');
            suggestionElement.textContent = suggestion;
            suggestionElement.onclick = function() {
                inputBox.value = suggestion;
                resultBox.innerHTML = '';
            };
            resultBox.appendChild(suggestionElement);
        });
    }
}
