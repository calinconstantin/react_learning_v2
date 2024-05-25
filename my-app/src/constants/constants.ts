import { faUser, faSitemap, faCheck, faAngleRight, faHeart, faLocation, faEnvelope, faPhone, faShower, faFootball, faCocktail, faBookQuran, faQuestion, faDiceD20, faPassport } from '@fortawesome/free-solid-svg-icons';

export const data = {
  USER: { location: 'Bucharest, Sector 3' },
  
  HEADER: {
    DROPDOWN_LANG: ["English", "Romana"],
    DROPDOWN_CURRENCY: ["EURO", "LEI", "USD"],
    LINKS: [
      { label: "My account", icon: faUser, href: "/my-account", title: "My Account" },
      { label: "Sitemap", icon: faSitemap, href: "/sitemap", title: "Sitemap" },
      { label: "Checkout", icon: faCheck, href: "/checkout", title: "Checkout" },
      { label: "Sign in", icon: faUser, href: "/sign-in", title: "Sign In" }
    ],
    HEADER_MENU: ["HOME", "BLOG", "SHOP", "PAGES", "LASTEST POSTS", "ABOUT US"],
    INPUT_SEARCH_PLACEHOLDER: "Search..."
  },
  FOOTER: {
    col1: {
      header: "CONTACT US",
      elements: [
        { icon: faLocation, subTitle: 'Address: ', text: '8901 Marmora Road, Glasgow D04 89 GR, New York' },
        { icon: faEnvelope, subTitle: 'Email: ', text: 'fieldthemes@gmail.com' },
        { icon: faPhone, subTitle: 'Telephone: ', subTitle2: 'Fax: ', text: '(+1) 866-540-3229', text2: '(+1) 866-540-3229' },
      ]
    },
    col2: {
      header: "PRODUCTS",
      icon: faAngleRight,
      values: ["About us", "Prices drop", "New products", "Best sales", "My account"]
    },
    col3: {
      header: "OUR COMPANY",
      icon: faAngleRight,
      values: ["Delivery", "About us", "Contact us", "Sitemap", "Stores"]
    },
    col4: {
      header: "YOUR ACCOUNT",
      icon: faAngleRight,
      values: [
        { text: "Personal info" }, { text: "Orders" }, { text: "Credit slips" }, { text: "Addresses" },
        { text: "My wishlists", icon: faHeart }
      ]
    },
    col5: {
      header: "NEWSLETTER SIGN-UP",
      btnValue: "Subscribe",
      placeholderValue: "Your email address",
      description: "Subscribe to the Faster mailing list to receive updates on new arrivals."
    },
    bottomText: "Hello. This is the end of the page. Have a good day!",
    bottomIcon: [faShower, faFootball, faCocktail, faBookQuran, faDiceD20, faPassport]
  }
};