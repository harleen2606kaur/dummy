export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Review {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  publishedAt: string;
  content: React.ReactNode;
}

export const products: Product[] = [
  {
    id: "glow-radiance-serum",
    name: "Glow Radiance Serum",
    price: "₹1499",
    description: "A lightweight serum enriched with Vitamin C and Hyaluronic Acid to brighten and hydrate the skin.",
    benefits: ["Brightens skin tone", "Reduces dullness", "Improves hydration"],
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hydrating-face-cream",
    name: "Hydrating Face Cream",
    price: "₹1299",
    description: "A moisturizing cream that locks in hydration for soft and smooth skin.",
    benefits: ["Deep hydration", "Softens skin", "Suitable for daily use"],
    image: "https://images.unsplash.com/photo-1615397323539-786d1ddf8742?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Cleanser",
    price: "₹899",
    description: "A mild cleanser that removes dirt and excess oil without drying the skin.",
    benefits: ["Cleans pores", "Maintains moisture balance", "Suitable for sensitive skin"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "vitamin-c-face-wash",
    name: "Vitamin C Face Wash",
    price: "₹799",
    description: "Refreshes and brightens skin while removing impurities.",
    benefits: ["Brightening effect", "Fresh feeling", "Daily cleansing"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "aloe-vera-moisturizing-gel",
    name: "Aloe Vera Moisturizing Gel",
    price: "₹599",
    description: "A soothing gel formulated with pure aloe vera extracts.",
    benefits: ["Calms irritation", "Provides hydration", "Lightweight formula"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sunscreen-spf-50",
    name: "Sunscreen SPF 50+",
    price: "₹999",
    description: "Broad-spectrum sun protection against harmful UV rays.",
    benefits: ["SPF 50+ protection", "Non-greasy formula", "Suitable for all skin types"],
    image: "https://images.unsplash.com/photo-1566219326233-d92b67f1b635?auto=format&fit=crop&w=600&q=80",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah M.",
    quote: "ShineBeauty products transformed my skincare routine. My skin feels healthier than ever!",
    rating: 5,
  },
  {
    id: "2",
    name: "Emma R.",
    quote: "I love the Glow Radiance Serum. Highly recommended!",
    rating: 5,
  },
];

export const blogs: BlogPost[] = [
  {
    id: "blog-1",
    title: "5 Essential Steps for Healthy Skin and a Radiant Complexion",
    publishedAt: "June 10, 2026",
    content: "Building an effective skincare routine is the foundation for achieving healthy skin and a naturally glowing skin tone. A consistent daily regimen using high-quality skincare products is essential. \n\nHere are the 5 vital steps for your skincare routine:\n\n1. Cleanse - Remove impurities to prepare for skincare products.\n2. Tone - Balance your skin's pH levels.\n3. Apply Serum - Target concerns to achieve radiant skin.\n4. Moisturize - Lock in hydration for healthy-looking skin.\n5. Use Sunscreen - Protect against UV rays to maintain glowing skin over time.\n\nConsistency with your skincare routine is the absolute key to unlocking naturally glowing skin.",
  },
  {
    id: "blog-2",
    title: "Why Sunscreen is Important Every Day for Healthy Glowing Skin",
    publishedAt: "June 5, 2026",
    content: "If you want to maintain glowing skin, sunscreen is the most vital skincare product in your daily skincare routine. Sunscreen protects your skin from harmful UV damage, premature aging, and dark spots to keep your complexion clear. Applying a broad-spectrum SPF daily is non-negotiable for healthy skin, even on cloudy days. Using effective skincare products combined with sunscreen is the ultimate secret to maintaining youthful, radiant skin.",
  },
  {
    id: "blog-3",
    title: "Best Skincare Ingredients for Deeply Hydrated Skin",
    publishedAt: "May 28, 2026",
    content: "When shopping for skincare products, choosing the right ingredients is critical for achieving deeply hydrated, healthy skin. To support a naturally radiant skin barrier, look for skincare products packed with these powerful ingredients:\n\n- Hyaluronic Acid for maximum moisture.\n- Aloe Vera to soothe your natural skin.\n- Glycerin to draw in hydration for glowing skin.\n- Ceramides to protect and repair your skin barrier.\n\nIntegrating these ingredients into your daily skincare routine will ensure your skin maintains optimal moisture, softness, and that perfect dewy glowing skin look.",
  },
  {
    id: "blog-4",
    title: "How to Choose Skincare Products for Your Specific Skin Type",
    publishedAt: "May 20, 2026",
    content: "Selecting the right skincare products tailored to your unique needs is essential for building a successful skincare routine and achieving healthy skin. \n\nHere is a quick guide to selecting skincare products for your skin type:\n\n- Dry Skin → Opt for deeply hydrating skincare products and rich creams to achieve glowing skin.\n- Oily Skin → Use oil-free, non-comedogenic skincare products for a balanced, clear complexion.\n- Sensitive Skin → Choose gentle skincare routine components without harsh chemicals to maintain healthy skin.\n- Combination Skin → Use balanced skincare products that treat both dry and oily zones for optimal radiant skin.",
  },
];
