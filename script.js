document.getElementById('input').addEventListener('input', function(e) {
    const input = e.target.value;
    const output = processText(input);
    document.getElementById('output').value = output;
});

function processText(text) {
    // Replace block math notation
    text = text.replace(/\\\[(.*?)\\\]/gs, (match, p1) => `$$${p1}$$`);
    
    // Replace inline math notation
    text = text.replace(/\\\((.+?)\\\)/gs, (match, p1) => `$${p1}$`);
    
    // Remove spaces between $ and content for inline math
    text = text.replace(/\$ (.+?) \$/g, '$$$1$$');
    
    return text;
} 