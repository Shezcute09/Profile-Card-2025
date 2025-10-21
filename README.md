# Multi-Page Profile Application - HNG13 Stage 1 Task

A responsive, accessible multi-page web application built with vanilla HTML, CSS, and JavaScript for HNG13 internship.

## Features

- Semantic HTML structure
- Responsive design (mobile-first)
- Accessible with proper ARIA labels
- Real-time milliseconds display
- Social links with security attributes
- All required data-testid attributes
- Modern CSS with Flex/Grid
- Multi-page navigation (Profile, About, Contact)
- Contact form with comprehensive validation
- Interactive avatar upload functionality
- No installation required - runs directly in browser

## Pages Included

### Profile Card (`index.html`)

- Personal profile with avatar and bio
- Real-time updating clock in milliseconds
- Social media links with security attributes
- Hobbies and interests sections
- Interactive avatar with click-to-upload feature

### About Me (`about.html`)

- Reflective sections for personal and professional growth
- Structured content with semantic HTML
- Areas for goals, confidence, and future aspirations
- Easy-to-customize placeholder content

### Contact Us (`contact.html`)

- Fully functional contact form with real-time validation
- Comprehensive error handling and success messages
- Accessible form with proper ARIA attributes
- Validation for required fields, email format, and message length

## Technologies Used

- HTML5
- CSS3 (Flex, Grid, Custom Properties)
- Vanilla JavaScript
- FileReader API for image handling
- Form Validation API
- No frameworks or libraries
- No build tools or installation needed

## Project Structure

```
Profile-Card-2025/
├── index.html          # Profile Card (main page)
├── about.html          # About Me page
├── contact.html        # Contact Us page
├── styles.css          # Global styles and responsive design
├── script.js           # Profile functionality & time updates
├── contact.js          # Form validation logic
├── chichi.jpg          # Profile image
└── README.md           # Project documentation
```

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/Shezcute09/Profile-Card-2025.git
```

2. Navigate to the project directory:

```bash
cd Profile-Card-2025
```

3. Open `index.html` directly in your browser - no server required!

## Data Test IDs Implemented

### Profile Card

- `test-profile-card`, `test-user-name`, `test-user-bio`
- `test-user-time`, `test-user-avatar`, `test-user-social-links`
- `test-user-social-linkedin`, `test-user-social-twitter`
- `test-user-hobbies`, `test-user-dislikes`

### Contact Form

- `test-contact-form`, `test-contact-name`, `test-contact-email`
- `test-contact-subject`, `test-contact-message`, `test-contact-submit`
- `test-contact-error-name`, `test-contact-error-email`
- `test-contact-error-subject`, `test-contact-error-message`
- `test-contact-success`

### About Page

- `test-about-page`, `test-about-bio`, `test-about-goals`
- `test-about-confidence`, `test-about-future-note`, `test-about-extra`

## Form Validation Rules

- All fields are required
- Email must be valid format (name@example.com)
- Message must be at least 10 characters long
- Real-time validation with immediate user feedback
- Success message displayed after valid submission

## Browser Compatibility

- Google Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

Simply edit the HTML, CSS, and JavaScript files in any text editor to:

- Update personal information and content
- Modify colors and styling
- Add additional functionality
- Customize form behavior

## Deployment

Ready for deployment on:

- **Netlify** (drag and drop)
- **GitHub Pages** (enable in repository settings)
- **Vercel** or any static hosting service

## Author

**Chiemezie Nkiruka Okechukwu**

- Frontend Developer
- HNG13 Intern
- [LinkedIn](https://linkedin.com/in/chiemezie-okechukwu)
- [Twitter](https://twitter.com/chiemezieok3)

---

Pure HTML, CSS & JavaScript - No frameworks, no build tools, no installation required
