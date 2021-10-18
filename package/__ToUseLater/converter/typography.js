const {
  REGEXP_STRONG,
  REGEXP_EM,

  REGEXP_IMAGE,
  REGEXP_LINK,
  
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,

  REGEXP_UL_LIST,
  REGEXP_OL_LIST,

  REGEXP_BLOCKQUOTE,

  REGEXP_HR,
  REGEXP_PARAGRAPH,

  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL   
} = require('atherdon-newsletter-constants');




const {
  
  strong,
  italic,
  image,
  link,
  del,
  q,
  code,

  ulList,
  olList,

  blockquote,
  hr,
  
  paragraphWrapper,

  // br,
  // strong,
  empty
} = require('../callbacks');


// const {  } = require("atherdon-newsletter-constants");



const Typography = {

  strong: {
    key: 'REGEXP_STRONG',
    value: strong,
  },
  italic: {
    key: 'REGEXP_EM',
    value: italic,
  },

  image: {
    key: 'REGEXP_IMAGE',
    value: image,
  },
  
  link: {
    key: 'REGEXP_LINK',
    value: link,
  },

  del: {
    key: 'REGEXP_DEL',
    value: del,
  },

  q: {
    key: 'REGEXP_Q',
    value: q,

  },
  code: {
    key: 'REGEXP_CODE',
    value: code,

  },

  ulList: {
    key: 'REGEXP_UL_LIST',
    value: ulList,
  },
  olList: {
    key: 'REGEXP_OL_LIST',
    value: olList,
  },

  blockquote: {
    key: 'REGEXP_BLOCKQUOTE',
    value: blockquote,
  },

  hr: {
    key: 'REGEXP_HR',
    value: hr,    
  },


  paragraph: {
    key: 'REGEXP_PARAGRAPH',
    value: paragraphWrapper,
  },

  emptyUL: {
    key: 'REGEXP_EMPTY_UL',
    value: empty,
  },
  emptyOL: {
    key: 'REGEXP_EMPTY_OL',
    value: empty,
  },
};

export default Typography;
