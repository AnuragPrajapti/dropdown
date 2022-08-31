import img1 from '../assets/img1.jpg'
import './Style.css'
const HomeChanger = () => {
  return (
    <div className="mt-4">
      <div className="fs-5 title">
        <strong>Ather </strong>
        Dot, a personal charger, fixed at your parking spot.
      </div>
      <div className="mt-4">
        <img width="60%" className="rounded" src={img1} alt="audi" />
      </div>
      <div>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@rpnickson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Roberto Nickson
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/audi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default HomeChanger;