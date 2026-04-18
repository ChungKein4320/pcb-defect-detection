# Dataset

Thư mục này chứa dữ liệu phục vụ cho bài toán **PCB Defect Detection**.

> ⚠️ Lưu ý: Dataset KHÔNG được lưu trực tiếp trong repository do giới hạn dung lượng của GitHub.  
> Bạn cần tải dữ liệu từ Google Drive theo hướng dẫn bên dưới.

---

## 📁 Directory Structure

```text
data/
├── raw/         # dữ liệu gốc (DeepPCB, DsPCBSD+, HRIPCB)
└── processed/   # dữ liệu đã xử lý, sẵn sàng cho training
```

---

## ⬇️ Download Dataset

### 1. Raw Data (dùng để chạy toàn bộ pipeline)

Tải các file ZIP tại:

👉 https://drive.google.com/drive/folders/1_gHqrleVzqLt2MwssdQ94P-b-7qgR9-t

Sau khi tải về, giải nén vào:

```text
data/raw/
```

---

### 2. Processed Data (dùng trực tiếp để train)

Tải các file ZIP tại:

👉 https://drive.google.com/drive/folders/1Yy-MRvs-jI4r0yJKIi0pxuaAnKKOLcSZ

Sau khi tải về, giải nén vào:

```text
data/processed/
```

---

## 📦 Dataset Sources

Dự án sử dụng và kết hợp các bộ dữ liệu PCB defect sau:

- **DeepPCB**
- **DsPCBSD+**
- **HRIPCB**

---

## 🧪 Usage Guide

### ✔️ Trường hợp 1: Muốn tái tạo toàn bộ pipeline

- Tải **raw data**
- Giải nén vào `data/raw/`
- Chạy các notebook trong thư mục `notebooks/` theo thứ tự

---

### ✔️ Trường hợp 2: Muốn train model ngay

- Tải **processed data**
- Giải nén vào `data/processed/`
- Sử dụng trực tiếp cho training (YOLO, DETR, ...)

---

## 🧾 Data Format

Dữ liệu sau khi xử lý được chuẩn hóa về định dạng tương thích với YOLO:

```text
dataset/
├── images/
├── labels/
└── data.yaml
```

- `images/`: chứa ảnh
- `labels/`: chứa annotation dạng YOLO (txt)
- `data.yaml`: file cấu hình dataset cho training

---

## 🔁 Reproducibility

Để tái tạo dataset đã xử lý:

1. Tải raw dataset
2. Đặt vào `data/raw/`
3. Chạy các notebook trong thư mục `notebooks/`

---

## 💡 Notes

- Thư mục `data/` được ignore trong `.gitignore`
- Chỉ file `data/README.md` được giữ lại để hướng dẫn sử dụng
- Đảm bảo đặt đúng cấu trúc thư mục trước khi training

---

## 📌 Summary

| Mục tiêu | Cách làm |
|--------|--------|
| Chạy pipeline từ đầu | Dùng `raw/` |
| Train nhanh | Dùng `processed/` |
| Hiểu dataset | Đọc file này |