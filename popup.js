document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const fileUpload = document.getElementById('fileUpload');
    const charCount = document.getElementById('charCount');
    const contentSpace = document.getElementById('contentSpace');
    const copyContentBtn = document.getElementById('copyContentBtn');
    const bardBtn = document.getElementById('bardBtn');
    const chatgptBtn = document.getElementById('chatgptBtn');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const madeByLink = document.querySelector('#madeByLink a');
  
    // File upload event listener
    fileUpload.addEventListener('change', function () {
      const file = fileUpload.files[0];
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const content = event.target.result;
        contentSpace.innerText = content;
        charCount.innerText = `Number of characters: ${content.length}`;
      };
  
      reader.readAsText(file);
    });
  
    // Copy content button event listener
    copyContentBtn.addEventListener('click', function () {
      const content = contentSpace.innerText;
      navigator.clipboard.writeText(content).then(function () {
        alert('Content copied!');
      });
    });
  
    // Bard button event listener
    bardBtn.addEventListener('click', function () {
      window.open('https://bard.google.com/', '_blank');
    });
  
    // ChatGPT button event listener
    chatgptBtn.addEventListener('click', function () {
      const content = contentSpace.innerText;
      window.open(`https://chat.openai.com/?content=${encodeURIComponent(content)}`, '_blank');
    });
  
    // Search button event listener
    searchBtn.addEventListener('click', function () {
      const query = searchInput.value.trim();
      if (query) {
        window.open(`https://chat.openai.com/?search=${encodeURIComponent(query)}`, '_blank');
      }
    });
  
    madeByLink.addEventListener('click', function(event) {
        event.preventDefault();
        chrome.tabs.update({ url: 'https://instagram.com/tanishmittal02' });
      });
      
  });
  