import React, {useEffect, useState} from "react";
import styles from "./styles/index.module.scss";
import {Select} from "@chakra-ui/react";
import {images} from "../Translate/images/index";

/* eslint-disable no-unused-vars */

const Translate = () => {
    const [translateText, setTranslateText] = useState();
    const [intoLanguage, setIntoLanguage] = useState("vi");

    const getResultTranslate = async () => {
        const response = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=auto&tl=${intoLanguage}&hl=en-US&dt=t&dt=bd&dj=1&source=bubble&q=how`
        );
        const result = await response.json();
        const data = result?.sentences[0].trans;
        setTranslateText(data);
    };
    console.log('intoLanguage', intoLanguage)
    useEffect(() => {
        getResultTranslate();
    }, [intoLanguage]);

    const handleSelectLanguage = (e) => {
        console.log("eeeeeeeeeeee", e);
        setIntoLanguage(e.target.value);
    };

    const TypeLanguage = [
        "Abkhazian",
        "Afar",
        "Afrikaans",
        "Akan",
        "Albanian",
        "Amharic",
        "Arabic",
        "Aragonese",
        "Armenian",
        "Assamese",
        "Avaric",
        "Avestan",
        "Aymara",
        "Azerbaijani",
        "Bambara",
        "Bashkir",
        "Basque",
        "Belarusian",
        "Bengali",
        "Bislama",
        "Bosnian",
        "Breton",
        "Bulgarian",
        "Burmese",
        "Bulgarian",
        "Catalan",
        "Bulgarian",
        "Chamorro",
        "Chechen",
        "Chichewa",
        "Chinese",
        "Church Slavonic",
        "Chuvash",
        "Cornish",
        "Corsican",
        "Cree",
        "Czech",
        "Danish",
        "Divehi",
        "Dutch",
        "Danish",
        "Dzongkha",
        "English",
        "Danish",
        "Esperanto",
        "Estonian",
        "Ewe",
        "Faroese",
        "Fijian",
        "Finnish",
        "French",
        "Western Frisian",
        "Fulah",
        "Gaelic",
        "Galician",
        "Ganda",
        "Georgian",
        "German",
        "Greek",
        "Kalaallisut",
        "Guarani",
        "Gujarati",
        "Haitian",
        "Hausa",
        "Hebrew",
        "Herero",
        "Hindi",
        "Hiri Motu",
        "Hungarian",
        "Icelandic",
        "Ido",
        "Igbo",
        "Indonesian",
        "Interlingua",
        "Inuktitut",
        "Inupiaq",
        "Irish",
        "Italian",
        "Japanese",
        "Javanese",
        "Kannada",
        "Kanuri",
        "Kashmiri",
        "Kazakh",
        "Central Khmer",
        "Kikuyu",
        "Kinyarwanda",
        "Kirghiz",
        "Komi",
        "Kongo",
        "Korean",
        "Kuanyama",
        "Kurdish",
        "Lao",
        "Latin",
        "Latvian",
        "Limburgan",
        "Lingala",
        "Lithuanian",
        "Luba-Katanga",
        "Luxembourgish",
        "Macedonian",
        "Malagasy",
        "Malay",
        "Malayalam",
        "Maltese",
        "Manx",
        "Maori",
        "Marathi",
        "Marshallese",
        "Mongolian",
        "Nauru",
        "Navajo",
        "North Ndebele",
        "South Ndebele",
        "Ndonga",
        "Nepali",
        "Norwegian",
        "Norwegian Bokmål",
        "Norwegian Nynorsk",
        "Sichuan Yi",
        "Occitan",
        "Ojibwa",
        "Oriya",
        "Oromo",
        "Ossetian",
        "Pali",
        "Pashto",
        "Persian",
        "Polish",
        "Portuguese",
        "Punjabi",
        "Quechua",
        "Romanian",
        "Romansh",
        "Rundi",
        "Russian",
        "Northern Sami",
        "Samoan",
        "Sango",
        "Sanskrit",
        "Sardinian",
        "Serbian",
        "Shona",
        "Sindhi",
        "Sinhala",
        "Slovak",
        "Slovenian",
        "Somali",
        "Southern Sotho",
        "Spanish",
        "Sundanese",
        "Swati",
        "Swedish",
        "Tagalog",
        "Tahitian",
        "Tajik",
        "Tamil",
        "Tatar",
        "Telugu",
        "Thai",
        "Tibetan",
        "Tigrinya",
        "Tonga ",
        "Tsonga",
        "Tswana",
        "Turkish",
        "Turkmen",
        "Twi",
        "Uighur",
        "Ukrainian",
        "Urdu",
        "Uzbek",
        "Venda",
        "Vietnamese",
        "Volapük",
        "Walloon",
        "Welsh",
        "Wolof",
        "Xhosa",
        "Yiddish",
        "Yoruba",
        "Zhuang",
        "Zulu",
    ]
    return (
        <div>
            <div className={styles.translateContainer}>
                <div className={styles.translateHeader}>
                    <div className={styles.headerChange}>
                        <img alt={""} src={images.Translate} style={{width: 24, height: 24}}/>
                        <p className={styles.changeInto}>Translate into : </p>
                        <div className={styles.changeLanguage}>
                            <select
                                placeholder="ENG"
                                className={styles.languageSelect}
                                style={{color: "#000", fontWeight: 700}}
                                // onChange={(e) => handleSelectLanguage(e)}
                                onChange={(e) => handleSelectLanguage(e)}
                                value={intoLanguage}
                            >
                                <option style={{marginBottom: 20}} value="eng">
                                    ENG
                                </option>
                                <option value="vi">VN</option>
                                <option value="cn">CN</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.headerSetting}>
                        <div style={{paddingRight: "34px"}}>
                            <img alt={""} src={images.Setting} style={{width: 16, height: 16}}/>
                        </div>
                        <div style={{paddingRight: "17px"}}>
                            <img alt={""} src={images.Close} style={{width: 14, height: 14}}/>
                        </div>
                    </div>
                </div>

                <div className="translate-body" style={{display: "flex"}}>
                    {/* <div>{translateText}</div> */}
                    <p>{translateText}</p>
                    <div>
                        <img src={images.Speaker} style={{width: 18, height: 18}}/>
                    </div>
                    <div>
                        <img src={images.Copy} style={{width: 18, height: 18}}/>
                    </div>
                    {/* <img src={images.Copy} style={{ width: 18, height: 18 }} /> */}
                </div>
                <div className="translate-footer"></div>
            </div>
        </div>
    );
};

export default Translate;
