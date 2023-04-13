/* eslint-disable react/display-name */
import classnames from 'classnames'
import styles from '../styles/FormInput.module.css'

export default function FormInput(props) {
    const {label, containerClassName, selectOptions, ...rest} = props
    let Input = (props) => <input {...props} />
    
    if (selectOptions) {
        Input = (props) => (
            <select {...props}>
                {selectOptions.map((optionValue, idx) => (
                    <option key={`${optionValue}-${idx}`}>{optionValue}</option>
                ))}
            </select>
        )
    }

    return (
        <div className={classnames(styles.container, containerClassName)}>
            <label>{label}</label>
            {<Input {...rest} />}
        </div>
    )
}