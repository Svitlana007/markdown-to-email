/* eslint-disable */
import { replaceWrapper, newLine } from '../helpers';

//----------------------

const _hr = () => `${newLine}<hr />`;
const _empty = () => '';

function _code(text, content) {
  // const params = {
  //   content: content,
  // };

  // const config = {
  //   params,
  //   name: 'code',
  //   debug: true,
  // };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }
  // const result = replaceWrapper('code', config);
  return result;
}

function _del(text, content) {
  // const params = {
  //   content: content,
  // };

  // const config = {
  //   params,
  //   name: 'del',
  //   debug: true,
  // };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }

  // const result = replaceWrapper('del', config);
  return result;
}

function _q(text, content) {
  // const params = {
  //   content: content,
  // };

  // const config = {
  //   params,
  //   name: 'q',
  //   debug: true,
  // };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }

  // const result = replaceWrapper('q', config);
  return result;
}

function _italic(text, left, _, content, right) {
  // const params = {
  //   content: content,
  // };

  // const config = {
  //   params,
  //   name: 'italic',
  //   debug: true,
  // };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }

  // const result = replaceWrapper('italic', config);
  return result;
}

function _strong(text, doubleAsterix, content, asterix) {
  // const params = {
  //   content: `${content + asterix}`,
  // };

  // const config = {
  //   params,
  //   name: 'strong',
  //   debug: true,
  // };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catch_error_trace_output(error);
  // }

  // const result = replaceWrapper('strong', config);
  return result;
}

function _link(text, title, href) {
  // const params = {
  //   content: title.trim(),
  //   href: href.trim(),
  // };

  // const config = {
  //   params,
  //   name: 'link',
  //   debug: true,
  // };

  const result = replaceWrapper('link', config);
  return result;
}

function _blockquote(text, tmp, item) {
  // const params = {
  //   content: `${newLine}${item.trim()}`,
  // };

  // const config = {
  //   params,
  //   name: 'blockquote',
  //   debug: true,
  // };

  // const result = replaceWrapper('blockquote', config);
  return result;
}

function _meme(text, src, href, altText) {
  // const params = {
  //   src: src.trim(),
  //   altText: altText.trim(),
  //   href: href.trim(),
  // };

  // const config = {
  //   params,
  //   name: 'meme',
  //   debug: true,
  // };

  // const result = replaceWrapper('image', config);
  return result;
}

function _header(text, chars, content) {
  // const params = {
  //   content: content.trim(),
  // };

  // const config = {
  //   params,
  //   name: 'header',
  //   debug: true,
  // };

  const titleType = ['mainTitle', 'subtitle', 'heading'];

  // const result = newLine + replaceWrapper(titleType[chars.length - 1], config);

  return result;
}

function _separator() {
  const config = {};

  // const result = `${newLine}${replaceWrapper('separator', config)}${newLine}`;

  return result;
}

function _previewText(text, content) {
  // const params = {
  //   content: content,
  // };

  // const config = {
  //   params,
  //   name: 'preview',
  //   debug: true,
  // };

  this.previewText = true;

  // return replaceWrapper('previewText', config, 'body');
}

export {
  _strong,
  _link,
  _blockquote,
  _meme,
  _header,
  _italic,
  _del,
  _q,
  _code,
  _hr,
  _empty,
  _previewText,
  _separator,
};
