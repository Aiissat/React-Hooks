import Card from "react-bootstrap/Card";
import "./AddForm.css";
const MovieCard = ({ title, description, posterUrl, rating }) => {
  return (
    <div className="content-movie">
      <div>
        <Card
          style={{
            width: "25rem",
            minheight: "820px",
            marginTop: "15px",
            backgroundColor: "rgb(137,233,166)",
          }}
        >
          <Card.Img
            variant="top"
            src={posterUrl}
            alt="FilmPoster"
            style={{ width: "25rem", height: "39rem" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ fontweight: "bold" }}>{title}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <span style={{ fontweight: "bold" }}>{rating}</span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;
