Viro Xyz System

🏫 Overview

Viro Xyz is a multi-page web platform developed for educational interface simulation, front-end experimentation, and internal navigation testing.

The system is designed to present a standard, district-style informational website while supporting additional internal tools and environments accessible through controlled entry points.

---

🧩 System Structure

The platform consists of the following primary components:

- Home ("index.html")
  Public-facing landing page styled as a standard school website.

- Staff Portal ("login.html")
  Authentication interface used to route users to different internal environments.

- Student/Info Pages
  
  - "bio.html"
  - "downloads.html"
  - "other.html"

- Internal Environments
  
  - "browser.html" – Main internal navigation hub
  - "dev.html" – Development and testing interface

---

🔐 Authentication Routing

The system includes a multi-route authentication handler within the Staff Portal.
Access behavior is determined by credential input:

Username| Password| Destination
(empty)| (empty)| "home.html"
Viro| xyz| "browser.html"
dev| zyx| "dev.html"

This structure allows for controlled navigation between public and internal environments without exposing system functionality on the main interface.

---

⚙️ Core Features

- Standardized educational portal UI design
- Modular multi-page architecture
- Credential-based routing system
- Hidden configuration and theme controls
- Responsive layout for desktop and mobile devices
- Separation of public interface and internal tools

---

🎯 Intended Use

This project is intended for:

- UI/UX prototyping
- Web development practice
- Interface simulation and testing
- Demonstration of multi-layer navigation systems

---

⚠️ Disclaimer

«This system is a development and demonstration project.
It is not affiliated with any real school, district, or institution.
Any resemblance to real systems is for simulation purposes only.»

---

📄 License

This project is licensed under the MIT License.
Refer to the LICENSE file for full terms.
