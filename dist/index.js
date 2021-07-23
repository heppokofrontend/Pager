/** Wrapping iterable objects with the pager function. */
export class Pager {
    views;
    _index = 0;
    values;
    /**
     * Switch the current page
     * @param index - Page number to move to
     * @returns - Items on the current page.
     */
    current(index) {
        this.index = index;
        return this.page;
    }
    /**
     * Switch the current page to the next.
     * @returns - Items on the next page.
     */
    next() {
        return this.current(++this.index);
    }
    /**
     * Switch the current page to the previous.
     * @returns - Items on the previous page.
     */
    prev() {
        return this.current(--this.index);
    }
    /** @returns - Last page number */
    get lastIndex() {
        return Math.ceil(this.values.length / this.views);
    }
    /** @param index - Page number to move to */
    set index(index) {
        if (index < 0) {
            this._index = 0;
            return;
        }
        if (this.lastIndex <= index) {
            this.index = this.lastIndex - 1;
            return;
        }
        this._index = index;
    }
    /** @returns - The current page number. */
    get index() {
        return this._index;
    }
    /** @returns - Items on the current page. */
    get page() {
        const { views, index } = this;
        const start = index * views;
        return this.values.slice(start, start + views);
    }
    /** A generator that returns this.values */
    *[Symbol.iterator]() {
        yield* this.values;
    }
    /**
     * @param values - Iterable objects to be managed by the pager
     * @param views - Number of items to be displayed per page
     */
    constructor(values, views = 5) {
        this.views = views;
        if (typeof values[Symbol.iterator] !== 'function') {
            throw new TypeError('The first argument must be an iterable.');
        }
        this.values = [...values];
        Object.defineProperty(this, 'values', {
            value: this.values,
        });
    }
}
