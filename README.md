# Suresh Murali's Personal Portfolio website

Website link: [sureshmurali.github.io](sureshmurali.github.io)

![Protfolio GIF](https://user-images.githubusercontent.com/8108361/59652016-03d01a00-91c7-11e9-8106-798d16488073.gif)

## Featured Review

⭐⭐⭐⭐⭐ [Adrian Twarog's Portfolio Review](https://www.youtube.com/watch?v=KWVJTRWILjU&t=26s) - "One of the best portfolios I've ever seen!"

## Featured Blogs

[How to Build a Great Developer Portfolio](https://dev.to/actitime/how-to-build-a-great-developer-portfolio-examples-tools-bkj) - "_Suresh Murali created a design that you can feel_" - Featured as an exemplary portfolio for UI/UX design.

[Web Developer Portfolio: The Definitive Guide](https://soshace.com/web-developer-portfolio-the-definitive-2019-guide-with-15-portfolio-examples/) - "_Clean and inspired by a small Cupertino company_" - Highlighted for aesthetic influence and design principles.

[CSDN Blog – 前端设计设计及代码收集](https://blog.csdn.net/weixin_44649780/article/details/128276405) - Listed among 15 exemplary front-end developer portfolios, showcasing work to a Chinese-speaking developer audience.

[Scribd Document - Portfolios](https://www.scribd.com/document/840011183/PDF-Portfolios) - Included in a compilation of notable GitHub-hosted developer portfolios.

## Technical References

- [GSAP Forum](https://gsap.com/community/forums/topic/35929-gsap-scrolltriger-split-screen/) - Parallax effect implementation discussed as a reference
- [Reddit r/CodingHelp](https://www.reddit.com/r/CodingHelp/comments/vmk50v/help_with_fixed_section_scrolling/) - Portfolio used as reference for fixed section scrolling implementation

## Technology Stack

- Node.js: v22.13.0
- NPM: v9.5.1
- Yarn: v1.22.22
- Vite: v5.0.10
- React: v18.2.0
- React DOM: v18.2.0
- styled-components: v4.4.1
- react-responsive: v9.0.0

## Development & Deployment

### Branch Structure

This project uses a three-branch workflow:

- **`develop`** - Active development branch for ongoing work
- **`main`** - Production-ready code, stable releases only
- **`gh-pages`** - Deployment branch (auto-generated, do not edit manually)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sureshmurali/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```
   The site will be available at `http://localhost:5173`

4. **Make changes on the `develop` branch**
   ```bash
   git checkout develop
   # Make your changes
   git add .
   git commit -m "Your commit message"
   git push origin develop
   ```

### Deployment to Production

**Important:** Deployment only works from the `main` branch. The deploy script will automatically check and prevent deployments from other branches.

1. **Merge `develop` into `main`**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

2. **Build the production bundle**
   ```bash
   yarn build
   ```
   This creates an optimized production build in the `dist` folder.

3. **Deploy to GitHub Pages**
   ```bash
   yarn deploy
   ```
   This pushes the `dist` folder to the `gh-pages` branch and makes it live.

4. **Verify deployment**
   Your changes will be live at [sureshmurali.github.io](https://sureshmurali.github.io) within a few minutes.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Create production build
- `yarn deploy` - Deploy to GitHub Pages (main branch only)
- `yarn reset` - Clean install (removes node_modules and dist, then reinstalls)

## LICENSE

The MIT License (MIT)

Copyright (c) 2025 Suresh Murali

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
