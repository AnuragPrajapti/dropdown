import { useEffect, useState } from "react";
import HomeChanger from "./HomeChanger";
import AtherGrid from "./AtherGrid";
import PortableCharger from "./PortableCharger";
import { Button, Modal } from "antd";
import 'antd/dist/antd.css';
import './Style.css'

export default function SecondtBtn() {

  const [bike, setBike] = useState("PortableAssocciries");
  const [HomeAssocciries, setHomeAssocciries] = useState(false);
  const [PortableAssocciries, setPortableAssocciries] = useState(false);
  const [AtherAssocciries, setAtherAssocciries] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    bike === "PortableAssocciries"
      ? setPortableAssocciries(true)
      : setPortableAssocciries(false);
      bike === "HomeAssocciries" ? setHomeAssocciries(true) : setHomeAssocciries(false);
      bike === "AtherAssocciries" ? setAtherAssocciries(true) : setAtherAssocciries(false);
  }, [bike]);

  const handleOnChange = (e) => {
    setBike(e.target.value);
  };
  

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Button type="primary" className="Button" onClick={showModal}>
        Portable Modal
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container mt-3">
          <div className="mt-4">
            <select
              className="form-select"
              value={bike}
              onChange={handleOnChange}
              >
              <option value="PortableAssocciries">PortableCharger</option>
              <option value="HomeAssocciries">HomeChanger</option>
              <option value="AtherAssocciries">AtherGrid</option>
            </select>
          </div>
          {HomeAssocciries && <HomeChanger />}
          {PortableAssocciries && <PortableCharger />}
          {AtherAssocciries && <AtherGrid />}
        </div>
      </Modal>
    </>
  );
}
