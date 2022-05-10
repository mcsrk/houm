import {
    LinkedinFilled,
    WhatsAppOutlined,
    GithubOutlined,
  } from "@ant-design/icons";
  
///////////////////////////////////////////
//               FOOTER                  //
///////////////////////////////////////////

export const mediaInfo = [
  {
    link: "https://www.linkedin.com/in/jhon-acosta-48595314b/",
    icon: <LinkedinFilled />,
  },
  {
    link: "https://github.com/mcsrk",
    icon: <GithubOutlined />,
  },
];

export const companyList = {
  title: "Compañía",
  children: [
    {
      link: "https://www.spotify.com/bo/about-us/contact/",
      label: "Acerca de",
    },
    {
      link: "https://www.lifeatspotify.com/",
      label: "Empleo",
    },
  ],
};

export const communityList = {
  title: "Comunidad",
  children: [
    {
      label: "Para artistas",
      link: "https://artists.spotify.com/",
    },
    {
      label: "Desarrolladores",
      link: "https://developer.spotify.com/",
    },
    {
      label: "Inversionistas",
      link: "https://investors.spotify.com/",
    },
  ],
};

export const helpList = {
  title: "Enlaces útiles",
  children: [
    {
      label: "Ayuda",
      link: "https://support.spotify.com/",
    },
  ],
};

export const contactList = {
  title: "Contáctanos",
  children: [
    {
      label: "ayuda@houm.com",
      link: "mailto:ayuda@houm.com/",
    },
    {
      label: "WhatsApp",
      link: "https://whatsapp.com/",
      icon: <WhatsAppOutlined />,
    },
  ],
};

///////////////////////////////////////////
//               CONTENT                 //
///////////////////////////////////////////

export const filterTypeButtons = [
    { label: "Albums", value: "albums" },
    { label: "Artistas", value: "artists" },
    { label: "Tracks", value: "tracks" },
  ];
  