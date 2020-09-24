import {render as xRender} from 'alpine-test-utils';
export {load} from 'alpine-test-utils';

const stripXAttrs = (node: Element): void => {
  if (!node.removeAttribute) return;
  const {attributes = {}} = node;
  const xAttrs = Object.values(attributes)
    .map(({name}) => name)
    .filter((name) => name.startsWith('x-'));
  xAttrs.forEach((attr) => {
    node.removeAttribute(attr);
  });
};

function strip(rootNode: HTMLElement): void {
  [rootNode, ...Array.from(rootNode.querySelectorAll('*'))].forEach((node) => {
    if (node.tagName === 'TEMPLATE') {
      node.remove();
    } else {
      stripXAttrs(node);
    }
  });
}

interface AlpineServerRenderOptions {
  strip?: boolean;
  data?: any;
}

export function render(
  comp: string,
  options: AlpineServerRenderOptions = {}
): string {
  const mounted: HTMLElement = xRender(comp, options.data);
  if (options.strip) {
    strip(mounted);
  }

  return mounted.outerHTML;
}
