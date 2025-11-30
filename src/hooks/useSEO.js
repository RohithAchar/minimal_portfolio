import { useEffect } from "react";

/**
 * Custom hook to manage SEO meta tags dynamically
 * @param {Object} seoData - SEO configuration object
 */
export function useSEO(seoData) {
  useEffect(() => {
    const {
      title = "Your Name - Full Stack Developer & Tech Blogger",
      description = "Portfolio and blog of Your Name, a full stack developer sharing daily learnings and building meaningful projects.",
      keywords = "web development, react, node.js, portfolio, tech blog",
      author = "Your Name",
      url = "https://yoursite.com",
      image = "https://yoursite.com/og-image.jpg",
      type = "website",
    } = seoData;

    // Update title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", author);

    // Open Graph tags
    updateMetaTag("property", "og:type", type);
    if (url) {
      updateMetaTag("property", "og:url", url);
    }
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    if (image) {
      updateMetaTag("property", "og:image", image);
    }

    // Twitter Card tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    if (url) {
      updateMetaTag("name", "twitter:url", url);
    }
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    if (image) {
      updateMetaTag("name", "twitter:image", image);
    }

    // Canonical URL (only if URL is provided)
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }
  }, [seoData]);
}

