import type { NumericArray } from "@thi.ng/api";
import type { IRandom } from "@thi.ng/random";
import type { Color, ColorFactory, ReadonlyColor, TypedColor } from "../api";
import { defColor } from "../defcolor";
import { hsvHsl } from "../hsv/hsv-hsl";
import { rgbHsl } from "../rgb/rgb-hsl";

// export function hsl(col: Color, offset?: number, stride?: number): HSL;
// export function hsl(h?: number, s?: number, l?: number, a?: number): HSL;
// export function hsl(...args: any[]) {
//     return new HSL(...ensureArgs(args));
// }

// export class HSL extends AColor<HSL> implements IVector<HSL> {
//     h!: number;
//     s!: number;
//     l!: number;
//     alpha!: number;

//     get mode(): ColorMode {
//         return "hsl";
//     }

//     copy() {
//         return new HSL(this.deref());
//     }

//     copyView() {
//         return new HSL(this.buf, this.offset, this.stride);
//     }

//     empty() {
//         return new HSL();
//     }
// }

// declareIndices(HSL.prototype, ["h", "s", "l", "alpha"]);

export declare class HSL implements TypedColor<HSL> {
    buf: NumericArray;
    offset: number;
    stride: number;
    h: number;
    s: number;
    l: number;
    alpha: number;
    [id: number]: number;
    readonly mode: "hsl";
    readonly length: 4;
    [Symbol.iterator](): Iterator<number, any, undefined>;
    clamp(): this;
    copy(): HSL;
    copyView(): HSL;
    deref(): Color;
    empty(): HSL;
    eqDelta(o: HSL, eps?: number): boolean;
    randomize(rnd?: IRandom): this;
    set(src: ReadonlyColor): this;
    toJSON(): number[];
}

export const hsl = <ColorFactory<HSL>>defColor({
    mode: "hsl",
    order: <const>["h", "s", "l", "alpha"],
    from: { rgb: rgbHsl, srgb: rgbHsl, hsv: hsvHsl },
});
