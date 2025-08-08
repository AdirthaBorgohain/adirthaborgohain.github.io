# Adirtha Borgohain - Personal Portfolio

This repository contains the source code for my personal one-page portfolio website. It is built from scratch using Jekyll, designed to be minimalist, monochrome, and easily maintainable. The entire site is data-driven, meaning content updates can be made by editing simple YAML files without touching the HTML.

**[➡️ Live Demo](https://adirtha-borgohain.github.io/)**

![Portfolio Screenshot](./assets/images/screenshot.png)

---

## ✨ Features

-   **Minimalist & Monochrome Design:** A clean, professional look with a focus on typography and subtle visual elements.
-   **Light/Dark Mode:** A stylish theme toggle that persists the user's preference in their browser.
-   **Sticky Header Navigation:** Main navigation is always accessible for a smooth user experience.
-   **Data-Driven Content:** Experience, skills, and projects are managed in simple `.yml` files, making content updates incredibly easy.
-   **Responsive & Mobile-First:** The layout is fully responsive and looks great on all devices, from mobile phones to desktops.
-   **Featured Project Showcase:** A visually distinct section to highlight a primary project or live website.
-   **Optimized for GitHub Pages:** Built with Jekyll, allowing for free and easy deployment directly from this repository.

---

## 🚀 Technology Stack

-   **Static Site Generator:** [Jekyll](https://jekyllrb.com/)
-   **Styling:** [SCSS (Sass)](https://sass-lang.com/)
-   **Data Files:** YAML
-   **Interactivity:** Vanilla JavaScript
-   **Icons:** [Font Awesome](https://fontawesome.com/)

---

## 🛠️ How to Run Locally

To run the website on your local machine, you'll need to have Ruby and Jekyll installed.

1.  **Prerequisites:**
    -   [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (version 2.5.0 or higher)
    -   Bundler and Jekyll gems. You can install them by running:
        ```bash
        gem install jekyll bundler
        ```

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/AdirthaBorgohain/AdirthaBorgohain.github.io.git
    cd AdirthaBorgohain.github.io
    ```

3.  **Install Dependencies:**
    This will install all the required gems listed in the `Gemfile`.
    ```bash
    bundle install
    ```

4.  **Serve the Site:**
    This command builds the site and starts a local server.
    ```bash
    bundle exec jekyll serve
    ```

5.  **View in Browser:**
    Open your web browser and navigate to `http://localhost:4000`. The site will automatically reload whenever you make changes to the source files.

---

## 🌐 How to Deploy on GitHub Pages

This site is configured to be deployed as a "User or Organization Page" on GitHub Pages.

1.  **Repository Name:**
    Your repository **must** be named `your-username.github.io` (where `your-username` is your GitHub username).

2.  **Push Your Code:**
    Commit and push your changes to the `main` branch.
    ```bash
    git push origin main
    ```

3.  **Configure GitHub Pages Settings:**
    -   In your repository on GitHub, go to `Settings` > `Pages`.
    -   Under "Build and deployment", ensure the `Source` is set to **"Deploy from a branch"**.
    -   Ensure the `Branch` is set to **`main`** and the folder is set to **`/(root)`**.
    -   Click **Save**.

GitHub will automatically build your Jekyll site and deploy it. After a few minutes, your portfolio will be live at `https://your-username.github.io`.

---

## ✍️ How to Update Content

The biggest advantage of this portfolio is that you almost never need to touch the HTML. All content is managed in configuration (`_config.yml`) or data (`_data/*.yml`) files.

### Main Configuration

-   **File to Edit:** `_config.yml`
-   **What to change:** Your `name`, `job_title`, `email`, `description`, and social media usernames (`github_username`, `linkedin_username`).

### About Section & Skills

-   **Your Photo:** Replace the image at `assets/images/adirtha.jpg` with your own.
-   **Your Skills:** Edit the file `_data/skills.yml`. You can add or remove categories and items by following the existing format:
    ```yml
    - category: Category Name
      items:
        - Skill 1
        - Skill 2
    ```

### Experience Section

-   **File to Edit:** `_data/experience.yml`
-   To add a new job, simply copy an existing entry and paste it at the top of the list. Then, fill in the details.
    ```yml
    - company: New Company Inc.
      company_url: https://newcompany.com
      location: City, Country
      title: Your New Title
      duration: Month Year – Present
      details:
        - "Responsibility one."
        - "Responsibility two."
    ```

### Projects Section

-   **File to Edit:** `_data/projects.yml`
-   There are two types of projects: **featured** and **regular**.

-   **To add a new Featured Project:**
    -   Add an entry with `featured: true`.
    -   Make sure to add a screenshot to `assets/images/`.
    ```yml
    - title: My Awesome App
      description: A great description of the project.
      tags:
        - React
        - Node.js
      url: https://my-live-app.com
      github_url: https://github.com/user/repo # Optional
      image: /assets/images/my-app-screenshot.png
      featured: true
    ```

-   **To add a new Regular Project (GitHub Repo):**
    -   Add an entry with `featured: false` or omit the featured flag.
    ```yml
    - title: Another Cool Project
      description: A description of this repository.
      tags:
        - Python
        - API
      url: https://github.com/user/another-repo
      featured: false
    ```

### Resume PDF

-   **File to Replace:** `assets/pdf/Adirtha_Borgohain_Resume.pdf`
-   To update your resume, simply replace this file with your new PDF. Make sure the filename remains the same for the "Download Resume" button to work correctly.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.