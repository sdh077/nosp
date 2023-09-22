/** @typedef {typeof __propDef.props}  YoutubeProps */
/** @typedef {typeof __propDef.events}  YoutubeEvents */
/** @typedef {typeof __propDef.slots}  YoutubeSlots */
export default class Youtube extends SvelteComponentTyped<{
    id?: any;
    animations?: boolean;
    altThumb?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    thumbnail: {};
    default: {};
}> {
}
export type YoutubeProps = typeof __propDef.props;
export type YoutubeEvents = typeof __propDef.events;
export type YoutubeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: any;
        animations?: boolean;
        altThumb?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        thumbnail: {};
        default: {};
    };
};
export { };
