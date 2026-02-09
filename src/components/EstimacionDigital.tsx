import { motion } from "framer-motion";
import { PieChart, Info } from "lucide-react";

const EstimacionDigital = () => {
    return (
        <section className="estimacion-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="table-card"
            >
                <div className="table-header">
                    <div className="icon-badge">
                        <PieChart size={24} />
                    </div>
                    <div>
                        <h3>Estimación del Nivel de Digitalización</h3>
                        <p className="estimacion-meta">Ecuador · Análisis de Indicadores Clave (ITU, 2023)</p>
                    </div>
                </div>

                <div className="estimacion-description">
                    <p>
                        La combinación de estos indicadores permite estimar que Ecuador presenta un
                        <strong> nivel de digitalización intermedio</strong>, ubicado aproximadamente entre
                        el <span className="highlight">55% y el 60%</span>, lo que evidencia avances importantes,
                        pero también limitaciones estructurales que impiden alcanzar niveles de digitalización plena.
                    </p>
                </div>

                <div className="table-container">
                    <table className="custom-table improved">
                        <thead>
                            <tr>
                                <th>Dimensión</th>
                                <th>Indicador</th>
                                <th>Valor Aproximado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Conectividad digital</td>
                                <td>Acceso a Internet</td>
                                <td className="value-cell">~72 %</td>
                            </tr>
                            <tr>
                                <td>Uso económico digital</td>
                                <td>Pagos digitales</td>
                                <td className="value-cell">~40 %</td>
                            </tr>
                            <tr>
                                <td>Gobierno digital</td>
                                <td>EGDI</td>
                                <td className="value-cell">0.61 (Nivel Medio)</td>
                            </tr>
                            <tr className="summary-row">
                                <td><strong>Estimación Global</strong></td>
                                <td><strong>Nivel de Digitalización</strong></td>
                                <td className="total-cell">≈ 55–60 %</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-footer">
                    <Info size={14} />
                    <p>Tabla 3: Estimación del nivel de digitalización de Ecuador a partir de indicadores clave</p>
                </div>
            </motion.div>

            <style>{`
        .estimacion-section {
          padding: 60px 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .icon-badge {
          width: 56px;
          height: 56px;
          background: var(--blue-gradient);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        .estimacion-meta {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .estimacion-description {
          background: rgba(255, 255, 255, 0.03);
          padding: 24px;
          border-radius: 16px;
          margin-bottom: 32px;
          border-left: 4px solid var(--accent-blue);
        }

        .estimacion-description p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .highlight {
          color: var(--accent-blue);
          font-weight: 700;
        }

        .summary-row {
          background: rgba(59, 130, 246, 0.08);
        }

        .summary-row td {
          border-bottom: none !important;
          color: var(--text-primary) !important;
        }

        .total-cell {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--accent-blue);
        }

        .table-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .icon-badge { margin-bottom: 8px; }
          .total-cell { font-size: 1.1rem; }
        }
      `}</style>
        </section>
    );
};

export default EstimacionDigital;
