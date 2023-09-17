export const carMenuStyles = {
  singleValue: styles => ({
    ...styles,
    color: '#121417',
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    width: '224px',
    padding: '8px 18px',

    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '20px',

    color: isSelected ? '#121417' : 'rgba(18, 20, 23, 0.2)',
    backgroundColor: '#F7F7FB;',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '14px',
    outline: 'none',
  }),

  option: (styles, state) => ({
    ...styles,

    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',

    color: state.isSelected ? '#121417' : '#rgba(18, 20, 23, 0.2)',
    backgroundColor: 'none',

    cursor: 'pointer',
  }),

  menu: styles => ({
    ...styles,
    top: '40px',
    padding: '14px 8px 14px 18px',

    backgroundColor: '#fff',
    boxShadow: 'px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
  }),

  menuList: provided => ({
    ...provided,
    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      position: 'relative',
      right: '-4px',
      top: 0,
      width: '8px',
      height: '110px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: 'rgba(18, 20, 23, 0.05)',
    },

    '&::-webkit-scrollbar-track': {
      background: '#fff',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,

    color: '#121417',

    transition: 'all 300ms ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  placeholder: styles => ({
    ...styles,
    color: '#121417',
  }),
};

export const priceStyles = {
  singleValue: styles => ({
    ...styles,
    color: '#121417',
  }),

  ValueContainer: styles => ({
    ...styles,
    overflow: 'visible',
  }),

  input: (styles, state) => ({
    ...styles,
    '&:after': {
      content: !state.value.length ? '"$"' : '""',

      position: 'absolute',
      right: '15px',
      top: '6px',

      color: '#121417',
    },
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    padding: '8px 18px',
    width: '125px',

    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '20px',

    color: isSelected ? '#121417' : '#12141733',
    backgroundColor: '#F7F7FB;',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '14px',
    outline: 'none',
  }),

  option: (styles, state) => ({
    ...styles,

    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',

    color: state.isSelected ? '#121417' : '#12141733',
    backgroundColor: 'none',

    cursor: 'pointer',
  }),

  menu: styles => ({
    ...styles,
    top: '40px',
    padding: '14px 8px 14px 18px',

    backgroundColor: '#fff',
    boxShadow: 'px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
  }),

  menuList: provided => ({
    ...provided,

    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      position: 'relative',
      right: '-4px',
      top: 0,
      width: '8px',
      height: '110px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#1214170D',
      borderRadius: '10px',
    },

    '&::-webkit-scrollbar-track': {
      background: '#fff',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,

    color: '#121417',

    transition: 'all 300ms ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  placeholder: styles => ({
    ...styles,
    color: '#121417',
  }),
};
