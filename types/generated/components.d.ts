import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDoubleImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_double_images';
  info: {
    displayName: 'Double-Image';
  };
  attributes: {
    Left_Image: Schema.Attribute.Media<'images'>;
    Right_Image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksSectionEvents extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_events';
  info: {
    displayName: 'Section-Events';
  };
  attributes: {
    evenements: Schema.Attribute.Relation<
      'oneToMany',
      'api::evenement.evenement'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSectionNews extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_news';
  info: {
    displayName: 'Section-News';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSectionSponsors extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_sponsors';
  info: {
    displayName: 'Section-Sponsors';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.double-image': BlocksDoubleImage;
      'blocks.hero': BlocksHero;
      'blocks.section-events': BlocksSectionEvents;
      'blocks.section-news': BlocksSectionNews;
      'blocks.section-sponsors': BlocksSectionSponsors;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
