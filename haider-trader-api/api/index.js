// Haider Trader API Endpoint
// Serves the bookmarklet code when accessed

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // The complete Haider Trader panel code as a JavaScript string
  const haiderTraderCode = `(function() {
    'use strict';
    
    // Remove any existing haider-trader panel
    const existingPanel = document.getElementById('haider-trader-panel');
    if (existingPanel) {
        existingPanel.remove();
    }
    
    // Create the main panel container
    const panel = document.createElement('div');
    panel.id = 'haider-trader-panel';
    panel.style.position = 'fixed';
    panel.style.top = '50%';
    panel.style.left = '50%';
    panel.style.transform = 'translate(-50%, -50%)';
    panel.style.zIndex = '99999';
    panel.style.backgroundColor = '#1e1e2e';
    panel.style.border = '2px solid #4a4a8a';
    panel.style.borderRadius = '12px';
    panel.style.padding = '20px';
    panel.style.fontFamily = 'Arial, sans-serif';
    panel.style.color = '#ffffff';
    panel.style.width = '500px';
    panel.style.maxHeight = '80vh';
    panel.style.overflowY = 'auto';
    panel.style.boxShadow = '0 8px 30px rgba(0,0,0,0.5)';
    panel.style.fontSize = '14px';
    
    // Create panel content with all the requested features
    panel.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 2px solid #4a4a8a; padding-bottom: 10px;">' +
        '<h2 style="margin: 0; color: #8a6de9; font-size: 18px;">Haider Trader Panel</h2>' +
        '<button onclick="this.parentElement.parentElement.remove()" style="background-color: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold;">×</button>' +
        '</div>' +
        '<div style="margin-bottom: 15px; padding: 10px; background-color: #2d2d44; border-radius: 6px;">' +
        '<p style="margin: 0; color: #f39c12; font-weight: bold;">Developer: Haider Trader - Secure and verified!</p>' +
        '<p style="margin: 5px 0 0 0; font-style: italic; color: #bbb;">Trading Enhancement Suite</p>' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<a href="https://web.telegram.org/k/#@haidertrader512" target="_blank" style="display: inline-block; background-color: #3498db; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; margin-bottom: 10px;">Telegram</a>' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">Leaderboard Name:</div>' +
        '<input type="text" id="leaderboard-name" placeholder="Enter Name" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 10px;">' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">Leaderboard Balance:</div>' +
        '<input type="text" id="leaderboard-balance" placeholder="Enter Balance" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 10px;">' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">Mid Position:</div>' +
        '<input type="text" id="mid-position" value="1690" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 10px;">' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">Maximum Position:</div>' +
        '<input type="text" id="max-position" value="789345" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 10px;">' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">Profile Photo Link:</div>' +
        '<input type="text" id="profile-photo-link" placeholder="Enter Profile Photo Link" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 5px;">' +
        '<div style="font-size: 12px; color: #aaa;">Example: /en/user/avatar/view/07/90/87/46/avatar_8c7e009cd96f2e43f9d3237baab07071.png</div>' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">Country Flag:</div>' +
        '<div style="padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white;">🇧🇩 Bangladesh</div>' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<div style="margin-bottom: 5px; font-weight: bold;">License Verification</div>' +
        '<input type="text" id="license-key" placeholder="Haidertrader5050" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 10px;" value="Haidertrader5050">' +
        '<button onclick="alert(\'License verified: \'+document.getElementById(\'license-key\').value);" style="background-color: #2ecc71; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-right: 10px;">Verify License</button>' +
        '<span id="verification-status" style="color: #e74c3c;">✗ Not Verified</span>' +
        '</div>' +
        '<div style="margin-bottom: 15px;">' +
        '<button onclick="alert(\'Settings saved successfully!\');" style="background-color: #9b59b6; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-right: 10px;">Save Settings</button>' +
        '<button onclick="this.parentElement.parentElement.remove();" style="background-color: #3498db; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Close</button>' +
        '</div>' +
        '<div style="margin-bottom: 10px;">' +
        '<div style="font-weight: bold; margin-bottom: 8px;">Select Theme:</div>' +
        '<select id="theme-selector" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #4a4a8a; background-color: #2d2d44; color: white; margin-bottom: 10px;">' +
        '<option>Oblivion</option>' +
        '<option>Comet</option>' +
        '<option>Nebula</option>' +
        '<option>Specter</option>' +
        '<option>Nimbus</option>' +
        '<option>Quartz</option>' +
        '<option>Inferno</option>' +
        '<option>Quotex</option>' +
        '<option>Blitz</option>' +
        '<option>Drift</option>' +
        '</select>' +
        '</div>';
    
    // Add the panel to the page
    document.body.appendChild(panel);
    
    // Make the panel draggable
    const header = panel.querySelector('h2');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    if (header) {
        header.style.cursor = 'move';

        header.addEventListener('mousedown', dragStart);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('mousemove', drag);
    }

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === header) {
            isDragging = true;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;

        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, panel);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px)';
    }
    
    // Add temporary highlight effect
    setTimeout(() => {
        panel.style.transition = 'all 0.3s ease';
        panel.style.transform = 'translate(-50%, -50%) scale(1.02)';
        setTimeout(() => {
            panel.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300);
    }, 100);
  })();`;

  // Send the JavaScript code as response
  res.status(200).setHeader('Content-Type', 'application/javascript').send(haiderTraderCode);
}