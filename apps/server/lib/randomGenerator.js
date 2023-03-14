export default function randomGenerator(n, startDate) {
  const start = new Date(startDate);
  const end = new Date();

  return new Array(n).fill().map(() => {
    return {
      value: Math.floor(Math.random() * 100),
      createdAt: randomDate(start, end),
    };
  });
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
