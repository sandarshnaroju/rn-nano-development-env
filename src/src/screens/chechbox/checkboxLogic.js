import cloneDeep from 'lodash/cloneDeep';

const CheckboxScreenFunctions = {
  itemviewpress: (navigation, elements, index, item, completelistData) => {
    const cloned = cloneDeep(elements);
    switch (index) {
      case 0:
        cloned['v1'][1]['data'][0]['isChecked'] =
          !elements['v1'][1]['data'][0]['isChecked'];
        break;
      case 1:
        cloned['v1'][1]['data'][1]['isChecked'] =
          !elements['v1'][1]['data'][1]['isChecked'];
        break;

      default:
        break;
    }

    return cloned;
  },
};

export default CheckboxScreenFunctions;
