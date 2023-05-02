import classnames from 'classnames'
import styles from '../styles/FormSection.module.css'

export default function FormSection(props) {
    const {title, children} = props
    return (
        <>
            <div className={classnames(styles.header, 'row')}>{title}</div>
            <div className="row">
                {children}
            </div>
        </>
    )
}
