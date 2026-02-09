import { motion } from "framer-motion";
import { Lightbulb, BookOpen, TrendingUp, AlertTriangle, Quote, GraduationCap, Users, Mail } from "lucide-react";

const Conclusions = () => {
  return (
    <section className="conclusions-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Conclusiones y Reflexiones
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Análisis académico de las lecciones aprendidas y oportunidades futuras
        </motion.p>
      </div>

      <div className="conclusions-grid">
        <ConclusionCard
          icon={<Lightbulb size={24} />}
          title="Lecciones Aprendidas"
          text="La transformación digital requiere una estrategia integral que combine marco legal robusto, inversión tecnológica sostenida y desarrollo de capacidades institucionales. El caso danés demuestra que la digitalización exitosa es un proceso de décadas, no de años."
        />

        <ConclusionCard
          icon={<BookOpen size={24} />}
          title="Factores Críticos"
          text="La identificación única centralizada (CPR en Dinamarca, cédula digital en Ecuador) es fundamental para la interoperabilidad de servicios. La voluntad política sostenida y la inversión continua en infraestructura son pilares esenciales."
        />

        <ConclusionCard
          icon={<TrendingUp size={24} />}
          title="Oportunidades"
          text="Ecuador tiene la ventaja de poder adoptar tecnologías más modernas sin las limitaciones de sistemas legacy. La conectividad móvil puede ser un acelerador clave, como ha ocurrido en otros países en desarrollo."
        />

        <ConclusionCard
          icon={<AlertTriangle size={24} />}
          title="Desafíos Pendientes"
          text="La brecha en habilidades digitales y la desigualdad en el acceso a Internet son obstáculos significativos. Se requiere inversión en educación digital y expansión de conectividad en zonas rurales."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="final-reflection-card glass-card"
      >
        <div className="reflection-header">
          <Quote className="quote-icon" size={32} />
          <h3 className="reflection-title">Reflexión Final</h3>
        </div>

        <div className="reflection-content">
          <p>
            La comparación entre Ecuador y Dinamarca no busca establecer una
            competencia, sino evidenciar que la transformación digital es un
            proceso multidimensional que requiere tiempo, recursos y compromiso
            institucional sostenido. Cada país enfrenta contextos y desafíos
            únicos.
          </p>
          <p>
            Dinamarca tuvo la ventaja de iniciar su digitalización en un momento
            de menor complejidad tecnológica, permitiendo construir sistemas
            sólidos progresivamente. Ecuador, por su parte, enfrenta el desafío
            de implementar transformaciones en un ecosistema más complejo, pero
            también tiene acceso a tecnologías avanzadas y puede aprender de
            experiencias internacionales.
          </p>
        </div>

        <div className="cite-box">
          “La digitalización no es un destino, sino un viaje continuo de
          adaptación, innovación y aprendizaje institucional.”
        </div>
      </motion.div>

      <footer className="footer-area">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-brand">
              <GraduationCap size={24} />
              <h4>Proyecto Final</h4>
            </div>
            <p>
              Micrositio desarrollado con fines educativos para el análisis
              comparativo de la transformación digital entre Ecuador y
              Dinamarca.
            </p>
          </div>

          <div className="footer-column">
            <div className="footer-brand">
              <Users size={24} />
              <h4>Integrantes</h4>
            </div>
            <ul className="team-list">
              <li>Kevin Anchali</li>
              <li>Andy Chiquin</li>
              <li>Jessica Centeno</li>
              <li>Sebastian Granda</li>
              <li>Alex Ortis</li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-brand">
              <Mail size={24} />
              <h4>Curso</h4>
            </div>
            <p>Legislación Informática</p>
            <p className="footer-date">2025-2026 · Semestre II</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Análisis de Digitalización. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>{`
        .conclusions-section {
          padding: 100px 20px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .conclusions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .conclusion-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conclusion-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .conclusion-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .final-reflection-card {
          padding: 48px;
          margin-bottom: 100px;
        }

        .reflection-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .quote-icon {
          color: var(--accent-blue);
          opacity: 0.5;
        }

        .reflection-title {
          font-size: 1.75rem;
          color: var(--text-primary);
        }

        .reflection-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .reflection-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .cite-box {
          padding: 24px;
          background: rgba(255, 255, 255, 0.03);
          border-left: 4px solid var(--accent-blue);
          font-style: italic;
          color: var(--text-primary);
          font-size: 1.1rem;
          border-radius: 0 12px 12px 0;
        }

        .footer-area {
          border-top: 1px solid var(--glass-border);
          padding: 60px 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 48px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .footer-brand h4 {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-column p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .team-list {
          list-style: none;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-date {
          margin-top: 12px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          font-size: 0.85rem;
        }
      `}</style>
    </section>
  );
};

const ConclusionCard = ({ icon, title, text }: { icon: React.ReactNode; title: string, text: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass-card conclusion-card"
  >
    <div className="card-icon-box">{icon}</div>
    <h3 className="conclusion-title">{title}</h3>
    <p className="conclusion-text">{text}</p>
  </motion.div>
);

export default Conclusions;
