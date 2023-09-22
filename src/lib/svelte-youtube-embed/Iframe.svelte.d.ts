/** @typedef {typeof __propDef.props}  IframeProps */
/** @typedef {typeof __propDef.events}  IframeEvents */
/** @typedef {typeof __propDef.slots}  IframeSlots */
export default class Iframe extends SvelteComponentTyped<{
    animations: any;
    title?: string;
    id?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IframeProps = typeof __propDef.props;
export type IframeEvents = typeof __propDef.events;
export type IframeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        animations: any;
        title?: string;
        id?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
