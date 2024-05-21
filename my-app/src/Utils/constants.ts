import { faUser, faSitemap, faCheck } from '@fortawesome/free-solid-svg-icons';

// ------------------       USER HARD CODED DATA      ------------------
export const USER = {location: 'Bucharest, Sector 3'}
// ------------------       USER HARD CODED DATA      ------------------






// ------------------       HEADER      ------------------ 
export const DROPDOWN_HEADER_LANG_ELEM = ["English", "Romana"];
export const DROPDOWN_HEADER_CURRENCY_ELEM = ["EURO", "LEI", "USD"];
export const HEADER_LINKS = [
    { label: "My account", icon: faUser, href: "/my-account", title: "My Account" },
    { label: "Sitemap", icon: faSitemap, href: "/sitemap", title: "Sitemap" },
    { label: "Checkout", icon: faCheck, href: "/checkout", title: "Checkout" },
    { label: "Sign in", icon: faUser, href: "/sign-in", title: "Sign In" }
  ];
export const HEADER_MENU  = ["HOME", "BLOG", "SHOP", "PAGES", "LASTEST POSTS", "ABOUT US"]
// ------------------       HEADER-END      ------------------ 


// ------------------       GENERAL      ------------------
export const INPUT_SEARCH_PLACEHOLDER = "Search..."
// ------------------       GENERAL      ------------------