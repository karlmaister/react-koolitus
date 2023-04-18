import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "admin": "To admin view",
            "contact": "Contact with us",
            "shops": "Shops",
            "cart": "Cart",
            "maintain-categories":"Maintain Categories",
            "maintain-shops":"Maintain Shops",
            "add-product":"Add Product",
            "maintain-products":"Maintain Products",
            "sorteeriAZ":"Sort A-Z",
            "sorteeriZA":"Sort Z-A",
            "sorteeriKasvav":"Sort Ascending",
            "sorteeriKahanev":"Sort Descending"


    }
    },
    ee: {
        translation: {
            "admin": "Admin vaade",
            "contact": "Kirjuta meile",
            "shops": "Poed",
            "cart": "Ostukorv",
            "maintain-categories":"Halda Kategooria",
            "maintain-shops":"Halda Poed",
            "add-product":"Lisa Toode",
            "maintain-products":"Halda Tooted",
            "sorteeriAZ":"Sorteeri A-Z",
            "sorteeriZA":"Sorteeri Z-A",
            "sorteeriKasvav":"Sorteeri Kasvav",
            "sorteeriKahanev":"Sorteeri Kahanev"
    }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;