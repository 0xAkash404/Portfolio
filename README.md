# 🛡️ Cybersecurity Portfolio - Akash Singh

A modern, responsive personal portfolio website showcasing cybersecurity expertise, projects, and achievements.

**Live Portfolio:** https://0xAkash404.github.io/Portfolio

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with animations
- 🌓 **Dark/Light Mode** - Theme toggle with local storage
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 📊 **Project Showcase** - Display projects with images and categories
- 📝 **Contact Form** - Integrated FormSpree for email submissions
- 📄 **Download CV** - Easy resume download button
- 🔗 **Social Links** - LinkedIn, GitHub, TryHackMe integration
- ⚡ **Smooth Transitions** - Fade animations between pages

---

## 📂 Portfolio Sections

### **About**
- Professional bio
- Core competencies (Security Tools, Network Security, Linux & Kali Systems, Hands-on Practice)
- Tech stack display

### **Resume**
- Education (BCA from SGTBIMIT)
- Experience (GrassTech Internship)
- Certifications (IBM Cybersecurity, TryHackMe, Cloud)
- Skills with progress indicators

### **Projects**
- **DNS Record & Geo Lookup Tool** (Security)
- **AI Image Generator Tool** (Tools)
- **TryHackMe Practice Labs** (Labs)
- **Home Lab Setup** (Security)
- **VulnScanner** (Security)

Filterable by category with project images and links.

### **Contact**
- Google Map (Delhi location)
- Contact form with validation
- Email, Phone, and Location details
- Social media links

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Interactive features (vanilla, no frameworks)
- **Ionicons** - Icon library
- **FormSpree** - Email service
- **Google Fonts** - Poppins & Brush Script MT

---

## 📋 File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── style.css               # All styling
├── main.js                 # JavaScript functionality
├── README.md               # This file
└── assets/
    ├── images/             # Project screenshots & icons
    │   ├── akash_singh.webp
    │   ├── Security_tools.png
    │   ├── kali_linux_icon.png
    │   ├── DNS Record & Geo Lookup.png
    │   ├── AI Image Generator Tool.png
    │   ├── TryHackMe Practice Labs.png
    │   ├── home Lab Setup_Security.png
    │   └── VulnScanner_Security.png
    └── pdf/                # Documents
        ├── Akash_Resume.pdf
        └── dns_project.pdf
```

---

## 🚀 Quick Start

### **View Locally**
1. Clone this repository
2. Open `index.html` in your browser
3. That's it! No installation needed.

### **Deploy to GitHub Pages**
1. Fork/clone this repository
2. Enable GitHub Pages in settings
3. Set source to `main` branch, `/root` folder
4. Visit `https://yourusername.github.io/Portfolio`

---

## 🎨 Customization

### **Change Colors**
Edit CSS variables in `style.css` (lines 17-69):
```css
:root {
  --orange-yellow-crayola: hsl(45, 100%, 72%);
  --smoky-black: hsl(0, 0%, 7%);
  /* Update other colors */
}
```

### **Update Content**
Edit `index.html` directly:
- Profile info (lines 44-55)
- About section (lines 198-206)
- Projects (lines 745-833)
- Contact form (lines 873-888)

### **Add New Project**
Add to projects list in HTML:
```html
<li class="project-item active" data-filter-item data-category="security">
  <a href="#" class="project-link" data-github-link="your-link">
    <figure class="project-img">
      <div class="project-item-icon-box">
        <ion-icon name="eye-outline"></ion-icon>
      </div>
      <img src="./assets/images/project-name.png" alt="Project">
    </figure>
    <h3 class="project-title">Project Title</h3>
    <p class="project-category">Category</p>
  </a>
</li>
```

---

## 📧 Contact Form Setup

To enable email submissions:
1. Go to [FormSpree](https://formspree.io)
2. Create an account
3. Create a form and get your form ID
4. Replace form action in `index.html` (line 873):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Current ID: `mjgzgdqr`

---

## 🌐 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

---

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

---

## 🔐 Security Features

- ✅ Phone number hidden by default (Show Contacts button)
- ✅ No sensitive data in public code
- ✅ FormSpree handles email securely
- ✅ HTTPS on GitHub Pages

---

## 📊 Performance

- ⚡ Lightweight (No frameworks)
- ⚡ Fast load times
- ⚡ Optimized images (WebP format)
- ⚡ Minimal CSS/JS

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💼 About

**Akash Singh** - Cybersecurity Enthusiast

- 📧 Email: akashsingh.130912@gmail.com
- 📱 Phone: +91 9667108394
- 📍 Location: Delhi, India
- 🔗 LinkedIn: [@0xAkash404](https://linkedin.com/in/0xAkash404)
- 🐙 GitHub: [@0xAkash404](https://github.com/0xAkash404)
- 🎮 TryHackMe: [@0xAkash404](https://tryhackme.com/p/0xAkash404)

---

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue!

---

## 🎯 Certifications

- ✅ IBM Cybersecurity Fundamentals
- ✅ TryHackMe - Advent of Cyber 2025
- ✅ IBM Cloud Computing Fundamentals
- ✅ IBM Cloud Essentials

---

**Made with ❤️ by Akash Singh**
