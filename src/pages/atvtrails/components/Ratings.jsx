const Ratings = ({ stars }) => {
  return (
    <div className="py-1.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s}>{s <= stars ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default Ratings;
