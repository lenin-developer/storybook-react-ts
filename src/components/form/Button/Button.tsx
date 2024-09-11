import classNames from 'classnames';
import {ButtonProps} from './ButtonProps.ts';
import styles from './Button.module.css';


export const Button = ({text, shape, size}: ButtonProps, {...resPorps}) => {

    const classnames = classNames({
        [styles[`shape-${shape}-btn-story`]] : true,
        [styles[`size-${size}-btn-story`]]: true
    })

    console.log('classnames',classnames);



    return (
        <button type='button'  className={styles['btn-story']} {...resPorps} >{text}</button>
    )
}