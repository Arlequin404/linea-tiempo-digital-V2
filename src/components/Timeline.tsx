import { timelineData } from "../data/timelineData";
import TimelineItem from "./TimelineItem";

const Timeline = ({ country, focus }: { country: string; focus: string }) => {
  const filtered = timelineData.filter((item) => {
    const countryOk = country === "all" || item.country === country;
    const focusOk = focus === "all" || item.focus.includes(focus as any);
    return countryOk && focusOk;
  });

  return (
    <section
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "100px 60px",
        position: "relative",
      }}
    >
      {/* Línea central */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "4px",
          transform: "translateX(-50%)",
          background: "linear-gradient(180deg, #22c55e, #3b82f6)",
          boxShadow: "0 0 20px rgba(34,197,94,0.35)",
          borderRadius: "4px",
        }}
      />

      {filtered.map((item, index) => (
        <TimelineItem
          key={`${item.year}-${item.country}`}
          item={item}
          side={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  );
};

export default Timeline;
