
export function RenderStars(stars: number) {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`}>&#9733;</span>
        ))}
      {halfStar && <span>&#9734;</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`}>&#9734;</span>
        ))}
    </div>
  );
}