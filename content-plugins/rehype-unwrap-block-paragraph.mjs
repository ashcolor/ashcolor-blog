// 画像や MDC コンポーネント（:custom-audio など）だけを含む段落から <p> を外す。
// コンポーネントのルートは div のため、p の中に入れると HTML パース時に p が閉じられ
// hydration mismatch になる。
const isBlockChild = (node) =>
    node.type === "element" && (node.tagName === "img" || node.tagName.includes("-"));

// 連続する画像の改行（remark-breaks の br）も空白として扱う
const isBlank = (node) =>
    (node.type === "text" && !node.value.trim()) ||
    (node.type === "element" && node.tagName === "br");

const unwrap = (parent) => {
    const children = [];
    for (const child of parent.children) {
        if (child.type === "element") {
            unwrap(child);
            if (child.tagName === "p") {
                const contents = child.children.filter((c) => !isBlank(c));
                if (contents.length > 0 && contents.every(isBlockChild)) {
                    children.push(...contents);
                    continue;
                }
            }
        }
        children.push(child);
    }
    parent.children = children;
};

export default function rehypeUnwrapBlockParagraph() {
    return (tree) => unwrap(tree);
}
