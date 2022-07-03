/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-google-tag-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleTagManagerService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: ['googleTagManagerId',] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: ['googleTagManagerAuth',] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: ['googleTagManagerPreview',] }] }
    ]; };
    /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.ɵɵinject("googleTagManagerId"), i0.ɵɵinject("googleTagManagerAuth", 8), i0.ɵɵinject("googleTagManagerPreview", 8)); }, token: GoogleTagManagerService, providedIn: "root" });
    return GoogleTagManagerService;
}());
export { GoogleTagManagerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTdEO0lBa0JJLGlDQUN5QyxrQkFBMEIsRUFDWixvQkFBNEIsRUFDekIsdUJBQStCO1FBRmhELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUNaLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUTtRQUN6Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQVE7UUFqQmpGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLakIsbUJBQWMsR0FBRztZQUNyQixTQUFTOzs7WUFBVDtnQkFDSSxPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDO1lBQ0QsV0FBVzs7O1lBQVg7Z0JBQ0ksT0FBTyxRQUFRLENBQUM7WUFDcEIsQ0FBQztTQUNKLENBQUM7UUFPRSxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRU0sOENBQVk7OztJQUFuQjs7WUFDVSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUU7UUFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU8saURBQWU7Ozs7O0lBQXZCLFVBQXdCLEdBQVc7O1lBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLDZDQUFXOzs7SUFBbEI7O1lBQ1UsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO1FBQzdDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDakIsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ2pDLEtBQUssRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQzs7WUFFRyxTQUFTLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0MsU0FBUyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFDM0IsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkIsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQ3BDLG1DQUFtQyxDQUN0QyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBRWhELElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUNiLEtBQUssRUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsQ0FDakUsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzs7WUFFM0IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSx5Q0FBTzs7OztJQUFkLFVBQWUsSUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLHFEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsR0FBVzs7WUFDN0IsTUFBTSxHQUFhLENBQUMsUUFBTSxJQUFJLENBQUMsS0FBTyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBZSxJQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekIsR0FBRyxJQUFJLEdBQUcsQ0FBQztTQUNkO1FBRUQsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkEvRkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs2Q0FpQlEsTUFBTSxTQUFDLG9CQUFvQjs2Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7NkNBQ3pDLFFBQVEsWUFBSSxNQUFNLFNBQUMseUJBQXlCOzs7a0NBdkJyRDtDQWtHQyxBQWhHRCxJQWdHQztTQTdGWSx1QkFBdUI7Ozs7OztJQUNoQywyQ0FBeUI7Ozs7O0lBQ3pCLHdDQUFzQjs7Ozs7SUFDdEIsMENBQXdCOzs7OztJQUN4Qiw2Q0FBMkI7Ozs7O0lBRTNCLGlEQU9FOztJQUdFLHFEQUErRDs7SUFDL0QsdURBQStFOztJQUMvRSwwREFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXNMb2FkZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIGd0bUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBndG1BdXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBndG1QcmV2aWV3OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGJyb3dzZXJHbG9iYWxzID0ge1xuICAgICAgICB3aW5kb3dSZWYoKTogYW55IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICAgIH0sXG4gICAgICAgIGRvY3VtZW50UmVmKCk6IGFueSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJJZCcpIHB1YmxpYyBnb29nbGVUYWdNYW5hZ2VySWQ6IHN0cmluZyxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdCgnZ29vZ2xlVGFnTWFuYWdlckF1dGgnKSBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlckF1dGg6IHN0cmluZyxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdCgnZ29vZ2xlVGFnTWFuYWdlclByZXZpZXcnKSBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlclByZXZpZXc6IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLmd0bUlkID0gZ29vZ2xlVGFnTWFuYWdlcklkO1xuICAgICAgICB0aGlzLmd0bUF1dGggPSBnb29nbGVUYWdNYW5hZ2VyQXV0aDtcbiAgICAgICAgdGhpcy5ndG1QcmV2aWV3ID0gZ29vZ2xlVGFnTWFuYWdlclByZXZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGFMYXllcigpIHtcbiAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5icm93c2VyR2xvYmFscy53aW5kb3dSZWYoKTtcbiAgICAgICAgd2luZG93WydkYXRhTGF5ZXInXSA9IHdpbmRvd1snZGF0YUxheWVyJ10gfHwgW107XG4gICAgICAgIHJldHVybiB3aW5kb3dbJ2RhdGFMYXllciddO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaE9uRGF0YUxheWVyKG9iajogb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGRhdGFMYXllciA9IHRoaXMuZ2V0RGF0YUxheWVyKCk7XG4gICAgICAgIGRhdGFMYXllci5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEd0bVRvRG9tKCkge1xuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmJyb3dzZXJHbG9iYWxzLmRvY3VtZW50UmVmKCk7XG4gICAgICAgIHRoaXMucHVzaE9uRGF0YUxheWVyKHtcbiAgICAgICAgICAgICdndG0uc3RhcnQnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGV2ZW50OiAnZ3RtLmpzJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBndG1TY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGd0bVNjcmlwdC5pZCA9ICdHVE1zY3JpcHQnO1xuICAgICAgICBndG1TY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBndG1TY3JpcHQuc3JjID0gdGhpcy5hcHBseUd0bVF1ZXJ5UGFyYW1zKFxuICAgICAgICAgICAgJy8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcydcbiAgICAgICAgKTtcbiAgICAgICAgZG9jLmhlYWQuaW5zZXJ0QmVmb3JlKGd0bVNjcmlwdCwgZG9jLmhlYWQuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgY29uc3QgaWZybSA9IGRvYy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAgIHRoaXMuYXBwbHlHdG1RdWVyeVBhcmFtcygnLy93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbCcpXG4gICAgICAgICk7XG4gICAgICAgIGlmcm0uc3R5bGUud2lkdGggPSAnMCc7XG4gICAgICAgIGlmcm0uc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICBpZnJtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGNvbnN0IG5vc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ25vc2NyaXB0Jyk7XG4gICAgICAgIG5vc2NyaXB0LmlkID0gJ0dUTWlmcmFtZSc7XG4gICAgICAgIG5vc2NyaXB0LmFwcGVuZENoaWxkKGlmcm0pO1xuXG4gICAgICAgIGRvYy5ib2R5Lmluc2VydEJlZm9yZShub3NjcmlwdCwgZG9jLmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXNoVGFnKGl0ZW06IG9iamVjdCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkR3RtVG9Eb20oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hPbkRhdGFMYXllcihpdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5R3RtUXVlcnlQYXJhbXModXJsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zOiBzdHJpbmdbXSA9IFtgaWQ9JHt0aGlzLmd0bUlkfWBdO1xuXG4gICAgICAgIGlmICh0aGlzLmd0bUF1dGgpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGBndG1fYXV0aD0ke3RoaXMuZ3RtQXV0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmd0bVByZXZpZXcpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGBndG1fcHJldmlldz0ke3RoaXMuZ3RtUHJldmlld31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgICAgICAgdXJsICs9ICc/JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmwgKyBwYXJhbXMuam9pbignJicpO1xuICAgIH1cbn1cbiJdfQ==