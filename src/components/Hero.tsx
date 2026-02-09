import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Glows */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
        glass-card>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="title"
        >
          Evolución de la <br />
          <span className="gradient-text">Digitalización</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="subtitle"
        >
          Ecuador vs Dinamarca <br />
          <span className="subtitle-detail">
            Un recorrido analítico por los hitos legales, tecnológicos e
            institucionales que marcaron su transformación digital.
          </span>
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
          onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explorar Timeline <ArrowDown size={18} />
        </motion.button>
      </motion.div>

      <style>{`
        .hero-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .hero-content {
          max-width: 900px;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .bg-glow-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          top: -200px;
          left: -100px;
          filter: blur(80px);
          pointer-events: none;
        }

        .bg-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
          bottom: -100px;
          right: -50px;
          filter: blur(80px);
          pointer-events: none;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 999px;
          color: #60a5fa;
          font-weight: 500;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .sparkle-icon {
          color: #fbbf24;
        }

        .title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .subtitle-detail {
          display: block;
          max-width: 600px;
          margin: 0.5rem auto 0;
          opacity: 0.8;
          font-weight: 300;
        }

        .cta-button {
          padding: 16px 36px;
          border-radius: 999px;
          border: none;
          background: var(--blue-gradient);
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;
