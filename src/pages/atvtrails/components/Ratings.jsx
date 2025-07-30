const Ratings = ({ stars }) => {
  return (
    <div className="py-1.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span>{s <= stars ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default Ratings;
