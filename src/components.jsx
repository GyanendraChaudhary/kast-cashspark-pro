import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  CreditCard,
  Gift,
  Globe2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

import {
  aboutKast,
  ASSETS,
  paymentSteps,
  rewardFeatures,
  scriptLines,
  spendItems,
  stats,
} from "./data";

export function Navbar() {
  return (
    <nav className="navbar glass-card">
      <div className="brand">
        <img src={ASSETS.logo} alt="KAST logo" className="brand-logo" />
        <div>
          <strong>KAST CashSpark</strong>
          <span>Cashback Campaign UI</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#spend">Spend</a>
        <a href="#flow">Payment Flow</a>
        <a href="#rewards">Rewards</a>
        <a href="#brand">Brand</a>
        <a href="#script" className="nav-btn">
          Script <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={16} />
          New KAST Cashback Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          Spend with KAST.
          <span>Earn rewards in style.</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
        >
          A premium colorful KAST Cashback project showing how users can pay for
          burgers, cafe coffee, cold drinks, groceries, subscriptions, travel,
          and more — with beautiful reward popups.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
        >
          <a href="#flow" className="primary-btn">
            How Payment Works <CreditCard size={18} />
          </a>
          <a href="#rewards" className="secondary-btn">
            View Rewards <TrendingUp size={18} />
          </a>
        </motion.div>

        <div className="stats-grid">
          {stats.map((item) => (
            <div className="glass-card stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="floating-pill pill-top">
          <Zap size={15} />
          Cashback Live
        </div>

        <div className="hero-card-frame glass-card">
          <img src={ASSETS.card} alt="KAST card" className="hero-card-img" />
        </div>

        <div className="floating-pill pill-bottom">
          <CheckCircle2 size={15} />
          Spend Accepted
        </div>

        <div className="cashback-popup glass-card">
          <div className="popup-icon">
            <Bell size={22} />
          </div>

          <div className="popup-content">
            <div className="popup-top">
              <p>Cashback received</p>
              <span>+$1.25</span>
            </div>
            <small>Food Delivery · Paid with KAST</small>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function SpendSection() {
  return (
    <section id="spend" className="section-block">
      <div className="section-head">
        <p>Where you can spend</p>
        <h2>Use KAST across everyday purchases.</h2>
      </div>

      <div className="spend-grid">
        {spendItems.map((item) => (
          <motion.div
            className={`glass-card spend-card ${item.tone}`}
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="emoji-box">{item.emoji}</div>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            <div className="spend-meta">
              <span>Spent {item.amount}</span>
              <strong>+{item.cashback}</strong>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function PaymentFlowSection() {
  return (
    <section id="flow" className="section-block">
      <div className="section-head">
        <p>How payment works</p>
        <h2>From purchase to reward — step by step.</h2>
      </div>

      <div className="flow-grid">
        {paymentSteps.map((step, index) => (
          <motion.div
            className="glass-card flow-card"
            key={step.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function RewardsSection() {
  return (
    <section id="rewards" className="section-block rewards-layout">
      <div className="glass-card rewards-panel">
        <div className="section-head compact">
          <p>Rewards & popup</p>
          <h2>Reward moments that look clean and premium.</h2>
        </div>

        <div className="reward-list">
          {rewardFeatures.map((item) => (
            <div className="glass-card reward-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card popup-showcase">
        <div className="showcase-top">
          <ShieldCheck size={32} />
          <div>
            <h3>Live Reward Demo</h3>
            <p>Premium cashback notification examples</p>
          </div>
        </div>

        <div className="mini-popup gold-tone">
          <span>🍔 Burger Meal</span>
          <strong>+$0.74</strong>
        </div>

        <div className="mini-popup cyan-tone">
          <span>☕ Cafe Coffee</span>
          <strong>+$0.42</strong>
        </div>

        <div className="mini-popup purple-tone">
          <span>🥤 Cold Drink</span>
          <strong>+$0.23</strong>
        </div>

        <div className="mini-popup green-tone">
          <span>🛒 Grocery Store</span>
          <strong>+$2.31</strong>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-block">
      <div className="section-head">
        <p>About KAST</p>
        <h2>A borderless financial experience built for modern users.</h2>
      </div>

      <div className="about-grid">
        {aboutKast.map((item) => (
          <div className="glass-card about-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BrandExperienceSection() {
  return (
    <section id="brand" className="section-block brand-experience">
      <div className="section-head">
        <p>KAST brand experience</p>
        <h2>From real-world glow to global card visuals.</h2>
      </div>

      <div className="media-grid">
        <div className="glass-card media-card large-media">
          <img src={ASSETS.eventSign} alt="KAST LED event sign" />
          <div className="media-overlay">
            <span>Real KAST Visual</span>
            <h3>Premium event-style identity with a golden KAST glow.</h3>
          </div>
        </div>

        <div className="glass-card media-card video-card">
          <video src={ASSETS.globeVideo} autoPlay muted loop playsInline />
          <div className="media-overlay">
            <span>Global Card Story</span>
            <h3>Borderless payments built for modern spending.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScriptSection() {
  return (
    <section id="script" className="section-block">
      <div className="glass-card script-panel">
        <div className="script-left">
          <div className="script-badge">
            <Gift size={16} />
            30-sec UGC script
          </div>
          <h2>
            “I used KAST for everyday spending… and the rewards popped instantly.”
          </h2>
          <p>
            Use this section for a short promo video, social thread, landing
            page demo, or campaign submission.
          </p>
        </div>

        <div className="script-right">
          {scriptLines.map((item) => (
            <div className="glass-card script-line" key={item.time}>
              <span>{item.time}</span>
              <p>{item.line}</p>
            </div>
          ))}

          <div className="caption-box">
            <Wallet size={20} />
            <p>
              Caption: Pay with KAST for daily things like burgers, coffee,
              cold drinks, groceries, and subscriptions — then show the cashback
              popup beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <img src={ASSETS.logo} alt="KAST logo" className="brand-logo" />
        <div>
          <strong>KAST CashSpark</strong>
          <span>Cashback Campaign UI</span>
        </div>
      </div>

      <div className="footer-right">
        <Globe2 size={18} />
        <p>Built by Anton</p>
      </div>
    </footer>
  );
}