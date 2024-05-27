import { faUser, faSitemap, faCheck, faAngleRight, faHeart, faLocation, faEnvelope, faPhone, faShower, faFootball, faCocktail, faBookQuran, faQuestion, faDiceD20, faPassport, faUndo, faTruck, faGift, faHeadphones } from '@fortawesome/free-solid-svg-icons';

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
  },
  CONTENT: {
    BOX_STATIC_CONTENT: [
      { icon: faUndo, header: "MONEY BACK GUARANTEE", context: "Lorem ipsum dolor sit amet", id: 0 },
      { icon: faTruck, header: "FREE WORLDWIDE SHIPPING", context: "Lorem ipsum dolor sit amet", id: 1 },
      { icon: faGift, header: "50 off", context: "Lorem ipsum dolor sit amet", id: 2 },
      { icon: faHeadphones, header: "CUSTOMER SERVICE", context: "Lorem ipsum dolor sit amet", id: 3 },
    ],
    PRODUCTS: [
      {
        id: 1,
        name: "Product 1",
        price: "$10.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 2,
        name: "Product 2",
        price: "$19.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 3,
        name: "Product 3",
        price: "$15.49",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 4,
        name: "Product 4",
        price: "$12.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 5,
        name: "Product 5",
        price: "$8.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 6,
        name: "Product 6",
        price: "$14.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 7,
        name: "Product 7",
        price: "$11.49",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 8,
        name: "Product 8",
        price: "$9.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 9,
        name: "Product 9",
        price: "$17.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 10,
        name: "Product 10",
        price: "$13.49",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 11,
        name: "Product 11",
        price: "$16.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      },
      {
        id: 12,
        name: "Product 12",
        price: "$22.99",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkidspressmagazine.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fdreamstime_xl_12522351.jpg&f=1&nofb=1&ipt=932ef04d2a87f78187b05e9fa425cb9a202fe4054660a9a4a5d033fa40569ebc&ipo=images",
        btnValue: 'Press me!'
      }
    ]
  }
};