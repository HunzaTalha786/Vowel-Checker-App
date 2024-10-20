function checkVowel() {
    const char = document.getElementById('charInput').value;
    const vowels = 'aeiouAEIOU';
    let resultText; 

    if (char.length === 1 && vowels.includes(char)) {
        resultText = `"${char}" is a vowel.`; 
    } else {
        resultText = `"${char}" is not a vowel.`; 
    }

    document.getElementById('result').textContent = resultText; 
}
function restart(){
    document.getElementById('charInput').value="";
    document.getElementById('result').textContent ="";

}