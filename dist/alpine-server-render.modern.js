import { render as render$1 } from 'alpine-test-utils';
export { load } from 'alpine-test-utils';

const stripXAttrs = node => {
  if (!node.removeAttribute) return;
  const {
    attributes = {}
  } = node;
  const xAttrs = Object.values(attributes).map(({
    name
  }) => name).filter(name => name.startsWith('x-'));
  xAttrs.forEach(attr => {
    node.removeAttribute(attr);
  });
};

function strip(rootNode) {
  [rootNode, ...Array.from(rootNode.querySelectorAll('*'))].forEach(node => {
    if (node.tagName === 'TEMPLATE') {
      node.remove();
    } else {
      stripXAttrs(node);
    }
  });
}

function render(comp, options = {}) {
  const mounted = render$1(comp, options.data);

  if (options.strip) {
    strip(mounted);
  }

  return mounted.outerHTML;
}

export { render };
