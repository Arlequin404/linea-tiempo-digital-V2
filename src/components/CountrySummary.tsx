type CountrySummaryProps = {
  code: string;
  country: string;
  description: string;
  maturity: string;
  speed: string;
  variant: "ec" | "dk";
};

const CountrySummary = ({
  code,
  country,
  description,
  maturity,
  speed,
  variant,
}: CountrySummaryProps) => {
  const isEC = variant === "ec";

  return (
    <div
      style={{
        ...styles.card,
        background: isEC
          ? "linear-gradient(135deg, #0b1f4b, #0a1530)"
          : "linear-gradient(135deg, #0b3b2e, #071f18)",
        border: isEC
          ? "1px solid rgba(59,130,246,0.45)"
          : "1px solid rgba(34,197,94,0.45)",
      }}
    >
      <h3 style={styles.title}>
        <span style={styles.code}>{code}</span> {country}
      </h3>

      <p style={styles.description}>{description}</p>

      <div style={styles.tags}>
        <span
          style={{
            ...styles.tag,
            background: isEC ? "#2563eb" : "#16a34a",
          }}
        >
          Madurez: {maturity}
        </span>

        <span
          style={{
            ...styles.tag,
            background: isEC ? "#3b82f6" : "#22c55e",
          }}
        >
          Velocidad: {speed}
        </span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: "24px",
    padding: "40px",
    minHeight: "240px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "16px",
  },
  code: {
    opacity: 0.6,
    marginRight: "8px",
  },
  description: {
    fontSize: "17px",
    lineHeight: 1.7,
    opacity: 0.95,
  },
  tags: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap" as const,
  },
  tag: {
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    color: "white",
  },
};

export default CountrySummary;
