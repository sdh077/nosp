/** @typedef {typeof __propDef.props}  ImageProps */
/** @typedef {typeof __propDef.events}  ImageEvents */
/** @typedef {typeof __propDef.slots}  ImageSlots */
export default class Image extends SvelteComponentTyped<{
    play?: boolean;
    title?: string;
    id?: string;
    altThumb?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ImageProps = typeof __propDef.props;
export type ImageEvents = typeof __propDef.events;
export type ImageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        play?: boolean;
        title?: string;
        id?: string;
        altThumb?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
