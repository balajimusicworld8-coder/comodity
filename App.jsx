import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* Contact info (you asked to include these) */
const CONTACT_MOBILE = "9820399529";
const CONTACT_EMAIL = "mahadevfabriccare@gmail.com";
const YOUTUBE_LINK = "https://youtu.be/qaJcGdw4wcM?si=6Fd5QVrpT0X8eOwH";

/* Services list and details */
const servicesData = [
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    short: "Deep professional sofa steam & dry cleaning",
    details:
      "We remove dust, stains, odour and allergens using professional steam extraction, safe solvents and fiber-friendly processes. Typical slot: 60–120 mins depending on sofa size. Includes pre-treatment, high-pressure extraction and post-finish.",
    priceGuide: "Starting ₹499 / seat"
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    short: "Hot-water extraction, stain removal & deodorising",
    details:
      "Full carpet deep-clean using hot-water extraction (steam) that flushes dirt and allergens. Spot-treatment for stubborn stains, grooming and quick-dry techniques available.",
    priceGuide: "Starting ₹29 / sq.ft"
  },
  {
    id: "steam-curtain-cleaning",
    title: "Steam Curtain Cleaning",
    short: "On-site steam cleaning that refreshes heavy curtains",
    details:
      "Safe steam cleaning to remove dust, smoke residues and odour. Quick on-site service with gentle fabric-safe temperatures. Drying guidance provided to avoid shrinkage.",
    priceGuide: "Starting ₹199 / piece"
  },
  {
    id: "curtain-cleaning",
    title: "Curtain Cleaning",
    short: "In-house or on-site curtain washing & finishing",
    details:
      "For delicate fabrics or heavy curtains we offer pick-up and laundry-style cleaning with careful finishing and pressing. Includes re-hanging guidance.",
    priceGuide: "Custom pricing"
  },
  {
    id: "nano-coating",
    title: "Nano Coating",
    short: "Protective hydrophobic coating for fabrics",
    details:
      "Long-lasting nano coating that repels water and common stains while preserving breathability. Great for sofas and outdoor cushions. Reapplication recommended every 12–18 months depending on use.",
    priceGuide: "Quote-based"
  },
  {
    id: "glass-coating",
    title: "Glass Coating",
    short: "Anti-smudge and easy-clean glass coating",
    details:
      "Specialized coating for glass surfaces that reduces smudge marks and makes cleaning easier. Ideal for large glass doors, windows and mirrors.",
    priceGuide: "Quote-based"
  }
];

/* Layout wrapper with nav + footer */
function Layout({ children }) {
  return (
    <div>
      <nav>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 900 }}>Mahadev Fabric Care</div>
            <div style={{ fontSize: 12 }} className="muted">Premium cleaning across Mumbai</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">My Account</Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          <div>
            <div style={{ fontWeight: 800 }}>Mahadev Fabric Care</div>
            <div>Mobile: {CONTACT_MOBILE}</div>
            <div>Email: {CONTACT_EMAIL}</div>
          </div>

          <div>
            <div style={{ fontWeight: 700 }}>Quick links</div>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <Link to="/services">Services</Link>
              <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Home page */
function Home() {
  return (
    <Layout>
      <motion.div initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h1 className="large">Welcome to Mahadev Fabric Care</h1>
        <p>Trusted professionals for sofas, carpets, curtains and protective coatings — premium results at honest rates.</p>

        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <Link to="/services" className="btn btn-yellow">Book a Service</Link>
          <Link to="/contact" className="btn btn-yellow">Get a Quote</Link>
          <a href={`https://wa.me/${CONTACT_MOBILE}`} className="btn btn-green">WhatsApp Us</a>
        </div>

        <section style={{ marginTop: 22 }}>
          <h3 style={{ marginBottom: 10 }}>Featured Services</h3>
          <div className="grid grid-3">
            {servicesData.slice(0, 3).map((s, i) => (
              <motion.div key={s.id} whileHover={{ scale: 1.02 }} className="card">
                <div style={{ fontWeight: 800 }}>{i + 1}. {s.title}</div>
                <div className="muted">{s.short}</div>
                <div style={{ marginTop: 8 }}><Link to={`/services/${s.id}`}>See details</Link></div>
              </motion.div>
            ))}
          </div>
        </section>

        <GalleryPreview />
      </motion.div>
    </Layout>
  );
}

/* About page */
function About() {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>About Mahadev Fabric Care</h2>
        <p>
          Mahadev Fabric Care is a locally owned Mumbai company dedicated to delivering premium fabric-care solutions — from deep upholstery cleaning to advanced nano-coatings. Our team uses professional-grade equipment and fabric-safe products to extend the life of your furnishings. We prioritise safety, transparency and customer satisfaction.
        </p>
        <p><a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">Watch our YouTube demo</a></p>
      </motion.div>
    </Layout>
  );
}

/* Services listing */
function Services() {
  return (
    <Layout>
      <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h2>Our Services</h2>
        <div className="grid grid-2">
          {servicesData.map((s, idx) => (
            <Link key={s.id} to={`/services/${s.id}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ fontWeight: 800 }}>{idx + 1}. {s.title}</div>
              <div className="muted">{s.short}</div>
              <div style={{ marginTop: 8, fontSize: 13 }}>{s.priceGuide}</div>
            </Link>
          ))}
        </div>

        <FAQ />
      </motion.div>
    </Layout>
  );
}

/* Service details */
function ServiceDetails() {
  const { id } = useParams();
  const s = servicesData.find((x) => x.id === id) || servicesData[0];

  return (
    <Layout>
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <h2>{s.title}</h2>
        <p>{s.details}</p>
        <div><strong>Price Guide:</strong> {s.priceGuide}</div>
        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <Link to="/contact" className="btn btn-yellow">Get a Quote</Link>
          <a
            href={`https://wa.me/${CONTACT_MOBILE}?text=Hi%20Mahadev%20Fabric%20Care,%20I'm%20interested%20in%20${encodeURIComponent(
              s.title
            )}`}
            className="btn btn-green"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </Layout>
  );
}

/* Reviews */
function Reviews() {
  return (
    <Layout>
      <h2>Customer Reviews</h2>
      <div className="grid grid-2">
        <blockquote className="card">"Great job on my sofa — looks like new!" — Ramesh</blockquote>
        <blockquote className="card">"Prompt and professional." — Priya</blockquote>
      </div>
    </Layout>
  );
}

/* Contact */
function Contact() {
  return (
    <Layout>
      <h2>Contact</h2>
      <div>Mobile: {CONTACT_MOBILE}</div>
      <div>Email: {CONTACT_EMAIL}</div>
      <p style={{ marginTop: 10 }}>
        Quick: <a className="btn btn-green" href={`https://wa.me/${CONTACT_MOBILE}`} style={{ textDecoration: "none" }}>Send Message on WhatsApp</a>
      </p>
    </Layout>
  );
}

/* Signup & Login (localStorage mock) */
function SignupLogin() {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("mfc_users") || "[]");
    if (users.find((u) => u.email === email)) return alert("User already exists. Please login.");
    const newUser = { id: Date.now(), name, email, mobile, password, orders: [], pendingAmount: 0 };
    users.push(newUser);
    localStorage.setItem("mfc_users", JSON.stringify(users));
    localStorage.setItem("mfc_current", JSON.stringify(newUser));
    navigate("/account");
  }

  function handleLogin(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("mfc_users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return alert("Invalid credentials");
    localStorage.setItem("mfc_current", JSON.stringify(user));
    navigate("/account");
  }

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }} className="card">
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setMode("login")} className="btn" style={{ background: mode === "login" ? "#FFD54A" : "transparent" }}>Login</button>
        <button onClick={() => setMode("signup")} className="btn" style={{ background: mode === "signup" ? "#FFD54A" : "transparent" }}>Signup</button>
      </div>

      {mode === "signup" ? (
        <form onSubmit={handleSignup}>
          <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 8 }} />
          <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 8 }} />
          <input required placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 8 }} />
          <input required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 8 }} />
          <button className="btn btn-yellow" style={{ width: "100%" }}>Create account</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 8 }} />
          <input required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 8, borderRadius: 8 }} />
          <button className="btn btn-yellow" style={{ width: "100%" }}>Login</button>
        </form>
      )}
    </div>
  );
}

/* Account page (shows pending amount, orders) */
function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("mfc_current") || "null"));

  function logout() {
    localStorage.removeItem("mfc_current");
    setUser(null);
    navigate("/");
  }

  if (!user) {
    return (
      <Layout>
        <h2>My Account</h2>
        <p>Please login or create an account to view your orders and pending amounts.</p>
        <SignupLogin />
      </Layout>
    );
  }

  return (
    <Layout>
      <h2>Welcome, {user.name}</h2>
      <div style={{ marginBottom: 10 }}><strong>Pending Amount:</strong> ₹{user.pendingAmount}</div>
      <div>
        <strong>Orders / Services:</strong>
        {user.orders && user.orders.length ? (
          <ul style={{ marginTop: 8 }}>
            {user.orders.map((o) => (
              <li key={o.id}>{o.service} — {o.status}</li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: 8 }}>You have no orders yet. Book a service from the Services page.</p>
        )}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={logout} className="btn btn-yellow">Logout</button>
        <a className="btn btn-green" href={`https://wa.me/${CONTACT_MOBILE}`}>Contact Support</a>
      </div>
    </Layout>
  );
}

/* Gallery preview */
function GalleryPreview() {
  return (
    <section style={{ marginTop: 20 }}>
      <h3>Gallery</h3>
      <div className="grid grid-3">
        {[1,2,3,4].map((i) => (
          <div key={i} className="card" style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>Image {i}</div>
        ))}
      </div>
    </section>
  );
}

/* FAQ */
function FAQ() {
  const faqs = [
    { q: "How long does cleaning take?", a: "Depends on service — usually 1–3 hours on-site." },
    { q: "Do you use safe chemicals?", a: "Yes — we use fabric-safe and non-toxic solutions whenever possible." },
    { q: "Do you offer pick-up?", a: "Yes — for certain curtain and upholstery items (service dependent)." }
  ];

  return (
    <section style={{ marginTop: 20 }}>
      <h4>FAQ</h4>
      <div>
        {faqs.map((f, idx) => (
          <details key={idx} className="card" style={{ marginTop: 8 }}>
            <summary style={{ cursor: "pointer", fontWeight: 700 }}>{f.q}</summary>
            <p style={{ marginTop: 8 }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* App router */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:id" element={<ServiceDetails/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </Router>
  );
}

