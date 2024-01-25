import { z } from 'zod';

const FooterSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('footer'),
});

const HeaderSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('header'),
  links: z.array(
    z.object({
      _key: z.string().nullable(),
      _type: z.literal('page'),
      slug: z.object({
        _type: z.literal('slug'),
        current: z.string().nullable(),
      }),
      title: z.string().nullable(),
    })
  ),
  dropdown: z.array(
    z.object({
      _key: z.string().nullable(),
      _type: z.literal('dropdownItem'),
      svg: z.string().nullable(),
    })
  ),
  logo: z
    .object({
      _key: z.string().nullable(),
      _type: z.literal('image'),
      src: z.string().nullable(),
      alt: z.string().nullable(),
    })
    .nullable(),
});

const CampaignSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('campaign'),
});

const TrendingSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('trending'),
});

const SubscriptionSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('subscription'),
  title: z.string().nullable(),
  description: z.string().nullable(),
  cta: z.string().nullable(),
  placeholder: z.string().nullable(),
  buttonLabel: z.string().nullable(),
  disclaimer: z.string().nullable(),
});

const SectionBuilderSchema = z.union([
  CampaignSectionSchema,
  FooterSectionSchema,
  HeaderSectionSchema,
  SubscriptionSectionSchema,
  TrendingSectionSchema,
]);

const SectionsSchema = z.object({
  _type: z.literal('section'),
  pageBuilder: z.array(SectionBuilderSchema),
});

export const PageSchema = z
  .object({
    title: z.string().nullable(),
    sections: SectionsSchema,
  })
  .optional();

export type Page = z.infer<typeof PageSchema>;
