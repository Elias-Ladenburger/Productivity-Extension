# Productivity-Extension

An extension for Firefox (potentially Chromium-based browsers as well) to enhance productivity

## About
The productivity extension allows you to create rules that will help you combat bad habits, such as getting lost in "time sinks", having too much screen time or moving away from productive websites too early.

## Installation
Clone this repository or download the source through some other means.
The next steps depend on the browser you are using.

### Firefox
At the moment, the productivity extension is sporadically tested with Firefox.

#### Temporary installation
- Open Firefox
- In the address bar, type ```about:debugging```
- select "this Firefox"
- select "load temporary add-on"
- Voilá, this plugin will now remain installed until you close your Firefox window.

#### Permanent installation  
- Open Firefox
- In the address bar, type ```about:addons```
- click on the gear icon next to "manage extensions"
- select "install add-on from file"
- Voilá, this plugin will now remain installed until you choose to remove it.

### Chromium-based browsers
This plugin **should** be compatible with all with Chromium-based browsers (Google Chrome, Opera, Edge) and Firefox.

#### Installation in development mode
- Open your browser
- In the address bar, type ```about:extensions```
- in the top right corner, activate the toggle for "developer mode"
- in the developer ribbon, select ```load unpacked extension```
- select the folder with this code.
- Voilá, this plugin will now remain installed until you choose to remove it. This plugin will mirror any changes to the code you make.

#### Permanent installation
- Open your browser
- In the address bar, type `about:extensions`
- click in the search bar ("search extensions")
- look for "productivity booster"
- hit "install"
- Voilá!

### Safari
Compatibility with Safari is planned for August 2023.

## How to use this extension
This extension is mostly very passive. You configure rules for your personal productivity. Once the rules are in place, lean back and watch your habits improve.
  
### Manage rules
In the settings for this extension, configure your rules.

A rule has the following format:
``When I visit [website] [* and condition] then [action].
Where 
- ***website*** is any string of characters that is contained by the website you want to block (*e.g. "LinkedIn", "facebook.com", "https://some-unproductive-website"*).
- ***condition*** can be either one of the following:
	- *empty* (condition is optional).
	- *immediately*.
	- *after x minutes*.
	- *between starttime and endtime*.
- ***action*** can be either one of the following:
	- redirect to another ***website***.
	- format the original website (e.g. create a red border as a visible warning).
	- send regular notifications (e.g. give me a popup every x minutes).

### Configure working times
You can choose to trigger a rule only when you are working. This is especially helpful if you use your device for work and leisure.


### Browse productively
Whenever you visit one of the sites for which you have previously created a rule, the rule will be executed, forcing you to be more conscious in your browsing habits.

### Other functionality
The roadmap for this project is growing. The current state of ideas can be found in the wireframes [here](https://www.figma.com/file/EEJ6kSS1m5xACAo1oPl2kU/Productivity-Booster?type=design&node-id=0%3A1&t=k9YagoVDnUPXN3TQ-1).

In the future, the following functionality may be added (with no guarantee whatsoever):
- recommendation for breaks and off-screen time
- visualization of goals
- popups with hints for higher productivity
- Chatbots: hold yourself accountable by talking to us via chat

#### Extension of Rules
- extension of rules
- ensuring accountability by sending a mail or posting on twitter when violating one of the rules
- requesting payment to visit one of the distracting websites during work-time
- rewards for staying on productive websites
- integration with other services to track "productivity points"


## Development

### Setup
Clone this repository:
```
git clone https://github.com/Elias-Ladenburger/Productivity-Extension
```

Install the dependencies:
```
npm install
```

### Build

To generate a release-ready package, run:
```
rum run build
```

You should now be good to go!