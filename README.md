# Arrow-WEBSITE-SSG [![Build Status](https://travis-ci.org/ribonsamr/artwebsite-ssg.svg?branch=master)](https://travis-ci.org/ribonsamr/artwebsite-ssg)

SSG stands for Static Site Generator, which is [Jekyll](https://jekyllrb.com).

## Installation

- Install [Git](https://git-scm.com) if you don't have it


- Install [Ruby](https://www.ruby-lang.org/en/) and [Jekyll](https://jekyllrb.com/docs/installation/)

- Install [Node.js](https://nodejs.org/en/), if you want to use the npm scripts included

- Install [ImageOptim](https://imageoptim.com/), if you want to do image optimizations 

- Open your terminal/cmd, change directory to wherever you want and run `git clone https://github.com/ribonsamr/artwebsite-ssg.git`, then `cd artwebsite-ssg`

- Run `npm run install` to install the Ruby bundle

- Test with `npm run test` to build for production then run the test

- Run `npm run serve` and open the link printed-out on the screen

## Jekyll

Here are some Jekyll CLI commands you can run:

- To install the gems:
`bundle install --path vendor/bundle`

- Build in production mode:
`JEKYLL_ENV=production bundle exec jekyll build -d public`

- Build in development mode:
`JEKYLL_ENV=development bundle exec jekyll build -d public_beta`

- Launch the website:
`JEKYLL_ENV=development bundle exec jekyll serve`

- Launch the website with livereload feature enabled:
`JEKYLL_ENV=development bundle exec jekyll serve --livereload`

## Testing

We use Rake for testing, you can find the testing scripts in the `Rakefile`.

To run the tests:

- For production: `bundle exec rake` or `bundle exec rake prod_test`,
because the default test script is the production mode.

- For development:
`bundle exec rake dev_test`

## ImageOptim

Make sure to install [ImageOptim](https://imageoptim.com/) first as mentioned earlier, then you can run this command: `imageoptim assets/images/team assets/images/teams assets/images/news`

This will optimize the images and reduce their sizes.

## npm scripts

It is better to use npm scripts to save time, these are the scripts you can run:

- `install`, runs bundle install

- `build`, build for production environment to `public`

- `beta`, optimize images and build for development environment to `public_beta`

- `optim`, optimize images for `assets/team`, `assets/teams`, `assets/news`

- `serve`, serve the website in `development` environment

- `reload`, serve the website in `development` environment with `--livereload` enabled

- `test`, runs `npm run build` then `bundle exec rake` to test the output

- `test_beta`, runs `npm run beta` then `bundle exec rake dev_test` to test the beta version

Example: `npm run build`.
