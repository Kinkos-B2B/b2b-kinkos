export type BizHeroSectionData = {
  badge: string
  title: string
  description: string
  images: {
    url: string
    alt: string
  }[]
}

export type BizDescriptionBannerData = {
  title: string
  badgeText: string
  description: string
}

export type BizDescriptionItem = {
  badge?: string
  title: string
  description?: string
  images: {
    url: string
    alt: string
  }[]
  infos: {
    name: [string, string] | string
    description?: string
  }[]
  pdfLinkButton?: {
    text: string
    link: string
  }
}

export type BizVideoSectionData = {
  thumbnailUrl: {
    url: string
    alt: string
  }[]
  title: string
  description: string
  buttonText: string
  buttonLink?: string
  moreInfoButtonText?: string
  moreInfoLink?: {
    url: string
    target: '_self' | '_blank'
  }
}

export type BizDescriptionWithBannerProps = {
  banner: BizDescriptionBannerData
  descriptionItem: BizDescriptionItem
}
