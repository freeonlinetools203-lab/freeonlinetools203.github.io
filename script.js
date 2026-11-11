// =========================================================================
// 0. FAVICON
// =========================================================================
(function() {
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = 'https://freeonlinetools203.com/favicon.png';
        document.head.appendChild(favicon);
    }
})();

// =========================================================================
// 1. CENTRALIZED TOOLS DATABASE (ONLY MOST POPULAR FOR HOME PAGE)
// =========================================================================
const toolsDatabase = {
  catMostPopular: {
    name: "Our Most Popular Tools",
    tools: [
      { name: "PDF Merger", category: "pdf" },
      { name: "BMI Calculator", category: "health" },
      { name: "QR Code Generator", category: "utilities" },
      { name: "Currency Converter", category: "finance" },
      { name: "Password Generator", category: "security" },
      { name: "Image Compressor", category: "image" },
      { name: "Text to Speech", category: "text" },
      { name: "Age Calculator", category: "age" },
      { name: "Time Calculator", category: "time" },
      { name: "Love Calculator", category: "fun" }
    ]
  }
};

// =========================================================================
// 2. HELPER FUNCTION - GET URL
// =========================================================================
function getUrl(toolName) {
    let nameStr = (typeof toolName === 'object' && toolName !== null) ? toolName.name : toolName;
    return "https://freeonlinetools203.com/" + nameStr.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w\-]/g, '') + '.html';
}

// =========================================================================
// 3. RENDER DASHBOARD
// =========================================================================
function renderDashboard() {
    const container = document.getElementById('toolsContainer');
    if (!container) return;
    
    let html = '';
    const cat = toolsDatabase.catMostPopular;

    let visibleToolsHTML = cat.tools.map(tool => {
        let nameStr = tool.name;
        return `<div class="tool-card" data-category="${tool.category}"><a href="${getUrl(nameStr)}">${nameStr}</a></div>`;
    }).join('');

    html += `<div class="section" data-category="catMostPopular" id="section_catMostPopular">
        <div class="section-header-with-product">
            <h2>${cat.name}</h2>
        </div>
        <div class="tools-grid" id="grid_catMostPopular">
            ${visibleToolsHTML}
        </div>
    </div>`;

    container.innerHTML = html;
}

// =========================================================================
// 4. PAGE ONLOAD
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});
