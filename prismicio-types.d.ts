// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | VideoBlockSlice
  | StepAndImageSlice
  | TeamGridSlice
  | JourneyGridSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type RegistrationDocumentDataSlicesSlice =
  | StepAndImageSlice
  | HeroSlice
  | RegistrationSlice;

/**
 * Content for Registration documents
 */
interface RegistrationDocumentData {
  /**
   * Slice Zone field in *Registration*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: registration.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RegistrationDocumentDataSlicesSlice> /**
   * Meta Title field in *Registration*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: registration.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Registration*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: registration.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Registration*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: registration.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Registration document from Prismic
 *
 * - **API ID**: `registration`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RegistrationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<RegistrationDocumentData>,
    "registration",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *Settings → Footer Icons*
 */
export interface SettingsDocumentDataFooterIconsItem {
  /**
   * Icons field in *Settings → Footer Icons*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_icons[].icons
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icons: prismic.ImageField<never>;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Footer Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  footer_image: prismic.ImageField<never>;

  /**
   * Footer Icons field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_icons: prismic.GroupField<
    Simplify<SettingsDocumentDataFooterIconsItem>
  >;

  /**
   * Label field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  label: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Content for Skater documents
 */
interface SkaterDocumentData {
  /**
   * Name field in *Skater*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Research Background field in *Skater*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.research_background
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  research_background: prismic.KeyTextField;

  /**
   * Photo Foreground field in *Skater*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.foreground_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;

  /**
   * Photo Background field in *Skater*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Reach out field in *Skater*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.reach_out
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  reach_out: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Skater document from Prismic
 *
 * - **API ID**: `skater`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkaterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SkaterDocumentData>, "skater", Lang>;

/**
 * Content for Socials documents
 */
interface SocialsDocumentData {
  /**
   * Icons field in *Socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.icons
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icons: prismic.ImageField<never>;
}

/**
 * Socials document from Prismic
 *
 * - **API ID**: `socials`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SocialsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SocialsDocumentData>,
    "socials",
    Lang
  >;

/**
 * Content for Steps documents
 */
interface StepsDocumentData {
  /**
   * Name field in *Steps*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Image field in *Steps*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Seats Left field in *Steps*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.seats_left
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  seats_left: prismic.NumberField;

  /**
   * Batch Start field in *Steps*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.batch_start
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  batch_start: prismic.TimestampField;

  /**
   * Schedule Consultant field in *Steps*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.schedule_consultant
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  schedule_consultant: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Steps document from Prismic
 *
 * - **API ID**: `steps`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StepsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<StepsDocumentData>, "steps", Lang>;

type TeamDocumentDataSlicesSlice = TeamGridSlice;

/**
 * Content for Team documents
 */
interface TeamDocumentData {
  /**
   * Slice Zone field in *Team*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: team.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TeamDocumentDataSlicesSlice> /**
   * Meta Title field in *Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: team.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: team.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Team*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Team document from Prismic
 *
 * - **API ID**: `team`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TeamDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<TeamDocumentData>, "team", Lang>;

export type AllDocumentTypes =
  | HomepageDocument
  | RegistrationDocument
  | SettingsDocument
  | SkaterDocument
  | SocialsDocument
  | StepsDocument
  | TeamDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Deck Texture field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.deck_texture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  deck_texture: prismic.ImageField<never>;

  /**
   * Wheel Texture field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.wheel_texture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  wheel_texture: prismic.ImageField<never>;

  /**
   * Truck Color field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.truck_color
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  truck_color: prismic.ImageField<never>;

  /**
   * Bolt Color field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.bolt_color
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bolt_color: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *JourneyGrid → Default → Primary → Journey*
 */
export interface JourneyGridSliceDefaultPrimaryJourneyItem {
  /**
   * Steps field in *JourneyGrid → Default → Primary → Journey*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: journey_grid.default.primary.journey[].steps
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  steps: prismic.ContentRelationshipField<"steps">;
}

/**
 * Primary content in *JourneyGrid → Default → Primary*
 */
export interface JourneyGridSliceDefaultPrimary {
  /**
   * Heading field in *JourneyGrid → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: journey_grid.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *JourneyGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: journey_grid.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Journey field in *JourneyGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: journey_grid.default.primary.journey[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  journey: prismic.GroupField<
    Simplify<JourneyGridSliceDefaultPrimaryJourneyItem>
  >;
}

/**
 * Default variation for JourneyGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type JourneyGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<JourneyGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *JourneyGrid*
 */
type JourneyGridSliceVariation = JourneyGridSliceDefault;

/**
 * JourneyGrid Shared Slice
 *
 * - **API ID**: `journey_grid`
 * - **Description**: JourneyGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type JourneyGridSlice = prismic.SharedSlice<
  "journey_grid",
  JourneyGridSliceVariation
>;

/**
 * Primary content in *Registration → Default → Primary*
 */
export interface RegistrationSliceDefaultPrimary {
  /**
   * Heading field in *Registration → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: registration.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;
}

/**
 * Default variation for Registration Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RegistrationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RegistrationSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Registration*
 */
type RegistrationSliceVariation = RegistrationSliceDefault;

/**
 * Registration Shared Slice
 *
 * - **API ID**: `registration`
 * - **Description**: Registration
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RegistrationSlice = prismic.SharedSlice<
  "registration",
  RegistrationSliceVariation
>;

/**
 * Primary content in *StepAndImage → Default → Primary*
 */
export interface StepAndImageSliceDefaultPrimary {
  /**
   * Theme field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<"Blue" | "Orange" | "Navy" | "Lime">;

  /**
   * Heading field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Background Image field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.foreground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;

  /**
   * Extra Image field in *StepAndImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.default.primary.extra_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  extra_image: prismic.ImageField<never>;
}

/**
 * Default variation for StepAndImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepAndImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StepAndImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *StepAndImage → Image on Left → Primary*
 */
export interface StepAndImageSliceImageOnLeftPrimary {
  /**
   * Theme field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<"Dust" | "Lime" | "Navy" | "Cherry">;

  /**
   * Heading field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Background Image field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.foreground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;

  /**
   * Extra Image field in *StepAndImage → Image on Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_and_image.imageOnLeft.primary.extra_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  extra_image: prismic.ImageField<never>;
}

/**
 * Image on Left variation for StepAndImage Slice
 *
 * - **API ID**: `imageOnLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepAndImageSliceImageOnLeft = prismic.SharedSliceVariation<
  "imageOnLeft",
  Simplify<StepAndImageSliceImageOnLeftPrimary>,
  never
>;

/**
 * Slice variation for *StepAndImage*
 */
type StepAndImageSliceVariation =
  | StepAndImageSliceDefault
  | StepAndImageSliceImageOnLeft;

/**
 * StepAndImage Shared Slice
 *
 * - **API ID**: `step_and_image`
 * - **Description**: StepAndImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepAndImageSlice = prismic.SharedSlice<
  "step_and_image",
  StepAndImageSliceVariation
>;

/**
 * Primary content in *TeamGrid → Default → Primary*
 */
export interface TeamGridSliceDefaultPrimary {
  /**
   * Heading field in *TeamGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_grid.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Default variation for TeamGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TeamGrid*
 */
type TeamGridSliceVariation = TeamGridSliceDefault;

/**
 * TeamGrid Shared Slice
 *
 * - **API ID**: `team_grid`
 * - **Description**: TeamGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamGridSlice = prismic.SharedSlice<
  "team_grid",
  TeamGridSliceVariation
>;

/**
 * Primary content in *VideoBlock → Default → Primary*
 */
export interface VideoBlockSliceDefaultPrimary {
  /**
   * YouTube Video ID field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.youtube_video_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  youtube_video_id: prismic.KeyTextField;

  /**
   * Heading field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Enactus field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.enactus
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  enactus: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Body field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for VideoBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *VideoBlock*
 */
type VideoBlockSliceVariation = VideoBlockSliceDefault;

/**
 * VideoBlock Shared Slice
 *
 * - **API ID**: `video_block`
 * - **Description**: VideoBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSlice = prismic.SharedSlice<
  "video_block",
  VideoBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      RegistrationDocument,
      RegistrationDocumentData,
      RegistrationDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataFooterIconsItem,
      SkaterDocument,
      SkaterDocumentData,
      SocialsDocument,
      SocialsDocumentData,
      StepsDocument,
      StepsDocumentData,
      TeamDocument,
      TeamDocumentData,
      TeamDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      JourneyGridSlice,
      JourneyGridSliceDefaultPrimaryJourneyItem,
      JourneyGridSliceDefaultPrimary,
      JourneyGridSliceVariation,
      JourneyGridSliceDefault,
      RegistrationSlice,
      RegistrationSliceDefaultPrimary,
      RegistrationSliceVariation,
      RegistrationSliceDefault,
      StepAndImageSlice,
      StepAndImageSliceDefaultPrimary,
      StepAndImageSliceImageOnLeftPrimary,
      StepAndImageSliceVariation,
      StepAndImageSliceDefault,
      StepAndImageSliceImageOnLeft,
      TeamGridSlice,
      TeamGridSliceDefaultPrimary,
      TeamGridSliceVariation,
      TeamGridSliceDefault,
      VideoBlockSlice,
      VideoBlockSliceDefaultPrimary,
      VideoBlockSliceVariation,
      VideoBlockSliceDefault,
    };
  }
}
