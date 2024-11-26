import { useTranslation } from "react-i18next";

const TestLanguages = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div>
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("es")}>Español</button>
            </div>
        </div>

    )
}

export default TestLanguages