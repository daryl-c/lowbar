# lowbar
A re-implementation of some of methods from the JS library Underscore.

## Installation

You will need to have Node.js installed to run this. Check if you have Node installed by typing the following in your terminal:

``node -v``

It is recommended to have at least `v6.9.0`. If your version is below this, you may need to upgrade.

If you do not have Node installed follow this guide - https://nodejs.org/en/download/package-manager/#osx

You will also need npm installed. Check your version:

``npm -v``

The minimum recommended version for this library is `3.10.8` and you should see this, or a variation of it, if you have it installed

To install npm follow this guide - https://docs.npmjs.com/getting-started/installing-node


Clone the repository to your own machine and install dependencies.

``git clone https://github.com/daryl-c/lowbar.git``

``npm i``

## Run Tests

To run the test suite, run ``npm t``.

## About

This project is an implementation of the following underscore methods:

* identity
* first
* last
* each
* indexOf (including binary search)
* filter
* reject
* uniq
* map
* pluck
* reduce
* contains
* every
* some
* extends
* defaults
* once
* memoize
* delay
* shuffle
* invoke
* sortBy 
* zip
* sortedIndex
* flatten
* intersection
* difference
* throttle