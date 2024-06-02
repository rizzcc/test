document.addEventListener('DOMContentLoaded', () => {
    const snippets = [
        { title: "Snippet 1", description: "Bu kod snippet'ı bir merhaba dünya programıdır.", code: `console.log("Merhaba Dünya!");` },
        { title: "Snippet 2", description: "Bu kod snippet'ı bir toplama fonksiyonudur.", code: `function topla(a, b) { return a + b; }` },
        { title: "Snippet 3", description: "Bu kod snippet'ı bir dizi döngüsüdür.", code: `const arr = [1, 2, 3]; arr.forEach(num => console.log(num));` },
    ];

    const snippetList = document.getElementById('snippetList');
    snippets.forEach(snippet => {
        const snippetElement = document.createElement('div');
        snippetElement.className = 'snippet';
        snippetElement.innerHTML = `
            <h3>${snippet.title}</h3>
            <p>${snippet.description}</p>
            <button onclick="showCode('${encodeURIComponent(snippet.code)}')">Görüntüle</button>
        `;
        snippetList.appendChild(snippetElement);
    });
});

function showCode(encodedCode) {
    const modal = document.getElementById('codeModal');
    const codeBlock = document.querySelector('.code-block code');
    codeBlock.textContent = decodeURIComponent(encodedCode);
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('codeModal');
    modal.style.display = "none";
}

function showSearchResults() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    const snippets = [
        { title: "Snippet 1", description: "Bu kod snippet'ı bir merhaba dünya programıdır.", code: `console.log("Merhaba Dünya!");` },
        { title: "Snippet 2", description: "Bu kod snippet'ı bir toplama fonksiyonudur.", code: `function topla(a, b) { return a + b; }` },
        { title: "Snippet 3", description: "Bu kod snippet'ı bir dizi döngüsüdür.", code: `const arr = [1, 2, 3]; arr.forEach(num => console.log(num));` },
    ];

    searchResults.innerHTML = "";
    snippets.forEach(snippet => {
        if (snippet.title.toLowerCase().includes(searchInput)) {
            const resultItem = document.createElement('p');
            resultItem.textContent = snippet.title;
            resultItem.onclick = () => showCode(encodeURIComponent(snippet.code));
            searchResults.appendChild(resultItem);
        }
    });

    searchResults.style.display = searchInput ? 'block' : 'none';
}

function copyCode() {
    const codeBlock = document.querySelector('.code-block code');
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Kod panoya kopyalandı!');
}
