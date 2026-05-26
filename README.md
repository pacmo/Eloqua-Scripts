# Eloqua Scripts #

A growing collection of reusable scripts for building dynamic invoice experiences inside Oracle Eloqua landing pages.

This repository focuses on practical, production-oriented utilities for:

* Invoice rendering & layouts
* Dynamic pricing updates
* Currency formatting
* DOM manipulation
* Form enhancement
* Data normalization
* API integrations
* Landing page utilities
* Eloqua-specific frontend workarounds

The goal is simple:

As invoicing has been handed to Fan One, specific tools are needed in Eloqua to accomodate this. 

### Eloqua-Scripts Repository ###

##### What This Repository Is #####

This is not a framework or packaged library. It is a collection of standalone, reusable scripts intended for real-world Eloqua implementations — especially landing pages that generate or display invoice-style data.

Most scripts are designed to work with:

Eloqua landing pages
Embedded HTML blocks
Custom form experiences
External API responses

The repository currently centers around:

Invoice Generation Utilities

Scripts for:

Updating invoice totals
Formatting currency values
Cleaning the Seat Block
Applying discounts/taxes
Rendering line items
Parsing pricing data
DOM Utilities

### Usage ###

Most scripts are intended to be:

Embedded directly into Eloqua landing pages using custom code blocks
Loaded through the Additional Javascript section of an Eloqua Landing Page
Included via external hosted JS files
Copied into existing LP templates

Example:

For most use cases, the script can copy/pasted into the bottom of the Additional Javascript section.
Near the top of the Additional Javascript, there should be a section where the scripts are fired after DOM ready. 
If you need the standard invoice scripting, this is found in the file "additional-javascript.js"
If the script exists in your invoice template, then please call out the script in the docReady section as follows: 

```
docReady(function () {
  cleanSeats(3);
  cleanCurrency("tickets", 4)
  getSubTotal("tickets", 4);
  getPaid("tickets", 5);
  getGrandTotal();
  checkProcFee();
});
```
Please note that some functions require parameters in order to work. Please refer to the raw script file for comments on how to use the function. 

#### Contributing ####

Contributions, fixes, and improvements are welcome.

Suggested guidelines:

Keep scripts modular
Avoid unnecessary dependencies
Comment non-obvious Eloqua quirks
Include usage examples when possible
Prefer plain JavaScript unless a dependency is truly justified

#### Disclaimer ####

These scripts are provided as-is.

Always test thoroughly in:

Eloqua landing pages
Preview environments
Email clients
Production campaigns

Eloqua has a special talent for behaving differently the moment you think everything is working.

Related Technologies

This repository may include utilities related to:

HTML/CSS
JavaScript
Google Tag Manager
Oracle Eloqua APIs
REST integrations
Dynamic forms
Marketing automation workflows

Oracle Eloqua supports extensive API and landing page customization capabilities.

License

MIT License

Use freely, modify freely, break things carefully.
