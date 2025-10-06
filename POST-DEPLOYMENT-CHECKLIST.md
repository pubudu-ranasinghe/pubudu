# Post-Deployment SEO Checklist

## 🚀 Immediate Actions (Before Going Live)

### 1. Create OG Image ⚠️ **REQUIRED**
- [ ] Create 1200x630px image with your name and title
- [ ] Save as `/public/og-image.png`
- [ ] Test locally: Check if image appears at `http://localhost:4321/og-image.png`
- [ ] Recommended tools:
  - Figma template: 1200x630px canvas
  - Canva: Search "Open Graph Image" template
  - Design tips: Use your site's color scheme (stone tones), add your name prominently

**Current Status**: ⚠️ Site references `/og-image.png` but file doesn't exist yet!

---

## 📝 After Deployment

### 2. Verify Files Are Accessible
Test these URLs in your browser:
- [ ] `https://pubuduranasinghe.com/robots.txt`
- [ ] `https://pubuduranasinghe.com/sitemap-index.xml`
- [ ] `https://pubuduranasinghe.com/sitemap-0.xml`
- [ ] `https://pubuduranasinghe.com/og-image.png`

### 3. Test SEO Implementation
- [ ] Run validation script: `./seo-validation.sh`
- [ ] Check for any errors or warnings

---

## 🔧 Google Search Console Setup

### 4. Add Property to Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Click "Add Property"
- [ ] Enter: `pubuduranasinghe.com`
- [ ] Verify ownership (DNS, HTML tag, or Google Analytics)

### 5. Submit Sitemap
- [ ] In Google Search Console, go to "Sitemaps"
- [ ] Add sitemap URL: `sitemap-index.xml`
- [ ] Click "Submit"
- [ ] Wait 1-2 days for indexing to begin

### 6. Monitor Indexing
- [ ] Check "Coverage" report for crawl errors
- [ ] Review "Enhancements" for structured data status
- [ ] Monitor "Performance" for search appearance

---

## ✅ Validate Rich Results

### 7. Test Structured Data
**Homepage (Person Schema):**
- [ ] Go to https://validator.schema.org/
- [ ] Enter: `https://pubuduranasinghe.com/`
- [ ] Verify Person schema is valid
- [ ] Check all social media URLs are correct

**Blog Post (Article Schema):**
- [ ] Go to https://validator.schema.org/
- [ ] Enter: `https://pubuduranasinghe.com/building-modern-web-apps/`
- [ ] Verify BlogPosting schema is valid
- [ ] Confirm publish date is present

### 8. Test Rich Results Eligibility
- [ ] Go to https://search.google.com/test/rich-results
- [ ] Test homepage URL
- [ ] Test at least one blog post URL
- [ ] Verify no errors appear

---

## 📱 Social Media Testing

### 9. Test Open Graph Tags
**Facebook/LinkedIn:**
- [ ] Go to https://www.opengraph.xyz/
- [ ] Enter your homepage URL
- [ ] Verify image, title, and description appear correctly
- [ ] Test at least one blog post URL

**Twitter:**
- [ ] Go to https://cards-dev.twitter.com/validator
- [ ] Enter your homepage URL
- [ ] Verify Twitter Card appears correctly
- [ ] Check image dimensions and text

### 10. Live Social Share Test
- [ ] Share homepage on LinkedIn
- [ ] Share a blog post on Twitter/X
- [ ] Share a blog post on Facebook
- [ ] Verify OG image and metadata appear correctly

---

## 🔍 Search Engine Indexing

### 11. Check Indexing Status (After 1-2 weeks)
**Google:**
- [ ] Search: `site:pubuduranasinghe.com`
- [ ] Verify all pages are indexed
- [ ] Check if descriptions look good

**Bing:**
- [ ] Go to https://www.bing.com/webmasters
- [ ] Add and verify your site
- [ ] Submit sitemap: `sitemap-index.xml`

### 12. Monitor Search Appearance
- [ ] Check if rich snippets appear for your name search
- [ ] Verify blog post titles and descriptions in search results
- [ ] Monitor click-through rates in Search Console

---

## 📊 Analytics Setup (Optional but Recommended)

### 13. Enhanced Analytics
You already have Umami analytics. Consider adding:
- [ ] Google Analytics 4 (if not already)
- [ ] Google Tag Manager (for advanced tracking)
- [ ] Conversion tracking for important actions

---

## 🔄 Ongoing Maintenance

### Monthly Tasks
- [ ] Check Google Search Console for:
  - Crawl errors
  - Manual actions
  - Security issues
- [ ] Review search performance metrics
- [ ] Check for broken links

### Per New Blog Post
- [ ] Ensure frontmatter is complete:
  ```yaml
  title: "Descriptive Title with Keywords"
  description: "150-160 char description with keywords"
  publishDate: 2025-09-30
  tags: ["relevant", "keywords"]
  ```
- [ ] Build and deploy site (sitemap updates automatically)
- [ ] Share on social media and verify OG cards
- [ ] Submit URL for indexing in Search Console (optional, for faster indexing)

### Quarterly Review
- [ ] Audit meta descriptions based on CTR performance
- [ ] Update structured data if personal info changes
- [ ] Review top-performing pages and optimize similar content
- [ ] Check for Core Web Vitals issues

---

## 🎯 Success Metrics to Track

### Week 1-2
- ✅ All pages indexed in Google
- ✅ No crawl errors in Search Console
- ✅ Rich results eligible for all pages

### Month 1
- 📈 Organic impressions increasing
- 📈 Click-through rate > 2%
- 📈 Average position improving for target keywords

### Month 3-6
- 📈 Consistent organic traffic growth
- 📈 Ranking for target keywords
- 📈 Rich snippets appearing in search results
- 📈 Social shares generating referral traffic

---

## 🆘 Troubleshooting

### OG Image Not Showing?
1. Clear cache: https://developers.facebook.com/tools/debug/
2. Verify image exists at absolute URL
3. Check image file size < 8MB
4. Ensure image is 1200x630px

### Pages Not Indexed?
1. Check robots.txt isn't blocking
2. Verify sitemap is accessible
3. Submit URL manually in Search Console
4. Wait 1-2 weeks (Google takes time)

### Structured Data Errors?
1. Use Schema Validator to identify issues
2. Check for missing required fields
3. Ensure dates are in ISO 8601 format
4. Verify URLs are absolute (not relative)

### Low Rankings?
1. Content quality is #1 factor - keep writing!
2. Get backlinks from reputable sites
3. Optimize for user intent, not just keywords
4. Improve page speed (already good with Astro!)
5. Be patient - SEO takes 3-6 months to show results

---

## 📚 Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Astro SEO Guide](https://docs.astro.build/en/guides/seo/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

## ✨ You're All Set!

The technical SEO foundation is solid. Now focus on:
1. Creating the OG image (most important remaining task!)
2. Deploying and verifying everything works
3. Writing great content consistently
4. Sharing your work on social media
5. Building your online presence

Good luck! 🚀
