import React from "react";
import styles from "./styles/index.module.scss";
import { Select } from "@chakra-ui/react";
import { images } from "../Translate/images/index";

const Translate = () => {
  return (
    <div>
      <div className={styles.translateContainer}>
        <div className={styles.translateHeader}>
          <div className={styles.headerChange}>
            <img src={images.Translate} style={{ width: 24, height: 24 }} />
            <p className={styles.changeInto}>Translate into : </p>
            <div className={styles.changeLanguage}>
              <Select
                placeholder="ENG"
                className={styles.languageSelect}
                style={{ color: "#000", fontWeight: 700 }}
              >
                <option style={{ marginBottom: 20 }} value="option1">
                  ENG
                </option>
                <option value="option2">VN</option>
                <option value="option3">CN</option>
              </Select>
            </div>
          </div>
          <div className={styles.headerSetting}>
            <div style={{ paddingRight: "34px" }}>
              <img src={images.Setting} style={{ width: 16, height: 16 }} />
            </div>
            <div style={{ paddingRight: "17px" }}>
              <img src={images.Close} style={{ width: 14, height: 14 }} />
            </div>
          </div>
        </div>

        <div className="translate-body" style={{ display: "flex" }}>
          <div>
            <img src={images.Speaker} style={{ width: 18, height: 18 }} />
          </div>
          <div>
            <img src={images.Copy} style={{ width: 18, height: 18 }} />
          </div>
          {/* <img src={images.Copy} style={{ width: 18, height: 18 }} /> */}
        </div>
        <div className="translate-footer"></div>
      </div>
    </div>
  );
};

export default Translate;
