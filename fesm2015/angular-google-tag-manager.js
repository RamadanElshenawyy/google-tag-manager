import { Injectable, Inject, Optional, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-google-tag-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleTagManagerService {
    /**
     * @param {?} googleTagManagerId
     * @param {?} googleTagManagerAuth
     * @param {?} googleTagManagerPreview
     */
    constructor(googleTagManagerId, googleTagManagerAuth, googleTagManagerPreview) {
        this.googleTagManagerId = googleTagManagerId;
        this.googleTagManagerAuth = googleTagManagerAuth;
        this.googleTagManagerPreview = googleTagManagerPreview;
        this.isLoaded = false;
        this.browserGlobals = {
            /**
             * @return {?}
             */
            windowRef() {
                return window;
            },
            /**
             * @return {?}
             */
            documentRef() {
                return document;
            }
        };
        this.gtmId = googleTagManagerId;
        this.gtmAuth = googleTagManagerAuth;
        this.gtmPreview = googleTagManagerPreview;
    }
    /**
     * @return {?}
     */
    getDataLayer() {
        /** @type {?} */
        const window = this.browserGlobals.windowRef();
        window['dataLayer'] = window['dataLayer'] || [];
        return window['dataLayer'];
    }
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    pushOnDataLayer(obj) {
        /** @type {?} */
        const dataLayer = this.getDataLayer();
        dataLayer.push(obj);
    }
    /**
     * @return {?}
     */
    addGtmToDom() {
        /** @type {?} */
        const doc = this.browserGlobals.documentRef();
        this.pushOnDataLayer({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        /** @type {?} */
        const gtmScript = doc.createElement('script');
        gtmScript.id = 'GTMscript';
        gtmScript.async = true;
        gtmScript.src = this.applyGtmQueryParams('//www.googletagmanager.com/gtm.js');
        doc.head.insertBefore(gtmScript, doc.head.firstChild);
        /** @type {?} */
        const ifrm = doc.createElement('iframe');
        ifrm.setAttribute('src', this.applyGtmQueryParams('//www.googletagmanager.com/ns.html'));
        ifrm.style.width = '0';
        ifrm.style.height = '0';
        ifrm.style.display = 'none';
        ifrm.style.visibility = 'hidden';
        /** @type {?} */
        const noscript = doc.createElement('noscript');
        noscript.id = 'GTMiframe';
        noscript.appendChild(ifrm);
        doc.body.insertBefore(noscript, doc.body.firstChild);
        this.isLoaded = true;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    pushTag(item) {
        if (!this.isLoaded) {
            this.addGtmToDom();
        }
        this.pushOnDataLayer(item);
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    applyGtmQueryParams(url) {
        /** @type {?} */
        const params = [`id=${this.gtmId}`];
        if (this.gtmAuth) {
            params.push(`gtm_auth=${this.gtmAuth}`);
        }
        if (this.gtmPreview) {
            params.push(`gtm_preview=${this.gtmPreview}`);
        }
        if (url.indexOf('?') === -1) {
            url += '?';
        }
        return url + params.join('&');
    }
}
GoogleTagManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleTagManagerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: ['googleTagManagerId',] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: ['googleTagManagerAuth',] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: ['googleTagManagerPreview',] }] }
];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(ɵɵinject("googleTagManagerId"), ɵɵinject("googleTagManagerAuth", 8), ɵɵinject("googleTagManagerPreview", 8)); }, token: GoogleTagManagerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.isLoaded;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.gtmId;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.gtmAuth;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.gtmPreview;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.browserGlobals;
    /** @type {?} */
    GoogleTagManagerService.prototype.googleTagManagerId;
    /** @type {?} */
    GoogleTagManagerService.prototype.googleTagManagerAuth;
    /** @type {?} */
    GoogleTagManagerService.prototype.googleTagManagerPreview;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-google-tag-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GoogleTagManagerService };
//# sourceMappingURL=angular-google-tag-manager.js.map
