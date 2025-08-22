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
    title: 'Banhao Business Simulator Game',
    date: '2025-08-10',
    tags: ['Game Indie', 'Simulator','Management',],
    summary:
      'Banhao Business Simulator เกมเปิดธุรกิจแปรรูปจากร้านในชนบทสู่เมืองใหญ่',
    body:
      'Banhao Business Simulator เกมเปิดธุรกิจแปรรูปจากร้านในชนบทสู่เมืองใหญ่',
    image:
      '/images/banhaobusiness.png',
  },
  {
    id: 'brand-indie',
    title: 'Bunny Simple Game',
    date: '2025-07-10',
    tags: ['Game Indie','Skill Practice Project'],
    summary:
      'Bunny Simple Game คือโปรเจกต์เกมแนวทำเควสเก็บของง่าย ๆ ที่เต็มไปด้วยความสนุกสนาน',
    body:
      'Bunny Simple Game – โปรเจกต์เกมชิ้นแรกในรั้วมหาวิทยาลัย เกมง่าย ๆ แนวเก็บของและทำเควส ที่ผมพัฒนาขึ้นเป็น Final Project ซัมเมอร์ ปี 1 มหาวิทยาลัยกรุงเทพ',
    image:
      '/images/bunnygame.png',
  },
  {
    id: 'brand-banhao',
    title: 'Game Banhao Farming Simulator Game',
    date: '2025-07-10',
    tags: ['Game Indie', 'Simulator','Farming'],
    summary:
      'BANHAO Farming Simulator เกมที่จะพาคุณกลับบ้าน',
    body:
      'เกม BANHAO เป็นเกมแนว Farming Simulator ที่มีบรรยากาศเป็นชนบทภาคอีสาน เป้าหมายหลักของผู้เล่นคือการวางแผนเก็บเงินให้ได้ตามเป้าหมายก่อนวันที่ 31 เพื่อจ่ายหนี้ 30,000 บาท หากสามารถทำได้ ผู้เล่นจะชนะเกม แต่หากไม่สามารถทำได้ เกมจะจบลง',
    image:
      '/images/banhaofarming.png',
  },
]
