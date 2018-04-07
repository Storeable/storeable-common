import React from 'react';
import PropsTypes from 'prop-types';
import { isEmpty } from 'javascript-utils/lib/utils';

const OnOffLabel = ({
  on,
  onText,
  offText,
  onColor,
  offColor,
  hideOnOff,
  emptyText
}) => {
  if (isEmpty(onText)) {
    if (hideOnOff) {
      return null;
    }

    return (<div>{emptyText}</div>);
  }

  return (
    <div>
      <span style={{
        color: (on ? onColor : offColor)
      }}
      >
        &#x25cf;
      </span>{' '}{(on ? onText : offText)}
    </div>
  );
};

OnOffLabel.propTypes = {
  on: PropsTypes.bool.isRequired,
  onText: PropsTypes.string,
  offText: PropsTypes.string,
  onColor: PropsTypes.string,
  offColor: PropsTypes.string,
  hideOnOff: PropsTypes.bool,
  emptyText: PropsTypes.string
};

OnOffLabel.defaultProps = {
  onText: '',
  offText: '',
  onColor: '#57d500',
  offColor: '#ff2e00',
  hideOnOff: false,
  emptyText: 'N/A'
};

export default OnOffLabel;
