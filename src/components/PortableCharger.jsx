import img2 from '../assets/img2.jpg'
import './Style.css'

const PortableChanger = () => {
  return (
    <div className="mt-4 title">
      <div className="fs-6">
        <strong>Ferrari </strong>
        Carry it in the boot & charge using any 5A socket.
      </div>
      <div className="mt-4">
        <img width="60%" className="rounded" src={img2} alt="ferrari" />
      </div>
      <div>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@viktortheo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Viktor Theo
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/ferrari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default PortableChanger;
