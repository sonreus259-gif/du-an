# Kê khai ảnh bằng chứng

Mỗi thư mục ghi rõ chụp tại revision nào. **Chỉ `f1/` phản ánh bản cuối**; các thư mục cũ giữ để đối chiếu lịch sử và có thể còn banner/dòng nháp/dự án mẫu đã gỡ.

| Thư mục | Chụp tại | Trạng thái | Ghi chú |
|---|---|---|---|
| `f1/` | **`e74286c`** (cây làm việc = HEAD lúc chụp, không có thay đổi chưa commit) | **MỚI NHẤT** | Chrome không giao diện, cờ `--run-all-compositor-stages-before-draw` và `--virtual-time-budget=40000`. Mobile chụp qua khung iframe 375 px thật (Chrome không giao diện có cửa sổ tối thiểu ~500 px). `rm-*` dùng `--force-prefers-reduced-motion`; các tệp còn lại ở chế độ no-preference. |
| `b3/` | `8cdf6c5` … `2df8e52` (nhiều lần chụp khác nhau) | LỖI THỜI một phần | `gt-d.png`, `pj-m-hero.png` và vài ảnh khác chụp trước `f228e79` nên còn banner "Bản xem trước"/dòng nháp/dự án mẫu. Không dùng làm bằng chứng bản cuối. |
| `2026-11-16-0115-after-d171fa4/` | sau `d171fa4`, trước `659e69c`/`02df3eb` | LỖI THỜI | Hero/tên đường dẫn cũ (`/du-an/du-an/`). |

## Ghi chú kỹ thuật
- Ảnh chụp không giao diện có thể thiếu ảnh tải chậm nếu không dùng cờ chờ vẽ; đã kiểm bằng số đo (độ lệch chuẩn vùng khu nổi bật 28,8 > 6 nên không trống).
- Ảnh `rm-*` và ảnh thường gần giống vì viewport cao khiến mọi phần tử reveal đã hiện; sự khác biệt chuyển động được đo bằng script, không thấy được trong ảnh tĩnh.
- Ảnh tĩnh không chứng minh chuyển động. Số đo chuyển động nằm trong báo cáo kiểm thử.
- Ảnh trong `f1/` lưu cùng commit chứa tệp này (commit ngay sau `e74286c`).

> Ghi chú 16/11: ảnh chụp trong `f1/` (revision `e74286c`) được chụp TRƯỚC khi gỡ ảnh AI; các ảnh đó còn hiển thị ảnh AI đã bị gỡ. Chỉ dùng làm tư liệu lịch sử, không phản ánh giao diện hiện tại.

## f2 — bằng chứng cho revision `54f3739` (16/11, chạy local, desktop 1440 px, reduced-motion bật)
`docs/evidence/f2/`: d-home, d-projects, d-lms, d-xaydung, d-chuyenmon, d-ketoan, d-gioithieu. Thay thế `f1/` làm bằng chứng HEAD. Chưa có bản mobile lưu tệp (đã đo không tràn ngang ở 375 px bằng số) và chưa chụp 3 dự án còn lại.

## f3 — bổ sung cho bản đã deploy (main 368427d, 16/11, chạy local, reduced-motion bật)
`docs/evidence/f3/`: mobile 390 px (khung iframe) cho 10 trang — home, projects, lms, xaydung, tuyendung, banhang, tuvan, chuyenmon, ketoan, gioithieu; desktop 1440 px cho 3 dự án còn lại. Ảnh dự án LMS/xây dựng là screenshot thật đã che trắng hình học (xuất WebP lossy, không gọi là pixel-exact). Chưa có: menu mobile mở, tải lại URL chi tiết trên Pages thật bằng trình duyệt.
