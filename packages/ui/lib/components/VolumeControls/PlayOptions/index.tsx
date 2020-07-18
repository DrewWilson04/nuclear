import React from 'react';
import cx from 'classnames';
import { Icon, SemanticICONS } from 'semantic-ui-react';

import styles from './styles.scss';

export type PlayOptionControlProps = {
  name: string;
  icon: SemanticICONS;
  enabled?: boolean;
  onToggle?: () => void;
};

const PlayOptionControl: React.FC<PlayOptionControlProps> = ({
  icon,
  enabled = true,
  onToggle
}) => (
    <Icon
      className={cx(
        styles.play_option_icon,
        { disabled: !enabled }
        )}
      name={icon}
      onClick={onToggle}
      size='big'
    />
  );

export type PlayOptionsProps = {
  playOptions: PlayOptionControlProps[]
};

const PlayOptions: React.FC<PlayOptionsProps> = ({
  playOptions
}) => (
    <div className={styles.play_options}>
      {
        playOptions.map(playOption => <PlayOptionControl {...playOption} />)
      }
    </div>
  )

export default PlayOptions;