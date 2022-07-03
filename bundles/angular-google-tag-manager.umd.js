(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-google-tag-manager', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-google-tag-manager'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-google-tag-manager.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleTagManagerService = /** @class */ (function () {
        function GoogleTagManagerService(googleTagManagerId, googleTagManagerAuth, googleTagManagerPreview) {
            this.googleTagManagerId = googleTagManagerId;
            this.googleTagManagerAuth = googleTagManagerAuth;
            this.googleTagManagerPreview = googleTagManagerPreview;
            this.isLoaded = false;
            this.browserGlobals = {
                windowRef: /**
                 * @return {?}
                 */
                function () {
                    return window;
                },
                documentRef: /**
                 * @return {?}
                 */
                function () {
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
        GoogleTagManagerService.prototype.getDataLayer = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var window = this.browserGlobals.windowRef();
            window['dataLayer'] = window['dataLayer'] || [];
            return window['dataLayer'];
        };
        /**
         * @private
         * @param {?} obj
         * @return {?}
         */
        GoogleTagManagerService.prototype.pushOnDataLayer = /**
         * @private
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var dataLayer = this.getDataLayer();
            dataLayer.push(obj);
        };
        /**
         * @return {?}
         */
        GoogleTagManagerService.prototype.addGtmToDom = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var doc = this.browserGlobals.documentRef();
            this.pushOnDataLayer({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            /** @type {?} */
            var gtmScript = doc.createElement('script');
            gtmScript.id = 'GTMscript';
            gtmScript.async = true;
            gtmScript.src = this.applyGtmQueryParams('//www.googletagmanager.com/gtm.js');
            doc.head.insertBefore(gtmScript, doc.head.firstChild);
            /** @type {?} */
            var ifrm = doc.createElement('iframe');
            ifrm.setAttribute('src', this.applyGtmQueryParams('//www.googletagmanager.com/ns.html'));
            ifrm.style.width = '0';
            ifrm.style.height = '0';
            ifrm.style.display = 'none';
            ifrm.style.visibility = 'hidden';
            /** @type {?} */
            var noscript = doc.createElement('noscript');
            noscript.id = 'GTMiframe';
            noscript.appendChild(ifrm);
            doc.body.insertBefore(noscript, doc.body.firstChild);
            this.isLoaded = true;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GoogleTagManagerService.prototype.pushTag = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!this.isLoaded) {
                this.addGtmToDom();
            }
            this.pushOnDataLayer(item);
        };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        GoogleTagManagerService.prototype.applyGtmQueryParams = /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            /** @type {?} */
            var params = ["id=" + this.gtmId];
            if (this.gtmAuth) {
                params.push("gtm_auth=" + this.gtmAuth);
            }
            if (this.gtmPreview) {
                params.push("gtm_preview=" + this.gtmPreview);
            }
            if (url.indexOf('?') === -1) {
                url += '?';
            }
            return url + params.join('&');
        };
        GoogleTagManagerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleTagManagerService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: ['googleTagManagerId',] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: ['googleTagManagerAuth',] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: ['googleTagManagerPreview',] }] }
        ]; };
        /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(core.ɵɵinject("googleTagManagerId"), core.ɵɵinject("googleTagManagerAuth", 8), core.ɵɵinject("googleTagManagerPreview", 8)); }, token: GoogleTagManagerService, providedIn: "root" });
        return GoogleTagManagerService;
    }());
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

    exports.GoogleTagManagerService = GoogleTagManagerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-google-tag-manager.umd.js.map
