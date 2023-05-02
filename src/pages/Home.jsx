import { AnimatePresence, motion } from 'framer-motion';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

import { CustomButton } from '../components';
import state from '../store';
import { useSnapshot } from 'valtio';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className='home'
          {...slideAnimation('left')}
        >
          <motion.header {...slideAnimation('down')}>
            <img
              src='./threejs.png'
              alt='logo'
              className='object-contain w-8 h-8'
            />
          </motion.header>
          <motion.div
            className='font-bold text-9xl'
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='hidden xl:block' /> DO IT.
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md text-base font-normal text-grey-600'>
                Create your unique and exclusive shirt with out brand-new 3D
                customization tool. <strong>Unleash you imagination</strong> and
                define your own style.
              </p>
              <CustomButton
                type='filled'
                title='Customize It'
                handleClick={() => (state.intro = false)}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
