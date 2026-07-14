export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  category: "beauty" | "herbal" | "food" | "textiles"
}

export const MOCK_PRODUCTS: Product[] = [
  // BEAUTY (10)
  { id: "b1", name: "Radiant Skin Serum", price: 45.00, category: "beauty", imageUrl: "/images/beauty_serum.png" },
  { id: "b2", name: "Hydrating Face Cream", price: 32.50, category: "beauty", imageUrl: "/images/beauty_cream.png" },
  { id: "b3", name: "Vitamin C Brightening Drops", price: 38.00, category: "beauty", imageUrl: "/images/beauty_vitamin_c.png" },
  { id: "b4", name: "Purifying Clay Mask", price: 28.00, category: "beauty", imageUrl: "/images/beauty_clay_mask.png" },
  { id: "b5", name: "Rosewater Facial Toner", price: 22.00, category: "beauty", imageUrl: "https://placehold.co/600x800/f8e8f2/4a4a4a?text=Rosewater+Toner" },
  { id: "b6", name: "Overnight Repair Night Cream", price: 55.00, category: "beauty", imageUrl: "https://placehold.co/600x800/e8e8f8/4a4a4a?text=Night+Cream" },
  { id: "b7", name: "Gentle Foaming Cleanser", price: 26.00, category: "beauty", imageUrl: "https://placehold.co/600x800/f0f8e8/4a4a4a?text=Cleanser" },
  { id: "b8", name: "Exfoliating Walnut Scrub", price: 30.00, category: "beauty", imageUrl: "https://placehold.co/600x800/f8f0e8/4a4a4a?text=Walnut+Scrub" },
  { id: "b9", name: "Hyaluronic Acid Gel", price: 42.00, category: "beauty", imageUrl: "https://placehold.co/600x800/e8f8f8/4a4a4a?text=Hyaluronic+Gel" },
  { id: "b10", name: "Revitalizing Eye Cream", price: 36.00, category: "beauty", imageUrl: "/images/beauty_eye_cream.png" },

  // HERBAL (10) - Akschan Group Inspired
  { id: "h1", name: "Akschan Ashwagandha Extract", price: 24.00, category: "herbal", imageUrl: "/images/herbal_ashwagandha.png" },
  { id: "h2", name: "Akschan Turmeric Curcumin", price: 18.00, category: "herbal", imageUrl: "/images/herbal_turmeric.png" },
  { id: "h3", name: "Akschan Natural Haircare Oil", price: 35.00, category: "herbal", imageUrl: "https://placehold.co/600x800/f3f6e8/4a4a4a?text=Haircare+Oil" },
  { id: "h4", name: "Akschan Herbal Skincare Cream", price: 29.00, category: "herbal", imageUrl: "https://placehold.co/600x800/fff8e1/4a4a4a?text=Skincare+Cream" },
  { id: "h5", name: "Akschan Scalp Nourishment Serum", price: 32.00, category: "herbal", imageUrl: "https://placehold.co/600x800/e8f6e8/4a4a4a?text=Scalp+Serum" },
  { id: "h6", name: "Akschan Brahmi Brain Tonic", price: 26.00, category: "herbal", imageUrl: "https://placehold.co/600x800/f6e8e8/4a4a4a?text=Brain+Tonic" },
  { id: "h7", name: "Akschan Neem Purifying Wash", price: 21.00, category: "herbal", imageUrl: "https://placehold.co/600x800/e8e8f6/4a4a4a?text=Neem+Wash" },
  { id: "h8", name: "Akschan Triphala Digest", price: 19.50, category: "herbal", imageUrl: "https://placehold.co/600x800/f6f6e8/4a4a4a?text=Triphala" },
  { id: "h9", name: "Akschan Tulsi Immunity Drops", price: 25.00, category: "herbal", imageUrl: "https://placehold.co/600x800/e8f6f6/4a4a4a?text=Immunity+Drops" },
  { id: "h10", name: "Akschan Amla Vitamin C Pure", price: 22.00, category: "herbal", imageUrl: "https://placehold.co/600x800/f6e8f6/4a4a4a?text=Amla+Pure" },

  // FOOD (10)
  { id: "f1", name: "Organic Honey", price: 12.00, category: "food", imageUrl: "/images/food_honey.png" },
  { id: "f2", name: "Premium Saffron", price: 65.00, category: "food", imageUrl: "/images/food_saffron.png" },
  { id: "f3", name: "Himalayan Pink Salt", price: 14.50, category: "food", imageUrl: "https://placehold.co/600x800/fff3e0/4a4a4a?text=Pink+Salt" },
  { id: "f4", name: "Organic Chia Seeds", price: 10.00, category: "food", imageUrl: "https://placehold.co/600x800/e0f7fa/4a4a4a?text=Chia+Seeds" },
  { id: "f5", name: "Cold-Pressed Olive Oil", price: 24.00, category: "food", imageUrl: "https://placehold.co/600x800/f0f4c3/4a4a4a?text=Olive+Oil" },
  { id: "f6", name: "Roasted Almond Butter", price: 16.00, category: "food", imageUrl: "https://placehold.co/600x800/ffe0b2/4a4a4a?text=Almond+Butter" },
  { id: "f7", name: "Matcha Green Tea Powder", price: 28.00, category: "food", imageUrl: "https://placehold.co/600x800/c8e6c9/4a4a4a?text=Matcha+Powder" },
  { id: "f8", name: "Raw Cacao Nibs", price: 18.00, category: "food", imageUrl: "https://placehold.co/600x800/d7ccc8/4a4a4a?text=Cacao+Nibs" },
  { id: "f9", name: "Organic Quinoa", price: 11.50, category: "food", imageUrl: "https://placehold.co/600x800/fff9c4/4a4a4a?text=Quinoa" },
  { id: "f10", name: "Artisan Coffee Beans", price: 22.00, category: "food", imageUrl: "https://placehold.co/600x800/bcaaa4/4a4a4a?text=Coffee+Beans" },

  // TEXTILES (10)
  { id: "t1", name: "Handwoven Silk Saree", price: 120.00, category: "textiles", imageUrl: "/images/textiles_saree.png" },
  { id: "t2", name: "Cotton Block Print Scarf", price: 28.00, category: "textiles", imageUrl: "/images/textiles_scarf.png" },
  { id: "t3", name: "Cashmere Winter Shawl", price: 185.00, category: "textiles", imageUrl: "https://placehold.co/600x800/e1bee7/4a4a4a?text=Cashmere+Shawl" },
  { id: "t4", name: "Linen Summer Tunic", price: 65.00, category: "textiles", imageUrl: "https://placehold.co/600x800/c5cae9/4a4a4a?text=Linen+Tunic" },
  { id: "t5", name: "Embroidered Throw Pillow", price: 42.00, category: "textiles", imageUrl: "https://placehold.co/600x800/ffccbc/4a4a4a?text=Throw+Pillow" },
  { id: "t6", name: "Organic Cotton Towel Set", price: 55.00, category: "textiles", imageUrl: "https://placehold.co/600x800/b2dfdb/4a4a4a?text=Towel+Set" },
  { id: "t7", name: "Hand-Dyed Indigo Throw", price: 85.00, category: "textiles", imageUrl: "https://placehold.co/600x800/bbdefb/4a4a4a?text=Indigo+Throw" },
  { id: "t8", name: "Bamboo Bed Sheets", price: 140.00, category: "textiles", imageUrl: "https://placehold.co/600x800/dcedc8/4a4a4a?text=Bamboo+Sheets" },
  { id: "t9", name: "Woven Jute Rug", price: 110.00, category: "textiles", imageUrl: "https://placehold.co/600x800/cfd8dc/4a4a4a?text=Jute+Rug" },
  { id: "t10", name: "Velvet Evening Wrap", price: 95.00, category: "textiles", imageUrl: "https://placehold.co/600x800/f8bbd0/4a4a4a?text=Velvet+Wrap" },
]
