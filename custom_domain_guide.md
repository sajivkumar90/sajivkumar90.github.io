# Custom Domain Setup for GitHub Pages

## Using Your Own Domain Name with Your Personal Brand Website

This guide explains how to use a custom domain name (like yourname.com) instead of the default sajivkumar90.github.io URL for your personal brand website.

### Benefits of Using a Custom Domain

1. **Professional Appearance**: A custom domain looks more professional than a github.io subdomain
2. **Better Branding**: Reinforces your personal brand with a dedicated domain
3. **Memorability**: Easier for clients and contacts to remember
4. **Flexibility**: You can change hosting providers in the future while keeping the same domain

### Step 1: Purchase a Domain Name

1. Choose a domain registrar (popular options include Namecheap, GoDaddy, Google Domains)
2. Search for available domains - good options for a personal brand website:
   - yourname.com (e.g., sajivkumar.com)
   - yourname.in (for India-specific presence)
   - yourname-law.com (profession-specific)
3. Purchase your chosen domain (typically $10-15 USD per year)
4. Complete the registration process with your personal information

### Step 2: Configure DNS Settings

After purchasing your domain, you'll need to configure its DNS settings:

1. Log in to your domain registrar's website
2. Find the DNS management or DNS settings section
3. Add the following records:

#### Option A: Apex Domain (example.com)
Add these A records pointing to GitHub's servers:
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

#### Option B: www Subdomain (www.example.com)
Add a CNAME record:
```
CNAME    www    sajivkumar90.github.io.
```

#### For Both Options
It's recommended to set up both the apex domain and www subdomain for best results.

### Step 3: Configure GitHub Repository

1. Go to your repository on GitHub (github.com/sajivkumar90/sajivkumar90.github.io)
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section (or click "Pages" in the sidebar)
4. Under "Custom domain", enter your domain name (e.g., sajivkumar.com)
5. Check the "Enforce HTTPS" box (recommended for security)
6. Click "Save"

### Step 4: Verify Setup

1. GitHub will create a file called CNAME in your repository
2. Wait for DNS changes to propagate (can take 24-48 hours)
3. Visit your custom domain to verify it's working
4. Check that HTTPS is working properly

### Troubleshooting

1. **Domain Not Working**
   - DNS changes can take up to 48 hours to propagate
   - Verify your DNS records are set correctly
   - Check GitHub Pages settings to ensure the custom domain is saved

2. **HTTPS Not Working**
   - It may take a few hours for GitHub to provision your SSL certificate
   - Ensure "Enforce HTTPS" is checked in GitHub Pages settings

3. **Lost CNAME File**
   - If you delete the CNAME file, your custom domain will stop working
   - If this happens, reconfigure the custom domain in GitHub Pages settings

### Maintaining Your Custom Domain

1. **Renewal**: Remember to renew your domain before it expires (typically yearly)
2. **Email**: Consider setting up email forwarding with your domain registrar
3. **Multiple Domains**: You can point multiple domains to the same GitHub Pages site

### Cost Considerations

- Domain registration: $10-15 per year
- GitHub Pages hosting: Free
- SSL certificate: Free (provided by GitHub)

This represents excellent value compared to traditional web hosting services that might cost $5-10 per month.
