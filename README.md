# Noreen Aslam Portfolio

Plain HTML, CSS and JavaScript. No build step, no dependencies. Free to host.

## Structure
```
index.html        page shell (navbar, footer, floating CV + WhatsApp buttons)
styles.css        all styling
data.js           ALL content: services, projects, experience, certificates, links
app.js            router, page rendering, filters, contact form
assets/
  Noreen_Aslam_CV.pdf        CV (used by every "Download CV" button)
  images/
    profile.png              <- PUT YOUR PHOTO HERE (square, about 600x600)
    og-cover.png             optional social share image
    favicon.svg              optional tab icon
```

## Profile photo
Save your photo as `assets/images/profile.png`. It appears in the navbar, the
homepage card and the About page. If the file is missing, the "NA" initials show instead.

## Run locally
Open `index.html`, or run `python3 -m http.server 8000` and visit http://localhost:8000

## Edit content
Everything is in `data.js`. Items marked [PLACEHOLDER] need your files or confirmation.

## Publish free
Netlify Drop (app.netlify.com/drop) or GitHub Pages: upload this folder.

## Contact form
The form opens the visitor's email app with the message prefilled. To receive
messages on a server, connect a form service such as Formspree (see app.js).
