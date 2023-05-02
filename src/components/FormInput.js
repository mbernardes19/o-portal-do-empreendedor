/* eslint-disable react/display-name */
import classnames from 'classnames'
import styles from '../styles/FormInput.module.css'

export default function FormInput(props) {
    const {label, containerClassName, selectOptions, inputRef, errors, ...rest} = props

    return (
        <div className={classnames(
            styles.container,
            containerClassName,
            {
                [styles.inlineContainer]: rest.type === 'checkbox',
                [styles.erroredField]: errors && errors.message
            }
        )}>
            <label for={label}>{label}</label>
            {selectOptions ?
                <select {...inputRef} {...rest} >
                    {selectOptions.map((optionValue, idx) => (
                        <option key={`${optionValue}-${idx}`}>{optionValue}</option>
                    ))}
                </select>:
                <input id={label} {...inputRef} {...rest} className={styles[rest.type]} />
            }
            <p className={styles.error}>{errors && errors.message}</p>
        </div>
    )
}