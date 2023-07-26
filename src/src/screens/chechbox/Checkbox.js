import {NANO} from 'react-native-nano';
const ExampleElements = [
  {name: 'Normal', isChecked: true},
  {name: 'Custom', isChecked: true},
  {name: 'Indeterminate', isChecked: null},

  {name: 'Checked (Disabled)', isChecked: true, disabled: true},
  {name: 'Unchecked (Disabled)', isChecked: false, disabled: true},
  {name: 'Indeterminate (Disabled)', isChecked: true, disabled: true},
];
const checkbox = {
  component: NANO.CHECKBOX,
  value: true,
  name: 'checkbox',
  props: {
    style: {},
  },

  onClick: (navigation, elements, value) => {
    return elements;
  },
  onLongClick: elements => {},
};

const text = {
  component: NANO.TEXT,
  value: 'text',
  name: 'text',

  props: {
    style: {fontSize: 14},
  },
};
const Normaltext = {
  component: NANO.TEXT,
  value: 'Hello friends',

  props: {
    style: {fontSize: 14},
  },
};

const textandcheckbox = {
  component: NANO.VIEW,

  content: [text, checkbox],

  props: {
    style: {
      paddingHorizontal: 10,

      justifyContent: 'space-between',
      flexDirection: 'row',

      alignItems: 'center',
      height: 50,
    },
  },

  onClick: (navigation, elements, value) => {
    return elements;
  },
  onLongClick: elements => {},
};
const flatlist = {
  component: NANO.FLAT_LIST,
  itemview: textandcheckbox,
  data: ExampleElements,
  mapper: (data, index) => {
    return {
      text: data.name,
      checkbox: {
        value: data.isChecked,
        props: {
          color: index === 1 ? 'orange' : null,
        },
      },
    };
  },

  onClick: 'itemviewpress',
};

const CheckboxObj = {
  v1: [Normaltext, flatlist],
};
export default CheckboxObj;
