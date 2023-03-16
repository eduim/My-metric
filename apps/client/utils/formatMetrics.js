export default function formatMetrics(metrics, selected) {
  return metrics.map((metric) => {
    return {
      id: metric.id,
      name: metric.name,
      current: metric.id === selected,
      href: metric.id,
    };
  });
}
