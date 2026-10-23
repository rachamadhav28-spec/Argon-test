export function MetricsGrid() {
  const metrics = [
    { label: "Latency", value: "14ms" },
    { label: "Uptime", value: "99.98%" },
    { label: "Batch Files", value: "25" }
  ];
  return <div className="grid">{metrics.map(m => <div key={m.label}>{m.label}: {m.value}</div>)}</div>;
}
