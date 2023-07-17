# Decisions

A log of major decisions taken during the course of this product, alongside their reasoning.
Also, some lessons learned from the consequences of these decisions.

## Project-Level Decisions
<details>
<summary> Why a browser Extension? </summary>
I was curious to know how browser extensions work under the hood and hence decided to build one.
</details>
<details>
<summary> Why a "Productivity Booster" </summary>
I thought the scope was manageable. I really only wanted a tool that prevents me from visiting certain websites too often or for too long.
</details>


## Technological Decisions

### Typescript
#### Motivation
I had not done a Javascript-only project before and hence started writing only vanilla Javascript. Over time, my object-oriented preference came through more and more, until I finally decided to try out Typescript. 
#### Lessons Learned
Most modern IDEs help you catch more exceptions and bugs with strongly typed code. I hoped it would be similar with Typescript. For the most part, this worked out. Nonetheless, because Javascript apparently does not deal well with polymorphism, things are still more messy than I would like.

### Webpack
#### Motivation
Again, I started with plain Javascript. However, I like to organize my code in separate files and folders, to keep each file limited to a single context (see also modular code and Separation of Concerns). Javascript supports imports and exports from different files out of the box, but this requires the code to be loaded as "type=module" in the actual website, limiting the scope and access-rights of the code. This meant that if I wanted to distribute my code across different files, I would have to either import all of these different files in **each** of my html files or else merge them into one large .JS-file. Webpack allows me to do the latter. 

#### Lessons Learned
Configuring webpack, understanding the different scopes of webpack-compiled files and accessing my code through the browser developer console all had quite a steep learning curve. Nonetheless, now that I have a functioning setup, I am very satisfied with my choice.

### TailwindCSS
#### Motivation
The choices here were 

* write my own CSS,
* use some CSS framework or library such as bootstrap or
* use the configurability of some utility-class framework such as Tailwind.

I have done each of these options for different projects in the past. I am still not entirely convinced that Tailwind is less work than some library. But every time I had used a ready-made library in the past, I had written a "custom.css" with increasing complexity. This meant that over time, the CSS classes become quite difficult to maintain. Hence, I would choose Tailwind again every time.

#### Lessons Learned
See above.

### Jasmine
#### Motivation
Using tests for Behavior-Driven Development (BDD). I am quite a large advocate of BDD, because of the understandibility of tests and the clear relationship between tests and requirements.

#### Lessons Learned
The documentation was a little short and did not feel comprehensive. There did not (yet) seem to be a very large community behind Jasmine either, which limited my success on Stackoverflow. 

So far, I have only set up Jasmine to work in the browser. It is likely possible to run Jasmine tests from the command line as well, but I chose Jest for this.

### Jest
#### Motivation
Unit tests. Simply because this is the quasi-standard for unit-testing Javacript.

#### Lessons Learned
Works well, has lot's of plugins and extensions. Strong documentation, strong community that has probably answered every question I could have. Works well for my purposes.


## Architectural Decisions

### Object-Orientation
I like having my data encapsulated in a clear structure, alongside validation logic. This simply limits the load on my brain and the necessity for testing for exceptions in numerous places in my codebase.


### Factory-Pattern
Because the number of ways to instantiate the *ProdRule* class grew, I decided to create a separate class with the only purpose of instantiating ProdRule objects. This allowed me to decouple the business logic (relevant data and behavior for a rule) from the programming logic (for instantiating an object). This actually made my code much nicer to read and my classes much easier to maintain (and extend).

### Repository-Pattern
Motivation for a repository: within my code, I want to have access to all ProdRules. I DO NOT want to know whether the ProdRules are stored in a MongoDB or the Chrome LocalStorage. 

Motivation for specific repositories for each class: I want to be sure I get the actual objects that I intend to work with. 

### Layered Architecture

Simply makes it easy for me to understand the relationships between modules WITHIN each layer. And habit from university.