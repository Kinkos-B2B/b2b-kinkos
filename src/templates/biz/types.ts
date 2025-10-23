export type BizHeroSectionData = {
  badge: string
  title: string
  description: string
  images: string[]
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
  images: string[]
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
  title: string
  description: string
  buttonText: string
  buttonLink: string
  moreInfoButtonText?: string
  moreInfoLink?: string
}

export type BizDescriptionWithBannerProps = {
  banner: BizDescriptionBannerData
  descriptionItem: BizDescriptionItem
}
