"use client"

import { useState } from "react"

interface CartItem {
  name: string
  price: number
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (name: string, price: number) => {
    setCart([...cart, { name, price }])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert("אנא הוסף פריטים לעגלה לפני השליחה.")
      return
    }

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const note = formData.get("note") as string

    const items = cart.map((item) => `${item.name} (₪${item.price})`).join("\n")
    const message = `הזמנה חדשה:\n\nשם: ${name}\nטלפון: ${phone}\nכתובת: ${address}\n${note ? `הערה: ${note}\n` : ""}\nפריטים:\n${items}\n\nסה"כ: ₪${total}`

    alert("ההזמנה נקלטה!\n\n" + message)

    setCart([])
    e.currentTarget.reset()
  }

  const menuItems = [
    { name: "טוסט קלאסיק", price: 26, description: "מוצרלה, צ׳דר, עגבנייה פרוסה, אורגנו, על חלה קלויה." },
    { name: "טוסט ים תיכוני", price: 32, description: "גבינת פטה, זיתים שחורים, פלפל קלוי, בזיליקום, על לחם דגנים." },
    { name: "טוסט בוקר", price: 29, description: "ביצת עין, מוצרלה, אבוקדו, סרירצ׳ה עדינה, על בריוש." },
    { name: "טוסט עשן", price: 34, description: "טופו מעושן, צ׳דר טבעונית, בצל מקורמל, רוטב ברביקיו, על כוסמין." },
    { name: "טוסט ירוקים", price: 30, description: "פסטו ביתי, מוצרלה, תרד טרי, קישוא צרוב, על חלה קלויה." },
    { name: "טוסט שוקו-קראנץ׳", price: 24, description: "שוקולד מריר, בננה מקורמלת, אגוזי לוז קלויים." },
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <div className="bg-glow" />
      
      <header className="site-header">
        <nav className="nav">
          <div className="logo">טוסטיקה</div>
          <div className="nav-links">
            <a href="#menu">תפריט</a>
            <a href="#about">אודות</a>
            <a href="#gallery">תמונות</a>
            <a href="#build">הרכבה</a>
            <a href="#order">הזמנה</a>
            <a href="#contact">יצירת קשר</a>
          </div>
          <a className="nav-cta" href="#order">הזמנה מהירה</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="tag">חם, פריך, מדויק</p>
            <h1>בית לטוסטים נדיבים עם נשמה עירונית</h1>
            <p className="subtitle">לחם טרי, גבינות שנמסות בדיוק, ותוספות שמרימות. הכל מוכן במקום ומוגש תוך דקות.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#menu">לגלות את התפריט</a>
              <a className="btn ghost" href="#build">לבנות טוסט אישי</a>
            </div>
            <div className="hero-highlights">
              <div className="highlight">
                <span className="highlight-number">12</span>
                <span>תוספות טריות ביום</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">5</span>
                <span>סוגי לחם פריכים</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">8</span>
                <span>דקות בממוצע למשלוח</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-label">הכי נמכר השבוע</p>
              <h2>{"טוסט \"מדורה\""}</h2>
              <p>צ׳דר מעושנת, מוצרלה, עגבניות קלויות, בצל סגול, צ׳ילי עדין, על לחם מחמצת.</p>
              <div className="card-price">₪38</div>
              <button className="order-btn" onClick={() => addToCart("טוסט מדורה", 38)}>הוספה להזמנה</button>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="section-head">
            <h2>טוסטים מובילים</h2>
            <p>מבחר טוסטים שמאזנים בין קלאסי לנועז. כל אחד נצלה במקום ומוגש עם רוטב הבית.</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.name} className="menu-card">
                <div className="menu-card-head">
                  <h3>{item.name}</h3>
                  <span className="price">₪{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="order-btn" onClick={() => addToCart(item.name, item.price)}>הוספה להזמנה</button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <h2>הסיפור שלנו</h2>
            <p>נולדנו מאהבה ללחם חם וריחות של גבינה שנמסה בדיוק בזמן. כל טוסט אצלנו מתחיל בבסיס איכותי ומסתיים בחיוך.</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>אנחנו צוות קטן עם לב גדול שמאמין בטוסט מושלם: פריכות מבחוץ, רכות מבפנים ותוספות שמדויקות לטעם שלכם.</p>
              <p>המטבח פתוח, הקצב מהיר, והכל נצלה במקום — כי טוסט טוב לא מחכה.</p>
              <div className="about-badges">
                <span>100% טרי כל יום</span>
                <span>ניצול מלא של חומרי גלם</span>
                <span>מתכונים מקוריים</span>
              </div>
            </div>
            <div className="about-image">
              <div className="image-card image-toast"></div>
              <div className="image-card image-chef"></div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="section-head">
            <h2>תמונות שמריחות טעים</h2>
            <p>רמזים קטנים למה שקורה בפנים: שכבות, גבינות, פריכות, וצילחות נקי.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item g1"></div>
            <div className="gallery-item g2"></div>
            <div className="gallery-item g3"></div>
            <div className="gallery-item g4"></div>
            <div className="gallery-item g5"></div>
          </div>
        </section>

        <section id="build" className="section build">
          <div className="section-head">
            <h2>בנה את הטוסט שלך</h2>
            <p>בחרו בסיס, גבינה ותוספות. אנחנו נקלען ונמיס בדיוק כמו שאתם אוהבים.</p>
          </div>
          <div className="build-grid">
            <div className="build-card">
              <h3>1. בסיס לחם</h3>
              <ul className="pill-list">
                <li>מחמצת קראסט</li>
                <li>בריוש חמאה</li>
                <li>דגנים מלאים</li>
                <li>כוסמין</li>
              </ul>
            </div>
            <div className="build-card">
              <h3>2. גבינות</h3>
              <ul className="pill-list">
                <li>מוצרלה</li>
                <li>צ׳דר</li>
                <li>גאודה מיושנת</li>
                <li>צ׳דר טבעונית</li>
              </ul>
            </div>
            <div className="build-card">
              <h3>3. תוספות</h3>
              <ul className="pill-list">
                <li>עגבניות קלויות</li>
                <li>פלפלים קלויים</li>
                <li>אבוקדו</li>
                <li>בצל מקורמל</li>
                <li>פסטו ביתי</li>
                <li>צ׳ילי עדין</li>
              </ul>
            </div>
          </div>
          <div className="build-banner">
            <p>מחיר בסיס: ₪22 + ₪3 לכל תוספת</p>
            <a className="btn primary" href="#order">יאללה, להזמין</a>
          </div>
        </section>

        <section id="order" className="section order">
          <div className="section-head">
            <h2>מערכת הזמנות</h2>
            <p>בחרו טוסטים, עקבו אחרי העגלה ושלחו לנו פרטים. אנחנו כבר נכנסים לתנור.</p>
          </div>
          <div className="order-grid">
            <div className="cart" id="cart">
              <div className="cart-head">
                <h3>העגלה שלך</h3>
                <span className="cart-badge">{cart.length}</span>
              </div>
              <ul className="cart-items">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <span>{item.name} - ₪{item.price}</span>
                    <button type="button" onClick={() => removeFromCart(index)}>הסר</button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">{"סה\"כ:"} ₪{total}</div>
              <p className="cart-note">משלוח חינם מעל ₪70</p>
            </div>

            <form onSubmit={handleSubmit} className="order-form">
              <label htmlFor="name">שם מלא</label>
              <input type="text" id="name" name="name" required placeholder="איך נקרא לך?" />

              <label htmlFor="phone">טלפון</label>
              <input type="tel" id="phone" name="phone" required placeholder="050-0000000" />

              <label htmlFor="address">כתובת</label>
              <input type="text" id="address" name="address" required placeholder="רחוב, מספר בית, עיר" />

              <label htmlFor="note">הערה להזמנה</label>
              <textarea id="note" name="note" rows={3} placeholder="למשל: בלי בצל, חריף בצד"></textarea>

              <button type="submit" className="btn primary">שליחת הזמנה</button>
              <p className="form-hint">מיד לאחר שליחה תקבלו הודעת אישור.</p>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <h2>בואו לבקר</h2>
          <p>רחוב הטוסט 12, תל אביב</p>
          <p>ראשון–חמישי: 10:00–22:30 | שישי: 10:00–16:00</p>
        </div>
        <div>
          <h2>דברו איתנו</h2>
          <p>טלפון: 03-5551234</p>
          <p>אימייל: hello@toastika.co.il</p>
        </div>
        <div className="footer-badge">נפתח כל יום עם ריח של טוסט.</div>
      </footer>
    </div>
  )
}
