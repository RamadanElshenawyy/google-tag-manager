/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-google-tag-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
export class GoogleTagManagerService {
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
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.ɵɵinject("googleTagManagerId"), i0.ɵɵinject("googleTagManagerAuth", 8), i0.ɵɵinject("googleTagManagerPreview", 8)); }, token: GoogleTagManagerService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzdELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQWVoQyxZQUN5QyxrQkFBMEIsRUFDWixvQkFBNEIsRUFDekIsdUJBQStCO1FBRmhELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUNaLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUTtRQUN6Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQVE7UUFqQmpGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLakIsbUJBQWMsR0FBRzs7OztZQUNyQixTQUFTO2dCQUNMLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUM7Ozs7WUFDRCxXQUFXO2dCQUNQLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLENBQUM7U0FDSixDQUFDO1FBT0UsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsdUJBQXVCLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVNLFlBQVk7O2NBQ1QsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO1FBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxHQUFXOztjQUN6QixTQUFTLEdBQUcs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MkNBQXlCOzs7OztJQUN6Qix3Q0FBc0I7Ozs7O0lBQ3RCLDBDQUF3Qjs7Ozs7SUFDeEIsNkNBQTJCOzs7OztJQUUzQixpREFPRTs7SUFHRSxxREFBK0Q7O0lBQy9ELHVEQUErRTs7SUFDL0UsMERBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGlzTG9hZGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBndG1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZ3RtQXV0aDogc3RyaW5nO1xuICAgIHByaXZhdGUgZ3RtUHJldmlldzogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBicm93c2VyR2xvYmFscyA9IHtcbiAgICAgICAgd2luZG93UmVmKCk6IGFueSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudFJlZigpOiBhbnkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KCdnb29nbGVUYWdNYW5hZ2VySWQnKSBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlcklkOiBzdHJpbmcsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJBdXRoJykgcHVibGljIGdvb2dsZVRhZ01hbmFnZXJBdXRoOiBzdHJpbmcsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJQcmV2aWV3JykgcHVibGljIGdvb2dsZVRhZ01hbmFnZXJQcmV2aWV3OiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5ndG1JZCA9IGdvb2dsZVRhZ01hbmFnZXJJZDtcbiAgICAgICAgdGhpcy5ndG1BdXRoID0gZ29vZ2xlVGFnTWFuYWdlckF1dGg7XG4gICAgICAgIHRoaXMuZ3RtUHJldmlldyA9IGdvb2dsZVRhZ01hbmFnZXJQcmV2aWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhTGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuYnJvd3Nlckdsb2JhbHMud2luZG93UmVmKCk7XG4gICAgICAgIHdpbmRvd1snZGF0YUxheWVyJ10gPSB3aW5kb3dbJ2RhdGFMYXllciddIHx8IFtdO1xuICAgICAgICByZXR1cm4gd2luZG93WydkYXRhTGF5ZXInXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hPbkRhdGFMYXllcihvYmo6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBkYXRhTGF5ZXIgPSB0aGlzLmdldERhdGFMYXllcigpO1xuICAgICAgICBkYXRhTGF5ZXIucHVzaChvYmopO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRHdG1Ub0RvbSgpIHtcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5icm93c2VyR2xvYmFscy5kb2N1bWVudFJlZigpO1xuICAgICAgICB0aGlzLnB1c2hPbkRhdGFMYXllcih7XG4gICAgICAgICAgICAnZ3RtLnN0YXJ0JzogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBldmVudDogJ2d0bS5qcydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ3RtU2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBndG1TY3JpcHQuaWQgPSAnR1RNc2NyaXB0JztcbiAgICAgICAgZ3RtU2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZ3RtU2NyaXB0LnNyYyA9IHRoaXMuYXBwbHlHdG1RdWVyeVBhcmFtcyhcbiAgICAgICAgICAgICcvL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanMnXG4gICAgICAgICk7XG4gICAgICAgIGRvYy5oZWFkLmluc2VydEJlZm9yZShndG1TY3JpcHQsIGRvYy5oZWFkLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IGlmcm0gPSBkb2MuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ3NyYycsXG4gICAgICAgICAgICB0aGlzLmFwcGx5R3RtUXVlcnlQYXJhbXMoJy8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWwnKVxuICAgICAgICApO1xuICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gJzAnO1xuICAgICAgICBpZnJtLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgaWZybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZnJtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICBjb25zdCBub3NjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCdub3NjcmlwdCcpO1xuICAgICAgICBub3NjcmlwdC5pZCA9ICdHVE1pZnJhbWUnO1xuICAgICAgICBub3NjcmlwdC5hcHBlbmRDaGlsZChpZnJtKTtcblxuICAgICAgICBkb2MuYm9keS5pbnNlcnRCZWZvcmUobm9zY3JpcHQsIGRvYy5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVzaFRhZyhpdGVtOiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEd0bVRvRG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoT25EYXRhTGF5ZXIoaXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseUd0bVF1ZXJ5UGFyYW1zKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogc3RyaW5nW10gPSBbYGlkPSR7dGhpcy5ndG1JZH1gXTtcblxuICAgICAgICBpZiAodGhpcy5ndG1BdXRoKSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaChgZ3RtX2F1dGg9JHt0aGlzLmd0bUF1dGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ndG1QcmV2aWV3KSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaChgZ3RtX3ByZXZpZXc9JHt0aGlzLmd0bVByZXZpZXd9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHVybCArPSAnPyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsICsgcGFyYW1zLmpvaW4oJyYnKTtcbiAgICB9XG59XG4iXX0=