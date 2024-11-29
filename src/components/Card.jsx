import Button from "./Button/Button";
import Label from "./Label";
import { posts } from "../db/posts";
const placeholder = "https://placehold.co/600x400";

export default function Card({ title, children, img, content }) {
  return (
    <div className="col">
      <div className="d-flex justify-content-center p-3">
        <div className="card my-3">
          <img
            src={img || placeholder}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <Label content="css"></Label>
            {/* voglio stampare qui le labels */}
            {children}
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
