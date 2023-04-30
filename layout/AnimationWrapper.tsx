import { motion } from 'framer-motion';

interface AWrapperProps {
  children: any;
  className?: string;
}

const defaultProps: AWrapperProps = {
  children: '',
};

const AnimationWrapper = ({ children, className, ...props } = defaultProps) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimationWrapper;
