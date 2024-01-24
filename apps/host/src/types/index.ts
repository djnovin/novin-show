import { z } from 'zod';

const FooterSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('footer'),
});

const HeaderSectionSchema = z.object({
  _key: z.string().nullable(),
  _type: z.literal('header'),
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
