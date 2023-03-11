# React Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app is my take on a beginner developer's portfolio, utilizing the awesomeness of React. It has pages for four sections: 'About Me', 'Portfolio (projects)', 'Contact' and 'Resume', which are in an easy to use nav bar and execute without reloading the page. The footer contains additional links to various profile pages of mine (though some don't exist, yet).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Comments/Flaws](#commentsflaws)
- [License](#license)

## Installation

All that's needed here is `create-react-app`, which initializes a boilerplate, functional React App, which can be changed after it's creation.

## Usage

Upon visiting the page, you will land on the 'About Me' view, which has a (fake) avatar of me and a short bio. The nav bar gives you other options, and it's very clear which tab you're currently visiting. Hitting the 'Portfolio' tab will bring you to a list of six of my apps built, with links to the live site (or walkthru video for back-end only apps) and the GitHub repo for each. Hitting the 'Contact' tab will bring you to a form which allows you email me (though it's currently just used for input validation -- it doesn't actually send me an email at this time). All three fields require some content, and the email address needs to be valid (matching a regex). The 'Resume' tab will bring you to a list of my proficiences (though there are just placeholders right now) and a button to download my resume (the download fuctionality works, but I currently don't have a resume, so it's just a placeholder text file). The footer has three links for my profiles pages: GitHub (functional), LinkedIn (just goes to the homepage, as I don't have a profile there yet), and a third placeholder (I'm off almost all social media apps).

Link to live site: https://tjr1387.github.io/react-portfolio/
  
  
Screenshot(s):
![About](./public/assets/mockups/about-page.png?raw=true "About tab")
![Portfolio](./public/assets/mockups/portfoilio-page-page.png?raw=true "Portfolio tab")
![Contact](./public/assets/mockups/contact-page.png?raw=true "Contact tab")
![Resume](./public/assets/mockups/resume-page.png?raw=true "Resume tab")

## Credits

The mini-project for the React week was extremely helpful to go off of, as well as the exercise which implememented nav-tabs to different pages.

## Tests

N/A

## Comments/Flaws

In terms of functionality, this is pretty solid. In terms of style, it still needs a lot of work to look pretty. The positioning of everthing is decent (except for the contact form -- it's alignment is pretty bad), but the color scheme needs to change, the header is a little wonky (my name doesn't share a line with the navbar) and smaller things like the look of the links inside projects' images could be sleeker. The use of icons from a library like Font Awesome would be a good idea. The responsiveness is actually pretty good -- the project images flex properly which is nice. This will continuously be worked on, as it will serve as a real protfolio vis-av-is employment. I also hope to swap out much better and newer projects for some of the ones I have in there -- like four or even five of them aren't really up to snuff.


## License

Covered under the MIT license.
