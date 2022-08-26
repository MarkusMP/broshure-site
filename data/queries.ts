export const queryHeader = `
  *[_type=="header"][0] {
    about,
    btn,
    testimonials,
    logo,
    pricing,
    home,
    contact
  }`;

export const queryHero = `
  *[_type=="hero"][0] {
    title,
    image,
    description,
    btnText,
    imageAlt,
  }`;

export const queryFeature = `
*[_type=="feature"][0] {
  title,
 description,
 list
 }`;

export const queryTestimonials = `
 *[_type=="testimonials"][0] {
  title,
 btnText,
 list
 }`;

export const queryCta = `
 *[_type=="cta"][0] {
  title,
 btnText,
 }
 `;

export const queryFooter = `
*[_type=="footer"][0] {
  logo,
 instagram,
 twitter,
 facebook,
 btnText,
 home,
 pricing,
 contact,
 about,
 testimonials,
 policy,
 }`;

export const queryPricing = `
 *[_type=="pricing"][0] {
  title,
  description,
  list
  }`;

export const queryContact = `
  *[_type=="contact"][0] {
    title,
    description,
    email
    }`;

export const queryPolicy = `
*[_type=="policy"][0] {
  title,
  date,
  policy
  }`;

export const queryNotFound = `
*[_type=="notFound"][0] {
  description
    }`;
