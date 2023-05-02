import { AnimatePresence, motion } from 'framer-motion';
import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { useEffect, useState } from 'react';

import config from '../config/config';
import { download } from '../assets';
import state from '../store';
import { useSnapshot } from 'valtio';

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
