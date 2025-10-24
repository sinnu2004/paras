# 🌀 Parax 3D — Portfolio Website  

> **“Bringing Unreal Imagination to Life.”**  
> A modern, interactive, and responsive 3D artist portfolio website built to showcase cinematic environments, 3D animation, and Unreal Engine artistry.

---

## 🌐 Overview  

**Parax 3D** is a personal portfolio web application designed for **3D Artist and Unreal Engine Creator, Paras Singh**.  
It highlights professional projects, showreels, and contact information within a polished, cinematic interface that reflects the artist’s creative aesthetic.

The website features a **hero video background**, **interactive intro animation**, **project previews with hover-triggered videos**, and a **mobile-responsive design**.  

---

## 🧩 Features  

### 🎬 Hero Section
- Fullscreen **auto-playing hero video** with fallback image.
- **Intro overlay animation** that plays once per session (via `sessionStorage`).
- Role-based headings and CTA buttons for quick navigation.

### 🧱 Projects Page
- **Grid-based responsive layout** displaying 3D project thumbnails.  
- Hover-to-play video previews for each project.  
- Smooth transitions between static thumbnails and video content.  
- “See Project” overlay button and project metadata.

### 📱 Responsive Design
- Custom **CSS media queries** for:
  - Mobile devices (>= 360px && <= 480)
  - Tablets (361px – 768px)
  - Laptops (769px – 1024px)
  - Desktops (1025px – 1440px)

### 🧭 Navigation
- Responsive navigation bar with **hamburger menu** for mobile.  
- Animated toggle for showing/hiding navigation links.  

### 👤 About Page
- Artist introduction and profile image section.  
- Skills and software proficiency grid (Blender, Unreal Engine, Substance Painter, etc.).  

### ✉️ Contact Page
- Clean contact form layout for inquiries.  
- Integrated with consistent styling across the website.

---

## 🛠️ Tech Stack  

| Category | Tools / Technologies |
|-----------|----------------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Design** | Responsive Grid & Flexbox Layouts |
| **Animations** | CSS Transitions & Keyframes |
| **Media Handling** | HTML5 `<video>` element, custom autoplay retry logic |
| **Accessibility** | Semantic HTML, ARIA attributes, keyboard navigation support |
| **Version Control** | Git & GitHub |
| **Deployment Ready** | Fully static — supports GitHub Pages, Netlify, or Vercel |

---

## 📂 Folder Structure  

paras/
│
├── index.html # Main homepage with hero video
├── projects.html # Projects grid with hover previews
├── about.html # About section for the artist
├── contact.html # Contact form page
│
├── css/
│ └── style.css # Main stylesheet (responsive + media queries)
│
├── js/
│ ├── main.js # Intro overlay + hero video autoplay handler
│ ├── projects.js # projects grid + project links
│ └── common-nav.js # Navigation bar interactivity
│
├── assets/
│ ├── icons/ # logo, icons
│ ├── images/ # Thumbnails, backgrounds, and posters
│ └── video/ # Hero and project preview videos
│
└── README.md # Project documentation


---

## ⚙️ Installation & Setup  

1. **Clone the repository**
   ```bash
   git clone https://github.com/sinnu2004/paras.git


Open the project

cd paras


Run locally

Simply open index.html in your preferred browser.

Or, use a local server for better performance:

npx serve

and visit http://localhost:3000.

🧩 MVP Scope

Objective:
Deliver a professional, responsive, and interactive portfolio website that effectively showcases 3D design skills with minimal friction and modern UX.

Minimum Viable Features:

Fully functional navigation between pages

Intro animation (shown once per session)

Autoplaying hero video

Responsive project previews with hover-triggered playback

Cross-browser compatibility

🚀 Future Enhancements

Add light/dark mode toggle

Integrate contact form backend (Node.js / Firebase)

Implement lazy loading for videos and images

SEO optimization and structured metadata

Add blog or case study pages

📸 Screenshots
Home (Hero Section)	Projects Page

<img width="1337" height="411" alt="Screenshot 2025-10-24 152734" src="https://github.com/user-attachments/assets/aa311589-6a74-4a16-adf1-f06bca631310" />
<img width="1244" height="527" alt="Screenshot 2025-10-24 152709" src="https://github.com/user-attachments/assets/12c4652a-7ad5-4e54-8043-821bc160c6fd" />

This project is licensed under the MIT License — you’re free to use, modify, and distribute it with attribution.

⭐ Contributing

Pull requests are welcome!
If you’d like to suggest an improvement or report a bug:

Fork the repository.

Create a feature branch (git checkout -b feature/awesome-feature).

Commit your changes.

Open a Pull Request.
