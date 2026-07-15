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
  { id: "b5", name: "Rosewater Facial Toner", price: 22.00, category: "beauty", imageUrl: "/images/beauty_toner.png" },
  { id: "b6", name: "Overnight Repair Night Cream", price: 55.00, category: "beauty", imageUrl: "/images/beauty_night_cream.png" },
  { id: "b7", name: "Gentle Foaming Cleanser", price: 26.00, category: "beauty", imageUrl: "/images/beauty_cleanser.png" },
  { id: "b8", name: "Exfoliating Walnut Scrub", price: 30.00, category: "beauty", imageUrl: "/images/beauty_scrub.png" },
  { id: "b9", name: "Hyaluronic Acid Gel", price: 42.00, category: "beauty", imageUrl: "/images/beauty_hyaluronic.png" },
  { id: "b10", name: "Revitalizing Eye Cream", price: 36.00, category: "beauty", imageUrl: "/images/beauty_eye_cream.png" },

  // HERBAL (10) - Akschan Group Inspired
  { id: "h1", name: "Akschan Ashwagandha Extract", price: 24.00, category: "herbal", imageUrl: "/images/herbal_ashwagandha.png" },
  { id: "h2", name: "Akschan Turmeric Curcumin", price: 18.00, category: "herbal", imageUrl: "/images/herbal_turmeric.png" },
  { id: "h3", name: "Akschan Natural Haircare Oil", price: 35.00, category: "herbal", imageUrl: "/images/herbal_haircare_oil.png" },
  { id: "h4", name: "Akschan Herbal Skincare Cream", price: 29.00, category: "herbal", imageUrl: "/images/herbal_skincare_cream.png" },
  { id: "h5", name: "Akschan Scalp Nourishment Serum", price: 32.00, category: "herbal", imageUrl: "/images/herbal_scalp_serum.png" },
  { id: "h6", name: "Akschan Brahmi Brain Tonic", price: 26.00, category: "herbal", imageUrl: "/images/herbal_brain_tonic.png" },
  { id: "h7", name: "Akschan Neem Purifying Wash", price: 21.00, category: "herbal", imageUrl: "/images/herbal_neem_wash.png" },
  { id: "h8", name: "Akschan Triphala Digest", price: 19.50, category: "herbal", imageUrl: "/images/herbal_triphala.png" },
  { id: "h9", name: "Akschan Tulsi Immunity Drops", price: 25.00, category: "herbal", imageUrl: "/images/herbal_immunity_drops.png" },
  { id: "h10", name: "Akschan Amla Vitamin C Pure", price: 22.00, category: "herbal", imageUrl: "/images/herbal_amla_pure.png" },

  // FOOD (10)
  { id: "f1", name: "Organic Honey", price: 12.00, category: "food", imageUrl: "/images/food_honey.png" },
  { id: "f2", name: "Premium Saffron", price: 65.00, category: "food", imageUrl: "/images/food_saffron.png" },
  { id: "f3", name: "Himalayan Pink Salt", price: 14.50, category: "food", imageUrl: "/images/food_pink_salt.png" },
  { id: "f4", name: "Organic Chia Seeds", price: 10.00, category: "food", imageUrl: "/images/food_chia_seeds.png" },
  { id: "f5", name: "Cold-Pressed Olive Oil", price: 24.00, category: "food", imageUrl: "/images/food_olive_oil.png" },
  { id: "f6", name: "Roasted Almond Butter", price: 16.00, category: "food", imageUrl: "/images/food_almond_butter.png" },
  { id: "f7", name: "Matcha Green Tea Powder", price: 28.00, category: "food", imageUrl: "/images/food_matcha_powder.png" },
  { id: "f8", name: "Raw Cacao Nibs", price: 18.00, category: "food", imageUrl: "/images/food_cacao_nibs.png" },
  { id: "f9", name: "Organic Quinoa", price: 11.50, category: "food", imageUrl: "/images/food_quinoa.png" },
  { id: "f10", name: "Artisan Coffee Beans", price: 22.00, category: "food", imageUrl: "/images/food_coffee_beans.png" },

  // TEXTILES (10)
  { id: "t1", name: "Handwoven Silk Saree", price: 120.00, category: "textiles", imageUrl: "/images/textiles_saree.png" },
  { id: "t2", name: "Cotton Block Print Scarf", price: 28.00, category: "textiles", imageUrl: "/images/textiles_scarf.png" },
  { id: "t3", name: "Cashmere Winter Shawl", price: 185.00, category: "textiles", imageUrl: "/images/textiles_cashmere_shawl.png" },
  { id: "t4", name: "Linen Summer Tunic", price: 65.00, category: "textiles", imageUrl: "/images/textiles_linen_tunic.png" },
  { id: "t5", name: "Embroidered Throw Pillow", price: 42.00, category: "textiles", imageUrl: "/images/textiles_throw_pillow.png" },
  { id: "t6", name: "Organic Cotton Towel Set", price: 55.00, category: "textiles", imageUrl: "/images/textiles_towel_set.png" },
  { id: "t7", name: "Hand-Dyed Indigo Throw", price: 85.00, category: "textiles", imageUrl: "/images/textiles_indigo_throw.png" },
  { id: "t8", name: "Bamboo Bed Sheets", price: 140.00, category: "textiles", imageUrl: "/images/textiles_bamboo_sheets.png" },
  { id: "t9", name: "Woven Jute Rug", price: 110.00, category: "textiles", imageUrl: "/images/textiles_jute_rug.png" },
  { id: "t10", name: "Velvet Evening Wrap", price: 95.00, category: "textiles", imageUrl: "/images/textiles_velvet_wrap.png" },
]
