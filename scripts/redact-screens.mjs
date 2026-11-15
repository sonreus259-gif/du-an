// Che trắng hình học (hình chữ nhật trắng thuần, không blur, không tạo lại nội dung) lên ảnh chụp thật. Xuất WebP lossy nên không gọi là pixel-exact.
// Nguồn: thư mục kênh chung (không commit). Kết quả: src/assets/projects/*.webp (chỉ bản đã che).
// Dùng: node scripts/redact-screens.mjs <thư mục nguồn BA_PORTFOLIO/assets> [--preview <thư mục>]
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const src = process.argv[2];
if (!src) { console.error('Thiếu đường dẫn nguồn'); process.exit(2); }
const out = 'src/assets/projects';
mkdirSync(out, { recursive: true });

const lmsLogo = [25, 4, 115, 50];
const set = {
  'lms-private/01-dashboard.jpg': ['lms-1', [lmsLogo, [254, 526, 98, 58]]],
  'lms-private/02-courses.jpg': ['lms-2', [lmsLogo, [222, 325, 272, 153], [522, 417, 126, 26], [592, 530, 108, 22], [716, 603, 70, 30]]],
  'lms-private/03-admin-overview.jpg': ['lms-3', [lmsLogo]],
  'lms-private/04-learning-paths.jpg': ['lms-4', [lmsLogo]],
  'construction-private/01-overview.jpg': ['cons-1', [[10, 12, 172, 36], [798, 10, 240, 52], [254, 66, 340, 30], [464, 96, 224, 22], [336, 757, 76, 24], [770, 640, 64, 22]]],
  'construction-private/02-projects.jpg': ['cons-2', [[10, 12, 172, 36], [796, 10, 244, 52], [266, 294, 76, 24], [698, 280, 152, 36]]],
  'construction-private/03-project-detail.jpg': ['cons-3', [[10, 12, 172, 36], [800, 10, 236, 52], [446, 534, 182, 23]]],
  'construction-private/04-tender.jpg': ['cons-4', [[10, 12, 176, 40], [826, 10, 244, 52], [342, 222, 80, 38], [902, 220, 112, 42], [902, 282, 112, 44]]],
  'construction-private/05-rfq.jpg': ['cons-5', [[10, 12, 176, 40], [826, 10, 244, 52]]],
};

for (const [file, [name, rects]] of Object.entries(set)) {
  const img = sharp(join(src, file));
  const { width, height } = await img.metadata();
  const white = (await Promise.all(rects.map(async ([l, t, w, h]) => ({
    input: await sharp({ create: { width: Math.min(w, width - l), height: Math.min(h, height - t), channels: 3, background: '#ffffff' } }).png().toBuffer(),
    left: l, top: t,
  }))));
  await img.composite(white).webp({ quality: 88 }).toFile(join(out, `${name}.webp`));
  console.log(name, width, height, rects.length, 'vùng che');
}
