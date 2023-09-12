import Tour from "./Tour";

const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
