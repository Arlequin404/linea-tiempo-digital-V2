import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Índice Digital", Ecuador: 52, Dinamarca: 98 },
  { name: "Servicios Online", Ecuador: 35, Dinamarca: 98 },
  { name: "Penetración Internet", Ecuador: 70, Dinamarca: 99 },
  { name: "Habilidades Digitales", Ecuador: 45, Dinamarca: 95 },
];

const ComparativeChart = () => {
  return (
    <section className="chart-section">
      <div className="section-header">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Visualización de la brecha digital entre Ecuador y Dinamarca
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card chart-card"
      >
        <h3 className="card-title">Indicadores Estratégicos</h3>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorEC" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorDK" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                stroke="var(--text-muted)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--text-muted)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                unit="%"
              />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)'
                }}
                itemStyle={{ fontSize: '14px', fontWeight: 500 }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar
                dataKey="Ecuador"
                fill="url(#colorEC)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="Dinamarca"
                fill="url(#colorDK)"
                radius={[4, 4, 0, 0]}
                animationDuration={2000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <style>{`
        .chart-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .chart-card {
          padding: 40px;
          border-radius: 32px;
        }

        .chart-wrapper {
          width: 100%;
          height: 400px;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .chart-card { padding: 20px; }
          .chart-wrapper { height: 300px; }
        }
      `}</style>
    </section>
  );
};

export default ComparativeChart;
