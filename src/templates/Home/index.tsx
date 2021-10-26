import Head from 'next/head';

import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';

import config from '../../config';

import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type SectionsProps = (
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps
) & { component: string };

type PageDataProps = {
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  title: string;
  slug: string;
  footerHtml: string;
  sections: SectionsProps[];
};

export type HomeProps = {
  data: PageDataProps[];
};

function Home({ data }: HomeProps) {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return (
            <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
          );
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...(section as GridTextProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;
