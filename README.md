# Productivity-Extension

An extension for Firefox (potentially Chromium-based browsers as well) to enhance productivity

## About
The productivity extension allows you to create rules that will help you combat bad habits, such as getting lost in "time sinks", having too much screen time or moving away from productive websites too early.

## Installation
Clone this repository or download the source through some other means.
The next steps depend on the browser you are using.

### Firefox
At the moment, the productivity extension only supports Firefox.

#### Temporary installation
- Open Firefox
- In the address bar, type ```about:debugging```
- select "this Firefox"
- select "load temporary add-on"
- Voilá, this plugin will now remain installed until you close your Firefox window.

#### Permanent instalation  
- Open Firefox
- In the address bar, type ```about:addons```
- click on the gear icon next to "manage extensions"
- select "install add-on from file"
- Voilá, this plugin will now remain installed until you choose to remove it.

### Chromium-based browsers
Compatibility with Chromium-based browsers (Google Chrome, Opera, Edge) is planned for mid 2023.

### Safari
Compatibility with Safari is planned for mid 2023.

## How to use this extension
This extension is mostly very passive. You configure rules for your personal productivity. Once the rules are in place, lean back and watch your habits improve.
  
### Manage rules
In the settings for this extension, configure your rules.

A rule has the following format:
``When I visit [website] [* and condition] then [action].
Where 
- ***website*** can be any regular expression that can be evaluated to a domain, subdomain or page (e.g. https://facebook.com/ and http*://facebook.\* and https://*.facebook.com are all valid expressions).
- ***condition*** can be either one of the following:
	- *empty* (condition is optional).
	- *immediately*.
	- *after x minutes*.
	- *between starttime and endtime*.
- ***action*** can be either one of the following:
	- redirect to another ***website***.
	- format the original website (e.g. create a red border as a visible warning).
	- send regular notifications (e.g. give me a popup every x minutes).

### Browse productively
Whenever you visit one of the sites for which you have previously created a rule, the rule will be exectued, forcing you to be more conscious in your browsing habits.
  

### Other functionality
The roadmap for this project is growing. In the future, the following functionality may be added (with no guarantee whatsoever):
- recommendation for breaks and off-screen time
- visualization of goals
- popups with hints for higher productivity
- extension of rules
    - ensuring accountability by sending a mail or posting on twitter when violating one of the rules
    - requesting payment to visit one of the distracting websites during work-time
    - rewards for staying on productive websites
    - integration with other services to track "productivity points"
- Chatbots: hold yourself accountable by talking to us via chat