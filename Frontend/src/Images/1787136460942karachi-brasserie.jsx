import React, { useState, useRef } from "react";

const menu = {
  Soups: [
    { n: "Chicken Broth", p: 620, d: "Chicken bones with sauté vegetables" },
    { n: "Mushroom Soup", p: 790, d: "Mushroom, onion, garlic" },
    { n: "Roasted Tomato Soup", p: 690, d: "Roast tomato, onion, garlic, basil" },
    { n: "Cream Of Chicken", p: 740, d: "Chicken, onion, garlic in creamy sauce" },
  ],
  Sandwiches: [
    { n: "Hummus Toast", p: 780, d: "Country bread, hummus, served with salad" },
    { n: "Grilled Chicken Sandwich", p: 1360, d: "Grilled chicken, cheese, focaccia, green lettuce" },
    { n: "Club Sandwich", p: 1590, d: "Grilled chicken, beef pepperoni, omelette" },
    { n: "Chicken Chimichurri Sandwich", p: 1390, d: "Grilled chicken, chimichurri, focaccia, cheese" },
    { n: "Steak Sandwich", p: 1550, d: "Beef steak, caramelised onion, french mustard sauce" },
  ],
  Starters: [
    { n: "Hummus", p: 690, d: "Served with crackers, carrots and cucumber" },
    { n: "Buffalo Wings", p: 1090, d: "Crispy chicken wings tossed in buffalo sauce" },
    { n: "Thai Chicken Skewers", p: 920, d: "Chicken skewers in thai garlic sauce" },
    { n: "Popcorn Chicken", p: 890, d: "Crispy chicken cubes in chilli garlic sauce" },
    { n: "Chilli Prawns", p: 1320, d: "Crispy prawns tossed in garlic, red chilli, butter" },
    { n: "Loaded Cheese Fries", p: 1250, d: "Fries loaded with chicken, cheese, olives, jalapeno, salsa, sour cream" },
    { n: "Chipotle Chicken Tacos", p: 1200, d: "Pair of chicken tacos with lettuce and salsa" },
    { n: "Prawn Tempura", p: 1350, d: "Battered fried prawns served with sweet chilli" },
    { n: "French Fries", p: 580, d: "250gm" },
  ],
  Burgers: [
    { n: "Classic Cheese Burger", p: 1390, d: "Ground beef, lettuce, onion, tomato, cheddar" },
    { n: "Jalapeno Burger", p: 1420, d: "Ground beef, lettuce, onion, tomato, jalapeno sauce" },
    { n: "Swiss Mushroom Burger", p: 1400, d: "Ground beef, mushroom, lettuce, onion, tomato" },
    { n: "Grilled Chicken Burger", p: 1350, d: "Grilled chicken, honey mustard, green chilli, lettuce" },
    { n: "Crispy Chicken Burger", p: 1320, d: "Crispy chicken fillet, lettuce, sriracha mayo, jalapeno" },
    { n: "Trio Of Sliders", p: 1400, d: "Beef sliders — classic, jalapeno, mushroom" },
  ],
  Pizza: [
    { n: "Margarita", p: 1300, d: "Marinara, mozzarella, parmesan, basil" },
    { n: "Pepperoni", p: 1480, d: "Marinara, beef pepperoni, basil" },
    { n: "Chicken Jalapeno", p: 1440, d: "Marinara, chicken, jalapenos, olives, onion, mushrooms" },
    { n: "Chicken Fajita", p: 1540, d: "Fajita sauce, chicken, olives, sweet corn, jalapeno, tomato, onion" },
    { n: "Brasserie Special", p: 1560, d: "Marinara, mozzarella, chicken, beef, bell peppers" },
  ],
  Salads: [
    { n: "Caesar Salad", p: 1120, d: "Crispy salad, grilled chicken, egg, croutons, parmesan" },
    { n: "Quinoa Salad", p: 1160, d: "Quinoa, green leaves, feta, roasted almond, raspberry dressing" },
    { n: "Mediterranean Salad", p: 1040, d: "Crispy salad, grilled chicken, feta, olive, peanuts, vinaigrette" },
  ],
  Chicken: [
    { n: "Moroccan Chicken", p: 1550, d: "Grilled chicken fillet, sambal sauce, brown rice, saute vegetables" },
    { n: "Tarragon Chicken", p: 1440, d: "Grilled chicken fillet, tarragon sauce, mashed potato, saute vegetables" },
    { n: "Jalapeno Chicken", p: 1460, d: "Grilled chicken fillet, jalapeno cream sauce, mashed potato" },
    { n: "Parmesan Crusted Chicken", p: 1560, d: "Parmesan crusted fillet, mashed potatoes, cheese sauce" },
  ],
  Pasta: [
    { n: "Spaghetti Bolognese", p: 1580, d: "Ground beef, tomato sauce, coriander, basil, parmesan" },
    { n: "Fettucine Alfredo", p: 1400, d: "Creamy alfredo sauce, grilled chicken, parmesan" },
    { n: "Penne Arrabbiata", p: 1400, d: "Grilled chicken, creamy red sauce, mushroom, olives" },
    { n: "Spaghetti With Chilli & Lime", p: 1490, d: "Prawn, cherry tomato, garlic, chilli, lime" },
    { n: "Beef Lasagna", p: 1460, d: "Ground beef, tomato sauce, white sauce, mozzarella, parmesan" },
  ],
  Steak: [
    { n: "Pepper Steak", p: 2440, d: "Beef steak, creamy black pepper sauce, mashed potatoes" },
    { n: "Mushroom Steak", p: 2520, d: "Beef steak, creamy mushroom sauce, roast potatoes" },
    { n: "Chimichurri Steak", p: 2480, d: "Beef steak, chimichurri sauce, creamy spinach, roasted garlic" },
    { n: "Tuscan Steak", p: 2550, d: "Beef steak, herbs, sundried tomato, basil parmesan" },
  ],
  Seafood: [
    { n: "Fish N Chips", p: 1490, d: "Batter-fried red snapper, tartar sauce, french fries" },
    { n: "Red Snapper In Garlic Butter", p: 1820, d: "Garlic butter sauce, mashed potatoes, saute vegetables" },
    { n: "Red Snapper With Thai Red Chilli", p: 1890, d: "Cherry tomato, garlic, thai chilli" },
  ],
  "Stir Fry": [
    { n: "Classic Kung Pao", p: 1250, d: "Chicken, kung pao sauce, peanuts, spring onion, dried red chilli" },
    { n: "Thai Holy Basil", p: 1300, d: "Stir fry chicken, red chilli, basil, rice" },
    { n: "Beef Chilli Dry", p: 1360, d: "Beef, green and red chilli, ginger, oyster sesame sauce" },
    { n: "Crispy Beef", p: 1400, d: "Dark soy sauce, chilli flakes, rice" },
  ],
  Sides: [
    { n: "Mashed Potatoes", p: 220 }, { n: "Sauteed Vegetables", p: 220 },
    { n: "Creamy Spinach", p: 250 }, { n: "French Fries", p: 250 },
    { n: "Garlic Bread", p: 220 }, { n: "Extra Sauce", p: 200 }, { n: "Extra Rice", p: 200 },
  ],
  "Hot Beverages": [
    { n: "Espresso", p: 390 }, { n: "Double Espresso", p: 460 }, { n: "Americano", p: 540 },
    { n: "Cafe Latte", p: 620, d: "Vanilla, hazelnut, caramel or irish" },
    { n: "Flat White", p: 620 },
    { n: "Cappuccino", p: 680, d: "Vanilla, hazelnut, caramel or irish" },
    { n: "Cafe Mocha", p: 680 }, { n: "Caramel Macchiato", p: 700 }, { n: "Hot Chocolate", p: 700 },
  ],
  "Gelato Milkshakes": [
    { n: "Vanilla", p: 700 }, { n: "Chocolate", p: 700 }, { n: "Strawberry", p: 700 },
    { n: "Oreo Crumble", p: 760 }, { n: "Salted Caramel", p: 760 }, { n: "Peanut Butter", p: 760 },
  ],
  "Cold Coffee": [
    { n: "Affogato", p: 780 }, { n: "Frappe", p: 760, d: "Caramel, vanilla, coffee or mocha" },
    { n: "Iced Americano", p: 630 }, { n: "Iced Latte", p: 720, d: "Vanilla, hazelnut, caramel or irish" },
    { n: "Iced Caramel Macchiato", p: 760 }, { n: "Iced Chocolate", p: 790 },
  ],
  Smoothies: [
    { n: "Strawberry", p: 740 }, { n: "Blueberry", p: 740 }, { n: "All Berries", p: 740 },
  ],
  "Soft Drinks": [
    { n: "Pepsi / Diet Pepsi", p: 220 }, { n: "7up / Diet 7up", p: 220 }, { n: "Mirinda", p: 220 },
    { n: "Fresh Lime", p: 340 }, { n: "Bottled Water", p: 190, d: "Small / large" }, { n: "Sparkling Water", p: 380 },
  ],
  Mocktails: [
    { n: "Mint Lemonade", p: 580 }, { n: "Electric Blue", p: 600 }, { n: "Lemon Iced Tea", p: 600 },
    { n: "Peach Iced Tea", p: 600 }, { n: "Pina Colada", p: 660 }, { n: "Apple Mint Cooler", p: 640 },
    { n: "Seasonal Juice", p: 680 },
  ],
  Dessert: [
    { n: "Strawberry Cheesecake", p: 890 }, { n: "Dark Chocolate Tart", p: 860 }, { n: "Creme Brulee", p: 550 },
    { n: "Brownie With Ice Cream", p: 880 }, { n: "Bread Pudding", p: 590 }, { n: "Gelato", p: 400 },
  ],
  "Chef Special": [
    { n: "Crab Soup" }, { n: "Crab Gratin" }, { n: "Fried Clamari" }, { n: "3 Cheese Lobster" },
  ],
};

const categories = Object.keys(menu);

const reviews = [
  { name: "Hamid Raza", meta: "Dine in · Lunch · Rs 3,000–4,000", note: "A flawless visit — attentive service throughout, with special praise for the host Jessica." },
  { name: "David Kazan", meta: "Dine in · Dinner · Rs 5,000–6,000", note: "Calls it one of Karachi's best dining rooms, with a thoughtfully curated intercontinental menu." },
  { name: "Faizan khan", meta: "Rs 2,500–3,000", note: "Loved the steaks and bread pudding, describing the room as more British brasserie than French." },
  { name: "Maham Rizwan", meta: "Dine in · Dinner", note: "Rates the ambiance and food near-perfect, recommending the Moroccan and tarragon steak." },
  { name: "Salman Anwar Notta", meta: "Dine in · Lunch · Rs 1,500–2,000", note: "Singles out the chicken chimichurri sandwich on fresh focaccia as excellent value." },
  { name: "Kashif Aziz", meta: "2 months ago", note: "Good food and service, though prices run a little high and it can get noisy with large groups." },
];

const gallery = ["Menu", "Food & drink", "Vibe", "Pizza", "Iced coffee", "Cappuccino", "Chicken sandwich", "Hot Chocolate", "Chocolate brownie", "By owner"];

const days = [
  { d: "Mon", v: 40 }, { d: "Tue", v: 45 }, { d: "Wed", v: 55 },
  { d: "Thu", v: 65 }, { d: "Fri", v: 90 }, { d: "Sat", v: 100 }, { d: "Sun", v: 78 },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setStyle({ transform: `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)` });
  };
  const onLeave = () => setStyle({ transform: "perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0px)" });
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ ...style, transition: "transform 0.15s ease-out" }}>
      {children}
    </div>
  );
}

export default function KarachiBrasserie() {
  const [today] = useState(() => new Date().toLocaleDateString("en-US", { weekday: "short" }));
  const [activeCat, setActiveCat] = useState("Steak");

  const gold = "#C9A227";
  const cream = "#EFE7D8";
  const muted = "#8a8378";

  return (
    <div style={{ background: "#1B1714", color: cream, fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        .voice { font-family: 'Cormorant Garamond', serif; }
        @keyframes spin3d { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        .medallion { animation: spin3d 14s linear infinite; transform-style: preserve-3d; }
        .rule { height: 1px; background: linear-gradient(90deg, transparent, #C9A22766, transparent); }
        a.brass-btn { transition: all .2s ease; }
        a.brass-btn:hover { background: #C9A227; color: #1B1714; }
        .cat-btn { transition: all .2s ease; cursor: pointer; background: none; border: none; }
        .cat-btn:hover { color: #C9A227 !important; }
        .gallery-tile { transition: transform .2s ease, border-color .2s ease; }
        .gallery-tile:hover { transform: translateY(-4px); border-color: #C9A227 !important; }
      `}</style>

      {/* NAV */}
      <div style={{ borderBottom: "1px solid #C9A22733" }} className="px-6 md:px-16 py-5 flex items-center justify-between">
        <span className="voice" style={{ fontSize: 24, letterSpacing: 1, color: gold }}>Karachi Brasserie</span>
        <span style={{ fontSize: 12, letterSpacing: 3, color: muted, textTransform: "uppercase" }}>Saddar · Hotel Excelsior</span>
      </div>

      {/* HERO */}
      <div className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-4">4.5 rated · 297 reviews</p>
          <h1 className="voice" style={{ fontSize: "clamp(40px,6vw,68px)", lineHeight: 1.05 }}>
            An evening,<br /><span style={{ color: gold, fontStyle: "italic" }}>plated properly.</span>
          </h1>
          <p style={{ color: muted, fontSize: 17, maxWidth: 420 }} className="mt-6">
            Steak, sandwiches and slow tiramisu — opposite Atrium Mall, inside Hotel Excelsior. Open till midnight, every night.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="tel:03308880773" className="brass-btn" style={{ border: `1px solid ${gold}`, color: gold, padding: "12px 26px", fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Call to reserve</a>
            <a href="https://maps.google.com/?q=Karachi+Brasserie+Hotel+Excelsior+Saddar" target="_blank" rel="noreferrer" style={{ color: muted, padding: "12px 6px", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", borderBottom: `1px solid ${muted}44` }}>Get directions</a>
          </div>
        </div>
        <div className="flex justify-center" style={{ perspective: 900 }}>
          <div className="medallion" style={{ width: 220, height: 220, borderRadius: "50%", border: `2px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at 35% 30%, #2a231d, #1B1714)" }}>
            <div style={{ width: 176, height: 176, borderRadius: "50%", border: `1px solid ${gold}88`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="voice" style={{ fontSize: 46, color: gold }}>KB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rule mx-6 md:mx-16" />

      {/* FEATURES */}
      <div className="px-6 md:px-16 py-10 flex flex-wrap gap-x-10 gap-y-3">
        {["Happy-hour food", "Private dining room", "Vegan options", "Open until 12 am"].map((f) => (
          <span key={f} style={{ fontSize: 13, letterSpacing: 1, color: muted }}><span style={{ color: gold }}>+</span> {f}</span>
        ))}
      </div>

      <div className="rule mx-6 md:mx-16" />

      {/* SIGNATURE DISHES */}
      <div className="px-6 md:px-16 py-16">
        <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-2">On the board</p>
        <h2 className="voice mb-10" style={{ fontSize: 36 }}>What people order twice</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { name: "Dry-Aged Steak", tag: "Signature", note: "Char-seared, brasserie butter, board presentation." },
            { name: "Grilled Chicken Sandwich", tag: "Guest favorite", note: "Smoked, pressed, served with fries." },
            { name: "Classic Tiramisu", tag: "Sweet finish", note: "Espresso-soaked, mascarpone, cocoa dust." },
            { name: "House Hummus", tag: "Vegan", note: "Warm pita, olive oil, sumac." },
          ].map((dish) => (
            <TiltCard key={dish.name}>
              <div style={{ border: `1px solid ${gold}44`, background: "#211B16", padding: "28px 26px" }}>
                <p style={{ fontSize: 11, letterSpacing: 2, color: gold, textTransform: "uppercase" }}>{dish.tag}</p>
                <p className="voice" style={{ fontSize: 26, margin: "8px 0" }}>{dish.name}</p>
                <p style={{ fontSize: 14, color: muted }}>{dish.note}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <div className="rule mx-6 md:mx-16" />

      {/* FULL MENU */}
      <div className="px-6 md:px-16 py-16">
        <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-2">Full menu</p>
        <h2 className="voice mb-8" style={{ fontSize: 36 }}>Everything on offer</h2>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10" style={{ borderBottom: "1px solid #C9A22733", paddingBottom: 16 }}>
          {categories.map((c) => (
            <button
              key={c}
              className="cat-btn"
              onClick={() => setActiveCat(c)}
              style={{
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: activeCat === c ? gold : muted,
                borderBottom: activeCat === c ? `1px solid ${gold}` : "1px solid transparent",
                paddingBottom: 4,
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {menu[activeCat].map((item) => (
            <div key={item.n} className="flex justify-between items-baseline gap-4" style={{ borderBottom: "1px solid #C9A22722", paddingBottom: 14 }}>
              <div>
                <p className="voice" style={{ fontSize: 20 }}>{item.n}</p>
                {item.d && <p style={{ fontSize: 13, color: muted, marginTop: 2 }}>{item.d}</p>}
              </div>
              {item.p && <span style={{ fontSize: 15, color: gold, whiteSpace: "nowrap" }}>Rs {item.p.toLocaleString()}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="rule mx-6 md:mx-16" />

      {/* REVIEWS */}
      <div className="px-6 md:px-16 py-16">
        <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-2">Guest reviews</p>
        <h2 className="voice mb-10" style={{ fontSize: 36 }}>4.5 stars, 297 diners</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} style={{ border: "1px solid #C9A22733", padding: "22px 24px" }}>
              <p className="voice" style={{ fontSize: 20, color: cream }}>{r.name}</p>
              <p style={{ fontSize: 12, color: gold, letterSpacing: 1, margin: "4px 0 12px" }}>{r.meta}</p>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.6 }}>{r.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule mx-6 md:mx-16" />

      {/* GALLERY */}
      <div className="px-6 md:px-16 py-16">
        <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-2">Gallery</p>
        <h2 className="voice mb-2" style={{ fontSize: 36 }}>A look inside</h2>
        <p style={{ fontSize: 13, color: muted }} className="mb-10">Photo categories from the listing — send the actual images and they'll drop straight in here.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {gallery.map((g) => (
            <div key={g} className="gallery-tile" style={{ border: "1px solid #C9A22733", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: 12, textAlign: "center" }}>
              <span style={{ fontSize: 13, color: muted, letterSpacing: 0.5 }}>{g}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rule mx-6 md:mx-16" />

      {/* POPULAR TIMES + VISIT */}
      <div className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-6">Busier than usual, right now</p>
          <div className="flex items-end gap-3" style={{ height: 140 }}>
            {days.map((day) => (
              <div key={day.d} className="flex flex-col items-center justify-end" style={{ flex: 1, height: "100%" }}>
                <div style={{ width: "100%", height: `${day.v}%`, background: day.d === today ? gold : `${gold}33` }} />
                <span style={{ fontSize: 10, color: muted, marginTop: 8 }}>{day.d}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, letterSpacing: 4, color: gold, textTransform: "uppercase" }} className="mb-6">Visit</p>
          <p style={{ fontSize: 15, color: cream, lineHeight: 1.9 }}>Hotel Excelsior, opposite Atrium Mall<br />Saddar, Karachi</p>
          <p style={{ fontSize: 15, color: cream, marginTop: 12 }}>0330 8880773</p>
          <p style={{ fontSize: 15, color: muted, marginTop: 4 }}>Rs 1,000 – 4,000 per person · Open · closes 12 am</p>
        </div>
      </div>

      <div className="rule mx-6 md:mx-16" />

      <div className="px-6 md:px-16 py-8 flex items-center justify-between">
        <span style={{ fontSize: 12, color: muted }}>Karachi Brasserie</span>
        <span style={{ fontSize: 12, color: muted }}>4.5 ★ · 297 reviews</span>
      </div>
    </div>
  );
}
