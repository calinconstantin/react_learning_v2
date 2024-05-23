import { faUser, faSitemap, faCheck, faAngleRight, faHeart, faLocation, faEnvelope, faPhone, faShower, faFootball, faCocktail, faBookQuran, faQuestion, faDiceD20, faPassport } from '@fortawesome/free-solid-svg-icons';

// ------------------       USER HARD CODED DATA      ------------------
export const USER = { location: 'Bucharest, Sector 3' }
// ------------------       USER HARD CODED DATA      ------------------


// ------------------       GENERAL      ------------------
export const INPUT_SEARCH_PLACEHOLDER = "Search..."
// ------------------       GENERAL      ------------------


// ------------------       HEADER      ------------------ 
export const DROPDOWN_HEADER_LANG_ELEM = ["English", "Romana"];
export const DROPDOWN_HEADER_CURRENCY_ELEM = ["EURO", "LEI", "USD"];
export const HEADER_LINKS = [
  { label: "My account", icon: faUser, href: "/my-account", title: "My Account" },
  { label: "Sitemap", icon: faSitemap, href: "/sitemap", title: "Sitemap" },
  { label: "Checkout", icon: faCheck, href: "/checkout", title: "Checkout" },
  { label: "Sign in", icon: faUser, href: "/sign-in", title: "Sign In" }
];
export const HEADER_MENU = ["HOME", "BLOG", "SHOP", "PAGES", "LASTEST POSTS", "ABOUT US"]
// ------------------       HEADER-END      ------------------ 




// ------------------       FOOTER-START      ------------------ 
export const FOOTER = {
  col1: {
    header: "CONTACT US",
    addressField: "Address: ",
    addressValue: "8901 Marmora Road, Glasgow D04 89 GR, New York",
    emailField: "Email: ",
    emailValue: "fieldthemes@gmail.com",
    telephoneField: "Telephone: ",
    telephoneValue: "(+1) 866-540-3229",
    faxField: "Fax: ",
    faxValue: "(+1) 866-540-3229",
    icon1: faLocation,
    icon2: faEnvelope,
    icon3: faPhone
  },
  col2: {
    header: "PRODUCTS",
    icon: faAngleRight,
    valu1: "About us",
    value2: "Prices drop",
    value3: "New products",
    value4: "Best sales",
    value5: "My account"
  },
  col3: {
    header: "OUR COMPANY",
    icon: faAngleRight,
    valu1: "Delivery",
    value2: "About us",
    value3: "Contact us",
    value4: "Sitemap",
    value5: "Stores"
  },
  col4: {
    header: "YOUR ACCOUNT",
    icon: faAngleRight,
    valu1: "Personal info",
    value2: "Orders",
    value3: "Credit slips",
    value4: "Addresses",
    value5: "My wishlists",
    value5Icon: faHeart
  },
  col5: {
    header: "NEWSLETTER SIGN-UP",
    btnValue: "Subscribe",
    placeholderValue: "Your email address",
    description: "Subscribe to the Faster mailing list to receive updates on new arrivals."
  }
}
export const FOOTER_2 = {
  text: 'Hello. This is the end of the page. Have a good day!',
  icons: [faShower, faFootball, faCocktail, faBookQuran, faDiceD20, faPassport]
}
// ------------------       FOOTER-END      ------------------ 
