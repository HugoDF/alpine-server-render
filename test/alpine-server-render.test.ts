import {test} from 'uvu';
import * as assert from 'uvu/assert';
import {render} from '../dist/alpine-server-render';

const xText = `<div x-data="{ msg: 'Hello' }" x-text="msg"></div>`;

test('works for x-text - no options', () => {
  const html = render(xText);
  assert.snapshot(
    html,
    `<div x-data="{ msg: 'Hello' }" x-text="msg">Hello</div>`
  );
});

const xFor = `<div x-data>
<template x-for="n in 3">
  <div x-text="n"></div>
</template>
</div>`;

const options = {strip: true};

test('works with x-for', () => {
  const html = render(xFor, options);
  assert.snapshot(html.replace(/\s/g, ''), `<div><div>1</div><div>2</div><div>3</div></div>`);
});

const xHtml = `<div x-data="{ html: '<h2>Hello</h2>' }" x-html="html">
</div>`;

test('works with x-html', () => {
  const html = render(xHtml, options);
  assert.snapshot(html.replace(/\s/g, ''), '<div><h2>Hello</h2></div>');
});

test('data option overrides top-level x-data contents', () => {
  const html = render(xText, {...options, data: {msg: 'testing message'}});
  assert.snapshot(html, '<div>testing message</div>');
});

test.run();
