import { motion } from "framer-motion";
import { CreditCard, Building2, Globe } from "lucide-react";

const ComparisonTables = () => {
    return (
        <section className="tables-section">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Tablas Comparativas de <span className="gradient-text">Evolución</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="section-subtitle"
                >
                    Clasificación detallada de indicadores específicos por país y área de impacto.
                </motion.p>
            </div>

            <div className="tables-grid">
                {/* TABLA 1: INTERNET EC */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card table-card"
                >
                    <div className="table-header">
                        <Globe size={20} className="header-icon" />
                        <h3>Usuarios de Internet en Ecuador</h3>
                    </div>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Año</th>
                                <th>Porcentaje de Usuarios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>2015</td><td className="value-cell">43%</td></tr>
                            <tr><td>2018</td><td className="value-cell">57%</td></tr>
                            <tr><td>2020</td><td className="value-cell">65%</td></tr>
                            <tr><td>2022</td><td className="value-cell">71%</td></tr>
                            <tr><td>2023</td><td className="value-cell">72% - 73%</td></tr>
                        </tbody>
                    </table>
                    <p className="table-caption">Tabla 1: Usuarios de Internet (% de la población)</p>
                </motion.div>

                {/* TABLA 2: PAGOS DIGITALES COMPARACIÓN */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card table-card"
                >
                    <div className="table-header">
                        <CreditCard size={20} className="header-icon" />
                        <h3>Uso de Pagos Digitales</h3>
                    </div>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Indicador</th>
                                <th>Ecuador</th>
                                <th>Dinamarca</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adultos con cuenta bancaria</td>
                                <td className="ec-cell">64%</td>
                                <td className="dk-cell">{">"} 99%</td>
                            </tr>
                            <tr>
                                <td>Uso regular de pagos digitales</td>
                                <td className="ec-cell">35% - 40%</td>
                                <td className="dk-cell">90% - 95%</td>
                            </tr>
                            <tr>
                                <td>Uso de efectivo predominante</td>
                                <td className="ec-cell">{">"} 50%</td>
                                <td className="dk-cell">{"<"} 20%</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="table-caption">Tabla 2: Indicadores de adopción financiera digital</p>
                </motion.div>

                {/* TABLA 3: EGDI COMPARACIÓN */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="table-card centered-card"
                >
                    <div className="table-header">
                        <Building2 size={20} className="header-icon" />
                        <h3>Gobierno Electrónico (EGDI)</h3>
                    </div>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>País</th>
                                <th>EGDI 2022</th>
                                <th>Nivel de Desarrollo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ecuador</td>
                                <td className="ec-cell">0.61</td>
                                <td className="ec-cell">Medio</td>
                            </tr>
                            <tr>
                                <td>Dinamarca</td>
                                <td className="dk-cell">0.97</td>
                                <td className="dk-cell">Muy Alto</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="table-caption">Tabla 3: Índice de Desarrollo de Gobierno Electrónico (Naciones Unidas)</p>
                </motion.div>
            </div>

            <style>{`
        .tables-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .centered-card {
          grid-column: 1 / -1;
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        .ec-cell {
          color: var(--accent-blue);
          font-weight: 600;
        }

        .dk-cell {
          color: var(--accent-green);
          font-weight: 600;
        }

        .table-caption {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .text-center { text-align: center; }

        @media (max-width: 768px) {
          .tables-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default ComparisonTables;
