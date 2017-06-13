## ITCSS ARCHITECTURE

ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.

## Those layers are as follows:

* Settings – used with preprocessors and contain font, colors definitions, etc.
* Tools – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
* Generics – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
* Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
* Objects – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
* Components – specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components
* Utilities – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class
* The triangle also shows how styles represented by selectors are ordered in the resulting CSS: from generic styles to explicit ones, from low-specificity selectors to more specific ones (but still not too specific, IDs are not allowed) and from far reaching to localized ones.

## More About ITCSS
- http://csswizardry.com/
- https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

## Import styles

Styles should be importet through the main.scss file.
