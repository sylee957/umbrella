import * as assert from "assert";
import { defDGraph } from "@thi.ng/dgraph";
import { toDot } from "../src";

describe("dgraph-dot", () => {
    it("basic", () => {
        const g = defDGraph([
            ["a", "b"],
            ["a", "c"],
            ["b", "d"],
            ["c", "d"],
            ["c", "e"],
        ]);
        const dot = toDot(g, {
            id: (node) => node,
            attribs: {
                node: {
                    style: "filled",
                    fillcolor: "black",
                    fontcolor: "white",
                },
                edge: {
                    arrowsize: 0.75,
                },
            },
        });
        assert.equal(
            dot,
            `digraph g {
node[style="filled", fillcolor="black", fontcolor="white"];
edge[arrowsize="0.75"];
"b"[label="b"];
"c"[label="c"];
"d"[label="d"];
"e"[label="e"];
"a"[label="a"];
"b" -> "d";
"c" -> "d";
"c" -> "e";
"a" -> "b";
"a" -> "c";
}`
        );
    });
});
