// Coloca um botão "Copiar" ao lado de qualquer `connect IP:porta` em código inline nos posts.
const labels = {
  'pt-br': ['Copiar', 'Copiado!'],
  es: ['Copiar', '¡Copiado!'],
  en: ['Copy', 'Copied!'],
};

function walk(node, fn) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    const out = fn(node, child);
    if (out === child) walk(child, fn);
    return out;
  });
}

export default function rehypeConnectCopy() {
  return (tree, file) => {
    const path = String(file.path ?? '').replaceAll('\\', '/');
    const lang = ['pt-br', 'es', 'en'].find((l) => path.includes(`/blog/${l}/`)) ?? 'pt-br';
    const [label, done] = labels[lang];
    walk(tree, (parent, child) => {
      if (child.type !== 'element' || child.tagName !== 'code' || parent.tagName === 'pre') return child;
      const text = (child.children ?? []).map((c) => c.value ?? '').join('');
      const m = text.match(/^connect\s+(\S+)$/);
      if (!m) return child;
      return {
        type: 'element', tagName: 'span', properties: { className: ['connect-line'] },
        children: [
          child,
          {
            type: 'element', tagName: 'button',
            properties: { type: 'button', className: ['btn', 'btn-gold', 'copy-inline'], dataCopy: m[1], dataDone: done },
            children: [{ type: 'element', tagName: 'span', properties: { className: ['copy-label'] }, children: [{ type: 'text', value: label }] }],
          },
        ],
      };
    });
  };
}
