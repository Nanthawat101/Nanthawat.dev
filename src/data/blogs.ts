export type BlogPost = {
  id: string
  title: string
  date: string
  read: string
  summary: string
  body: string
  cover?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'dont-waste-youth',
    title: 'อย่าปล่อยให้ช่วงวัยรุ่นหมดไปกับความเสียดาย',
    date: '2025-08-23',
    read: '3 min',
    summary: 'ใช้เวลานี้ให้คุ้มค่า เรียนรู้และพัฒนาตัวเอง เพื่อไม่ต้องเสียใจในอนาคต',
    cover: '/images/youth-talk-cover.jpg',
    body: "",
  },
]
