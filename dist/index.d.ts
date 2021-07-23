/** Wrapping iterable objects with the pager function. */
export declare class Pager<T = any> {
    views: number;
    private _index;
    values: T[];
    /**
     * Switch the current page
     * @param index - Page number to move to
     * @returns - Items on the current page.
     */
    current(index: number): T[];
    /**
     * Switch the current page to the next.
     * @returns - Items on the next page.
     */
    next(): T[];
    /**
     * Switch the current page to the previous.
     * @returns - Items on the previous page.
     */
    prev(): T[];
    /** @returns - Last page number */
    get lastIndex(): number;
    /** @param index - Page number to move to */
    set index(index: number);
    /** @returns - The current page number. */
    get index(): number;
    /** @returns - Items on the current page. */
    get page(): T[];
    /** A generator that returns this.values */
    [Symbol.iterator](): Generator<T, void, undefined>;
    /**
     * @param values - Iterable objects to be managed by the pager
     * @param views - Number of items to be displayed per page
     */
    constructor(values: Iterable<T>, views?: number);
}
