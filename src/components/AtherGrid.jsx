import img3 from "../assets/img3.jpg";
import './Style.css'

const AtherGrid = () => {
  return (
    <div className="mt-4 title">
      <div className="fs-6">
        <strong>Mercedes-Benz, </strong>
        Network of fast public chargers, top up on-the-go.
      </div>
      <div className="mt-4">
        <img width="60%" className="rounded" src={img3} alt="benz" />
      </div>
      <div>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@albertvincentwu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Albert Vincent Wu
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/mercedes-benz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default AtherGrid;