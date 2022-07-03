export declare class GoogleTagManagerService {
    googleTagManagerId: string;
    googleTagManagerAuth: string;
    googleTagManagerPreview: string;
    private isLoaded;
    private gtmId;
    private gtmAuth;
    private gtmPreview;
    private browserGlobals;
    constructor(googleTagManagerId: string, googleTagManagerAuth: string, googleTagManagerPreview: string);
    getDataLayer(): any;
    private pushOnDataLayer;
    addGtmToDom(): void;
    pushTag(item: object): void;
    private applyGtmQueryParams;
}
