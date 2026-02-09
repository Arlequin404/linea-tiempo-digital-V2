import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";

type TimelineFiltersProps = {
  country: string
  setCountry: (value: string) => void
  focus: string
  setFocus: (value: string) => void
}

const TimelineFilters = ({
  country,
  setCountry,
  focus,
  setFocus,
}: TimelineFiltersProps) => {
  return (
    <section id="timeline" className="filters-section glass-card">
      <div className="filters-container">
        <div className="filters-header">
          <Filter size={18} className="filter-icon" />
          <span className="filters-label">Explorar Datos</span>
        </div>

        <div className="filters-content">
          <div className="filter-group">
            <span className="filter-title">Seleccionar País</span>
            <div className="filter-options">
              {[
                { id: 'all', label: 'Ambos' },
                { id: 'ec', label: 'Ecuador' },
                { id: 'dk', label: 'Dinamarca' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  className={`filter-btn ${country === opt.id ? 'active' : ''}`}
                  onClick={() => setCountry(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-title">Área de Enfoque</span>
            <div className="filter-options">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'legal', label: 'Legal' },
                { id: 'tech', label: 'Tecnológico' },
                { id: 'inst', label: 'Institucional' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  className={`filter-btn ${focus === opt.id ? 'active' : ''}`}
                  onClick={() => setFocus(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {(country !== 'all' || focus !== 'all') && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="active-filters-chips"
          >
            <span className="chips-label">Filtros Activos:</span>
            {country !== 'all' && (
              <span className="filter-chip" onClick={() => setCountry('all')}>
                {country === 'ec' ? 'Ecuador' : 'Dinamarca'} <X size={12} />
              </span>
            )}
            {focus !== 'all' && (
              <span className="filter-chip" onClick={() => setFocus('all')}>
                {focus === 'legal' ? 'Legal' : focus === 'tech' ? 'Tecnológico' : 'Institucional'} <X size={12} />
              </span>
            )}
            <button className="clear-all-link" onClick={() => { setCountry('all'); setFocus('all'); }}>
              Limpiar todo
            </button>
          </motion.div>
        )}
      </div>

      <style>{`
        .filters-section {
          position: relative;
          z-index: 10;
          margin: 0 auto 4rem;
          max-width: 1000px;
          padding: 1rem 2rem;
          margin-top: -60px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .filters-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
        }

        .filters-label {
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .filter-icon {
          color: var(--accent-blue);
        }

        .filters-content {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .filter-group {
          flex: 1;
          min-width: 250px;
        }

        .filter-title {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .filter-options {
          display: flex;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .filter-btn {
          flex: 1;
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .filter-btn.active {
          background: var(--blue-gradient);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }

        .active-filters-chips {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
          flex-wrap: wrap;
        }

        .chips-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: var(--accent-blue);
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-chip:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-1px);
        }

        .clear-all-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          text-decoration: underline;
          cursor: pointer;
          margin-left: auto;
        }

        @media (max-width: 768px) {
          .filters-section { margin-left: 1rem; margin-right: 1rem; }
          .filters-content { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </section>
  )
}

export default TimelineFilters
