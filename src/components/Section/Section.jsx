import css from './Section.module.css'
import classNames from 'classnames';

export const Section = ({ children }) => {
    return (<section className={classNames(css.section,css.profile)}>{children}</section>)
};
