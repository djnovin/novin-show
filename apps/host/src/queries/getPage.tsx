import groq from 'groq';
import { PageSchema } from '../types';
import { ZodSchema } from 'zod';
import { createClient } from '@sanity/client';

export const getPageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    sections {
      _type,
      pageBuilder[]->{
        _key,
        _type,
        ...,
        _type == 'header' => {
            _type,
            links[] {
              ...
                link -> {
                  ...
                }
            },
        },
        _type == 'footer' => {
            _type,
        },
        _type == 'trending' => {
            _type,
        },
        _type == 'campaign' => {
            _type,
        },
        _type == 'subscription' => {
            _key,
            _type,
            buttonLabel,
            cta,
            description,
            disclaimer,
            placeholder,
            title,
        },
      }
    }
  }
`;

const sanityClient = createClient({
  projectId: 'aaqhrehm',
  dataset: 'production',
  apiVersion: '2022-03-07',
  token:
    'skWiSmjWxbMIrRpt3hVndPWyGJuckL2a0gKrtj0VDW2ZpCIiZ8wks7kU78ufYs0M0tNYaEjQLd370khR0DXk7a5OP6BpCs0djydOw2n44kiVsVHJls6nXKBiDymYQaGb9ImfqD4IqJgOLKAexgbrnXUnQSFZgpRsYc6vHpdTD8xgSLCNZ3z2',
});

export const fetcher = async (
  query: string,
  variables: Record<string, string>,
  schema: ZodSchema
) => {
  const res = await sanityClient.fetch(query, variables);

  try {
    schema.parse(res);
  } catch (err) {
    console.error(err);
  }

  return res;
};
