<img src="https://github.com/vlas-dev/tailwind-spike/assets/30755101/0da1177c-648e-4dee-abf8-3c7b650d2c64" width="400" />

# 1. What is Tailwind?
Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.
![image](https://github.com/vlas-dev/tailwind-spike/assets/30755101/65219d97-701c-4f48-b329-3d421ac376bb)
# 2. How it works?
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
![image](https://github.com/vlas-dev/tailwind-spike/assets/30755101/682cff2c-c42f-4c29-a229-1c7d3d27324e)
# 3. Core Concepts
## Utility-First Fundamentals
Using a utility-first workflow to build complex components from a constrained set of primitive utilities.

There are two ways of getting the following component done:<br/>
<img src="https://github.com/vlas-dev/tailwind-spike/assets/30755101/375ae29a-1ed8-4f4b-ba64-1682a494d354" width="300" />

:x:Using a traditional approach where custom designs require custom CSS
```
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```
:heavy_check_mark:Using utility classes to build custom designs without writing CSS
```
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```
## Hover, Focus, and Other States
Every utility class in Tailwind can be applied conditionally by adding a modifier to the beginning of the class name that describes the condition you want to target.

For example, to apply the bg-sky-700 class on hover, use the hover:bg-sky-700 class
```
<button class="bg-sky-500 hover:bg-sky-700 ...">
  Save changes
</button>
```

Tailwind includes modifiers for just about everything you’ll ever need, including:

- Pseudo-classes, like :hover, :focus, :first-child, and :required
- Pseudo-elements, like ::before, ::after, ::placeholder, and ::selection
- Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion
- Attribute selectors, like [dir="rtl"] and [open]
## Responsive Design
Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.
There are five breakpoints by default, inspired by common device resolutions:

Breakpoint prefix	Minimum width	CSS

| Breakpoint prefix	| Minimum width	 | CSS |
| --- | --- | --- |
| sm | 640px |	@media (min-width: 640px) { ... } |
| md |	768px |	@media (min-width: 768px) { ... } |
| lg |	1024px |	@media (min-width: 1024px) { ... } |
| xl |	1280px |	@media (min-width: 1280px) { ... } |
| 2xl |	1536px |	@media (min-width: 1536px) { ... } |

## Dark Mode
Tailwind includes a dark variant that lets you style your site differently when dark mode is enabled
```
<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <p>Test</p>
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```
If you want to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
}
```
```<div class="bg-white dark:bg-black">```
## Reusing Styles
Tailwind encourages a utility-first workflow, where designs are implemented using only low-level utility classes. This is a powerful way to avoid premature abstraction and the pain points that come with it.
![image](https://github.com/vlas-dev/tailwind-spike/assets/30755101/6e96cce3-89de-4654-a286-b1e74221ba79)
But of course as a project grows, you’ll inevitably find yourself repeating common utility combinations to recreate the same design in many different places.
When duplication is localized to a group of elements in a single file, the easiest way to deal with it to use [multi-cursor editing](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor) to quickly select and edit the class list for each element at once
## Customizing the Framework
Customize the framework to match your brand and extend it with your own custom styles.
# 3. Comparison
![image](https://github.com/vlas-dev/tailwind-spike/assets/30755101/78be40de-c958-4fc9-93ce-9386ca789cb6)
![image](https://github.com/vlas-dev/tailwind-spike/assets/30755101/447f5ea5-b294-430f-acf0-659f071b4811)
![image](https://github.com/vlas-dev/tailwind-spike/assets/30755101/24127a19-40a6-4358-bde9-f9ad04a2fc77)


