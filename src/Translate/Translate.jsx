import React, {useEffect, useState} from "react";
import styles from "./styles/index.module.scss";
import {Select} from "@chakra-ui/react";
import {images} from "../Translate/images/index";

/* eslint-disable no-unused-vars */

const Translate = () => {
    const [translateText, setTranslateText] = useState();
    const [intoLanguage, setIntoLanguage] = useState("zh");
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);


    const getResultTranslate = async () => {
        const response = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=auto&tl=${intoLanguage}&hl=en-US&dt=t&dt=bd&dj=1&source=bubble&q=people`
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


    //speech text

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(translateText);

        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [translateText]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        }

        synth.speak(utterance);

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };


    const TypeLanguage = [
        {
            ab:"Abkhazian",
            aa:"Afar",
            af:"Afrikaans",
            ak:"Akan",
            sq:"Albanian",
            am:"Amharic",
            ar:"Arabic",
            an:"Aragonese",
            hy:"Armenian",
            as:"Assamese",
            av:"Avaric",
            ae:"Avestan",
            ay:"Aymara",
            az:"Azerbaijani",
            bm:"Bambara",
            ba:"Bashkir",
            eu:"Basque",
            be:"Belarusian",
            bn:"Bengali",
            bi:"Bislama",
            bs:"Bosnian",
            br:"Breton",
            bg:"Bulgarian",
            my:"Burmese",
            ca:"Catalan",
            ch:"Chamorro",
            ce:"Chechen",
            ny:"Chichewa",
            zh:"Chinese",
            cu:"Church Slavonic",
            cv:"Chuvash",
            kw:"Cornish",
            co:"Corsican",
            cr:"Cree",
            hr:"Croatian",
            cs:"Czech",
            da:"Danish",
            dv:"Divehi",
            nl:"Dutch",
            dz:"Dzongkha",
            en:"English",
            eo:"Esperanto",
            et:"Estonian",
            ee:"Ewe",
            fo:"Faroese",
            fj:"Fijian",
            fi:"Finnish",
            fr:"French",
            fy:"Western Frisian",
            ff:"Fulah",
            gd:"Gaelic",
            gl:"Galician",
            lq:"Ganda",
            ka:"Georgian",
            de:"German",
            el:"Greek",
            kl:"Kalaallisut",
            gn:"Guarani",
            gu:"Gujarati",
            ht:"Haitian",
            ha:"Hausa",
            he:"Hebrew",
            hz:"Herero",
            hi:"Hindi",
            ho:"Hiri Motu",
            hu:"Hungarian",
            is:"Icelandic",
            io:"Ido",
            ig:"Igbo",
            id:"Indonesian",
            ia:"Interlingua",
            ie:"Interlingue",
            iu:"Inuktitut",
            ik:"Inupiaq",
            ga:"Irish",
            it:"Italian",
            ja:"Japanese",
            jv:"Javanese",
            kn:"Kannada",
            kr:"Kanuri",
            ks:"Kashmiri",
            kk:"Kazakh",
            km:"Central Khmer",
            ki:"Kikuyu",
            rw:"Kinyarwanda",
            ky:"Kirghiz",
            kv:"Komi",
            kg:"Kongo",
            ko:"Korean",
            kj:"Kuanyama",
            ku:"Kurdish",
            lo:"Lao",
            la:"Latin",
            lv:"Latvian",
            li:"Limburgan",
            ln:"Lingala",
            lt:"Lithuanian",
            lu:"Luba-Katanga",
            lb:"Luxembourgish",
            mk:"Macedonian",
            mg:"Malagasy",
            ms:"Malay",
            ml:"Malayalam",
            mt:"Maltese",
            gv:"Manx",
            mi:"Maori",
            mr:"Marathi",
            mh:"Marshallese",
            mn:"Mongolian",
            na:"Nauru",
            nv:"Navajo",
            nd:"North Ndebele",
            nr:"South Ndebele",
            ng:"Ndonga",
            ne:"Nepali",
            no:"Norwegian",
            nb:"Norwegian Bokmål",
            nn:"Norwegian Nynorsk",
            ii:"Sichuan Yi",
            oc:"Occitan",
            oj:"Ojibwa",
            or:"Oriya",
            om:"Oromo",
            os:"Ossetian",
            pi:"Pali",
            ps:"Pashto",
            fa:"Persian",
            pl:"Polish",
            pt:"Portuguese",
            pa:"Punjabi",
            qu:"Quechua",
            ro:"Romanian",
            rm:"Romansh",
            rn:"Rundi",
            ru:"Russian",
            se:"Northern Sami",
            sm:"Samoan",
            sg:"Sango",
            sa:"Sanskrit",
            sc:"Sardinian",
            sr:"Serbian",
            sn:"Shona",
            sd:"Sindhi",
            si:"Sinhala",
            sk:"Slovak",
            sl:"Slovenian",
            so:"Somali",
            st:"Southern Sotho",
            es:"Spanish",
            su:"Sundanese",
            sw:"Swahili",
            ss:"Swahili",
            sv:"Swedish",
            tl:"Tagalog",
            ty:"Tahitian",
            tg:"Tajik",
            ta:"Tamil",
            tt:"Tatar",
            te:"Telugu",
            th:"Thai",
            bo:"Tibetan",
            ti:"Tigrinya",
            to:"Tonga",
            ts:"Tsonga",
            tn:"Tswana",
            tr:"Turkish",
            tk:"Turkmen",
            tw:"Twi",
            ug:"Uighur",
            uk:"Ukrainian",
            ur:"Urdu",
            uz:"Uzbek",
            ve:"Venda",
            vi:"VN",
            vo:"Volapük",
            wa:"Walloon",
            cy:"Welsh",
            wo:"Wolof",
            xh:"Xhosa",
            yi:"Yiddish",
            yo:"Yoruba",
            za:"Zhuang",
            zu:"Zulu",
        }
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
                                style={{color: "#000", fontWeight: 600}}
                                onChange={(e) => handleSelectLanguage(e)}
                                value={intoLanguage}
                            >
                                {TypeLanguage.map((item) => Object.entries(item).map(([key,value])=>
                                    <option key={key} value={key}>{value}</option>
                                ))}
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
                    <p>{translateText}</p>
                    <div onClick={handlePlay}>
                        <img alt={""} src={images.Speaker} style={{width: 18, height: 18}}/>
                    </div>
                    <div>
                        <img alt={""} src={images.Copy} style={{width: 18, height: 18}}/>
                    </div>
                    {/* <img src={images.Copy} style={{ width: 18, height: 18 }} /> */}
                </div>
                <div className="translate-footer"></div>
            </div>
        </div>
    );
};

export default Translate;
