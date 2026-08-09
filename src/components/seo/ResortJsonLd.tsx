import { SITE_URL } from "@/lib/constants";

const resortSchema = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: "Le Mirage Negril",
  description:
    "Le Mirage is a luxury boutique resort in Negril, Jamaica with 12 rooms, a swimming pool, and personalized service.",
  url: SITE_URL,
  telephone: "+1-876-957-0386",
  email: "info@miragenegril.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Negril",
    addressRegion: "Westmoreland",
    addressCountry: "JM",
  },
  numberOfRooms: 12,
  sameAs: [
    "https://www.facebook.com/mirage.negril/",
    "https://www.instagram.com/miragenegril/",
  ],
};

const ResortJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(resortSchema) }}
  />
);

export default ResortJsonLd;
