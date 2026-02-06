# Haider Trader API for Bookmarklet

This is the correct API endpoint for your Haider Trader bookmarklet. When deployed on Vercel, this will serve the JavaScript code that your bookmarklet will execute.

## How to Deploy on Vercel:

1. **Go to Vercel**: Visit [https://vercel.com/](https://vercel.com/)
2. **Sign In**: Log in with your account
3. **Create New Project**: Click "New Project"
4. **Upload**: Choose "Upload a ZIP" and select this entire folder
5. **Deploy**: Click "Deploy"

## After Deployment:

1. You will receive a URL like: `https://your-project-name.vercel.app/api`
2. Test it by visiting: `https://your-project-name.vercel.app/api` - you should see the JavaScript code
3. Update your bookmarklet with this URL

## Updated Bookmarklet Code:

Replace the URL in your bookmarklet with your deployed API URL:

```javascript
javascript:(function(){
  // Update this URL with your deployed API URL (append /api to the domain)
  const url = 'https://your-project-name.vercel.app/api';  // Replace with your actual URL
  
  fetch(url)
    .then(response => response.text())
    .then(code => {
      // Execute the Haider Trader code
      eval(code);
    })
    .catch(error => {
      console.error('Error loading Haider Trader code:', error);
      alert('Failed to load Haider Trader panel. Please check the deployment.');
    });
})();
```

## Important:
- Your API endpoint will be at: `https://your-project-name.vercel.app/api`
- The code expects the API to be at the `/api` route, which is why we put the index.js file in the `/api` folder
- Make sure to replace `your-project-name` with your actual Vercel project name in the bookmarklet