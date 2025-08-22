export type LatestItem = {
  id: string
  title: string
  date: string
  tags?: string[]
  summary: string
  body: string
  image?: string
}

export const latestItems: LatestItem[] = [
  {
    id: 'brand-banhao',
    title: 'Game BANHAO Business Simulator',
    date: '2025-08-10',
    tags: ['Game Indie', 'Simulator','Management'],
    summary:
      'Banhao Business Simulator เกมเปิดธุรกิจแปรรูปจากร้านในชนบทสู่เมืองใหญ่',
    body:
      'Banhao Business Simulator เกมเปิดธุรกิจแปรรูปจากร้านในชนบทสู่เมืองใหญ่',
    image:
      '/images/banhaobusiness.png',
  },
]
