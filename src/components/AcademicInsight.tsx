import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const AcademicInsight = () => {
  return (
    <section className="insight-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="insight-card"
      >
        <div className="insight-header">
          <Lightbulb size={24} className="insight-icon" />
          <h3 className="insight-title">Insight Académico</h3>
        </div>

        <div className="insight-body">
          <p className="insight-text">
            El análisis comparativo evidencia una brecha estructural significativa
            entre Ecuador y Dinamarca en términos de digitalización. Mientras
            Dinamarca presenta un ecosistema digital maduro, caracterizado por una
            alta interoperabilidad institucional, adopción tecnológica temprana y
            políticas públicas sostenidas, Ecuador muestra avances progresivos
            pero desiguales, con mayores rezagos en servicios digitales y
            desarrollo de habilidades digitales.
          </p>

          <p className="insight-text secondary">
            Esta diferencia no responde únicamente a factores tecnológicos, sino
            también a marcos normativos, inversión pública, continuidad de
            estrategias digitales y articulación entre el Estado, el sector
            privado y la academia.
          </p>
        </div>
      </motion.div>

      <style>{`
        .insight-section {
          padding: 40px 20px;
          margin-bottom: 60px;
        }

        .insight-card {
          max-width: 1000px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.2) 100%);
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 24px;
          padding: 32px 40px;
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
        }

        .insight-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--blue-gradient);
        }

        .insight-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .insight-icon {
          color: #fbbf24;
          filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
        }

        .insight-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          letter-spacing: 0.02em;
        }

        .insight-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .insight-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
        }

        .insight-text.secondary {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .insight-card { padding: 24px; }
        }
      `}</style>
    </section>
  );
};

export default AcademicInsight;
