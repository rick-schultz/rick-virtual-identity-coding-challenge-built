import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

// eslint-disable-next-line import/no-default-export
const appGlobalScript = async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};

const globalScripts = appGlobalScript;

const exampleComponentCss = "@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Condensed&display=swap\");/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}body{padding:0}:host{display:block}@media screen and (max-width: 865px){.container{display:block}.cta{background:#ecede9;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100vw}.cta div{margin-left:0;padding:10%}.contactUs{position:fixed;bottom:0;background-color:#303c54;width:100vw;height:20%;font-family:\"Roboto Condensed\", sans-serif}.contactUs::before{left:15%;top:-5px;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-top-color:#303c54;border-width:10px;margin-left:-1px;border-right-color:#303c54;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.contactUs .contacts p{font-size:12px;line-height:0.8}.image{width:100vw}.image img{max-width:100%;max-height:100%}}:host{margin:0;padding:0}.headline{width:100vw;font-size:36px;font-family:\"Playfair Display\", serif}.headline h4{margin-left:10vw;padding-left:1%;border-left:3px solid red}@media screen and (min-width: 866px){.container{display:-ms-flexbox;display:flex;width:100vw;font-family:\"Playfair Display\", serif}.cta{background:#ecede9;width:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.cta div{margin-left:15%;padding:15%}.contactUs{position:fixed;bottom:0;background-color:#303c54;width:100vw;height:25%;font-family:\"Roboto Condensed\", sans-serif}.contactUs::before{left:15%;top:-5px;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-top-color:#303c54;border-width:10px;margin-left:-1px;border-right-color:#303c54;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.contactUs .contacts p{font-size:12px}.image{width:50%}.image img{height:100%}}.cta div h4{font-size:24px}.contactUs p{font-size:24px;color:white;margin:0;padding-left:10vw;padding-top:1%}.cta div p{font-size:16px;margin:auto}.contactUs button{width:30px;height:30px;position:absolute;right:60px;top:-12px;background-color:transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden}.cta div button{margin-top:5%;font-size:12px;background:black;padding:2%;color:white;border:none;cursor:pointer}.contactUs button img{width:20px}.contactHidden{display:none}@media screen and (min-width: 850px){.contactUs .contacts{line-height:0.5}}@media screen and (min-width: 1440px){.contactUs .contacts{line-height:0.2}}";

const ExampleComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.contactUS = 'contactHidden';
  }
  menuToggleOn() {
    this.contactUS = 'contactUs';
  }
  menuToggleOff() {
    this.contactUS = 'contactHidden';
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h("div", null, h("div", { class: "headline" }, h("h4", null, "CtA - Main Conversion")), h("div", { class: "container" }, h("div", { class: "cta" }, h("div", null, h("h4", null, "A Wonderful serenity has taken possession"), h("p", null, "A Wonderful serenity has taken possession of my entire soul like these sweet mockup."), h("button", { onClick: () => this.menuToggleOn() }, "Link button"))), h("div", { class: "image" }, h("img", { src: "https://tinyurl.com/ezv7d6j6", alt: "Man standing at the top of the mountain" }))), h("div", { class: this.contactUS }, h("p", null, "Contact us"), h("div", { class: "contacts" }, h("p", null, "Virtual Identity AG"), h("p", null, "Isarwinkel 1"), h("p", null, "81379 M\u00FCnchen"), h("p", null, "t +49 89 179 270 00"), h("p", null, "f +49 761 88 79 57 98"), h("p", null, "info@virtual-identity.com")), h("button", { onClick: () => this.menuToggleOff() }, h("img", { src: "https://tinyurl.com/7rmmhpxw", alt: "close button" })))));
  }
  static get style() { return exampleComponentCss; }
};

globalScripts();
const ExampleComponent$1 = /*@__PURE__*/proxyCustomElement(ExampleComponent, [1,"example-component",{"headline":[1],"contactUS":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ExampleComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ExampleComponent$1 as ExampleComponent, defineCustomElements };
