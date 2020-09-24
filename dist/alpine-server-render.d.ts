export { load } from 'alpine-test-utils';
interface AlpineServerRenderOptions {
    strip?: boolean;
    data?: any;
}
export declare function render(comp: string, options?: AlpineServerRenderOptions): string;
